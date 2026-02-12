import { Resend } from "resend";
import { NextResponse } from "next/server";

const SUPPORT_KEYWORDS = [
  "bug",
  "fout",
  "werkt niet",
  "kapot",
  "probleem",
  "error",
  "storing",
  "traag",
  "offline",
  "support",
  "onderhoud",
  "update",
  "updaten",
  "aanpassing",
  "wijziging",
  "wijzigen",
  "aanpassen",
  "niet bereikbaar",
  "down",
  "ssl",
  "certificaat",
  "backup",
];

const FACTUUR_KEYWORDS = [
  "factuur",
  "facturen",
  "betaling",
  "betalen",
  "bedrag",
  "kosten",
  "prijs",
  "prijzen",
  "tarief",
  "tarieven",
  "offerte",
  "creditnota",
  "incasso",
  "rekening",
  "btw",
  "korting",
];

function detectCategory(bericht: string): { email: string; label: string } {
  const lower = bericht.toLowerCase();

  if (FACTUUR_KEYWORDS.some((kw) => lower.includes(kw))) {
    return {
      email: "facturen@akwebsolutions.nl",
      label: "Factuur / Financieel",
    };
  }

  if (SUPPORT_KEYWORDS.some((kw) => lower.includes(kw))) {
    return { email: "support@akwebsolutions.nl", label: "Support" };
  }

  return { email: "info@akwebsolutions.nl", label: "Algemeen" };
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { naam, email, bericht } = await request.json();

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ongeldig e-mailadres." },
        { status: 400 },
      );
    }

    const { email: toEmail, label } = detectCategory(bericht);

    await resend.emails.send({
      from: "AK Web Solutions <noreply@akwebsolutions.nl>",
      to: [toEmail],
      replyTo: email,
      subject: `[${label}] Bericht van ${naam}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3D2975;">${label} — via contactformulier</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Naam:</strong> ${naam}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Categorie:</strong> ${label}</p>
          <p><strong>Bericht:</strong></p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${bericht}</div>
          <hr style="border: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #999; font-size: 12px;">Dit bericht is verzonden via het contactformulier op akwebsolutions.nl</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "AK Web Solutions <noreply@akwebsolutions.nl>",
      to: [email],
      subject: "Bedankt voor je bericht - AK Web Solutions",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3D2975;">Bedankt voor je bericht, ${naam}!</h2>
          <p>Ik heb je bericht ontvangen en neem zo snel mogelijk contact met je op, meestal binnen 24 uur.</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #666;"><strong>Jouw bericht:</strong></p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${bericht}</div>
          <hr style="border: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #999; font-size: 12px;">AK Web Solutions | Baarn, Nederland | info@akwebsolutions.nl</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Er ging iets mis bij het verzenden. Probeer het later opnieuw.",
      },
      { status: 500 },
    );
  }
}

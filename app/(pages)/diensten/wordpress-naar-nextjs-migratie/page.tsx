import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { WordpressMigratieContent } from "./content";

export const metadata: Metadata = {
  title: "WordPress naar Next.js Migratie | AK Web Solutions",
  description:
    "Migreer je WordPress website naar Next.js voor betere prestaties, veiligheid en SEO. AK Web Solutions verzorgt een naadloze migratie zonder dataverlies.",
  keywords: [
    "wordpress migratie",
    "wordpress naar nextjs",
    "wordpress verhuizen",
    "website migratie",
    "wordpress alternatief",
  ],
  openGraph: {
    title: "WordPress naar Next.js Migratie | AK Web Solutions",
    description:
      "Migreer je WordPress website naar Next.js voor betere prestaties, veiligheid en SEO. AK Web Solutions verzorgt een naadloze migratie zonder dataverlies.",
    url: "https://akwebsolutions.nl/diensten/wordpress-naar-nextjs-migratie",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress naar Next.js Migratie - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress naar Next.js Migratie | AK Web Solutions",
    description:
      "Migreer je WordPress website naar Next.js voor betere prestaties, veiligheid en SEO. Naadloze migratie zonder dataverlies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/wordpress-naar-nextjs-migratie",
  },
};

export default function WordpressNaarNextjsMigratiePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <WordpressMigratieContent />
      </main>
      <Footer />
    </div>
  );
}

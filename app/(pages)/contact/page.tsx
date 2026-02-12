import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact - Gratis Adviesgesprek | AK Web Solutions Baarn",
  description:
    "Neem contact op voor een gratis en vrijblijvend adviesgesprek over jouw website, webshop of software project. Bel, mail of plan direct een afspraak. Reactie binnen 24 uur.",
  alternates: {
    canonical: "https://akwebsolutions.nl/contact",
  },
  openGraph: {
    title: "Contact - Gratis Adviesgesprek | AK Web Solutions",
    description:
      "Plan een gratis adviesgesprek over jouw project. Reactie binnen 24 uur gegarandeerd.",
    url: "https://akwebsolutions.nl/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}

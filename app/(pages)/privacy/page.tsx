import type { Metadata } from "next";
import { PrivacyContent } from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Lees ons privacybeleid. AK Web Solutions respecteert je privacy en beschermt je persoonsgegevens conform de AVG.",
  alternates: {
    canonical: "https://akwebsolutions.nl/privacy",
  },
  openGraph: {
    title: "Privacy Policy | AK Web Solutions",
    description:
      "Lees ons privacybeleid. AK Web Solutions respecteert je privacy en beschermt je persoonsgegevens.",
    url: "https://akwebsolutions.nl/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

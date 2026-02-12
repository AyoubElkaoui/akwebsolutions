import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { MaatwerkSoftwareContent } from "./content";

export const metadata: Metadata = {
  title: "Maatwerk Software | Custom Web Applicaties & Software op Maat",
  description:
    "Maatwerk software en custom web applicaties die perfect aansluiten bij jouw bedrijfsprocessen. Van dashboards en CRM systemen tot API's en automatiseringen. Software op maat ontwikkeld door een ervaren developer uit Baarn.",
  keywords: [
    "maatwerk software",
    "software op maat",
    "custom web applicatie",
    "software ontwikkeling",
    "web applicatie laten maken",
    "dashboard ontwikkeling",
    "CRM systeem op maat",
    "API development",
    "maatwerk software Baarn",
  ],
  openGraph: {
    title: "Maatwerk Software | Custom Web Applicaties & Software op Maat",
    description:
      "Maatwerk software en custom web applicaties die perfect aansluiten bij jouw bedrijfsprocessen. Dashboards, CRM systemen, API's en meer.",
    url: "https://akwebsolutions.nl/diensten/maatwerk-software",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maatwerk Software - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk Software | Custom Web Applicaties & Software op Maat",
    description:
      "Maatwerk software die perfect aansluit bij jouw bedrijfsprocessen. Dashboards, CRM, API's en automatiseringen.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/maatwerk-software",
  },
};

export default function MaatwerkSoftwarePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <MaatwerkSoftwareContent />
      </main>
      <Footer />
    </div>
  );
}

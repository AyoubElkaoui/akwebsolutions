import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { OverOnsContent } from "@/components/sections/over-ons-content";

export const metadata: Metadata = {
  title: "Over Mij - Freelance Web Developer Baarn",
  description:
    "Ik ben Ayoub, freelance web developer en oprichter van AK Web Solutions in Baarn. Met 5+ jaar ervaring bouw ik professionele websites, webshops en maatwerk software voor ondernemers in heel Nederland.",
  alternates: {
    canonical: "https://akwebsolutions.nl/over-ons",
  },
  openGraph: {
    title: "Over Mij - Freelance Web Developer | AK Web Solutions",
    description:
      "Freelance web developer uit Baarn met 5+ jaar ervaring. Van websites tot maatwerk software — ontdek mijn verhaal en werkwijze.",
    url: "https://akwebsolutions.nl/over-ons",
  },
};

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <OverOnsContent />
      </main>
      <Footer />
    </div>
  );
}

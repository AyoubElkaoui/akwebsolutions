import type { Metadata } from "next";
import { VoorwaardenContent } from "./content";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "Lees de algemene voorwaarden van AK Web Solutions voor onze web development en webdesign diensten.",
  alternates: {
    canonical: "https://akwebsolutions.nl/voorwaarden",
  },
  openGraph: {
    title: "Algemene Voorwaarden | AK Web Solutions",
    description:
      "Lees de algemene voorwaarden van AK Web Solutions voor onze web development diensten.",
    url: "https://akwebsolutions.nl/voorwaarden",
  },
};

export default function VoorwaardenPage() {
  return <VoorwaardenContent />;
}

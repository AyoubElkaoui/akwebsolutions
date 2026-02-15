"use client";

import { motion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B4FB5]/10 via-black to-black" />

      {/* Large 404 watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[10rem] font-black leading-none text-white/[0.02] md:text-[20rem] lg:text-[30rem]">
          404
        </span>
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-sm font-medium text-[#B39DDB]">
              Pagina niet gevonden
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-black text-white md:text-8xl">
            4
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              0
            </span>
            4
          </h1>

          <p className="mx-auto mb-10 max-w-md text-lg text-white/50">
            Oeps! De pagina die je zoekt bestaat niet of is verplaatst.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button
                size="lg"
                className="group h-12 rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] px-8 font-semibold text-white"
              >
                <Home className="mr-2 h-4 w-4" />
                Naar homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-[#7B4FB5]/50 bg-[#7B4FB5]/10 px-8 font-semibold text-white hover:border-[#7B4FB5]/70 hover:bg-[#7B4FB5]/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact opnemen
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

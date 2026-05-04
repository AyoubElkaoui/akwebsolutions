"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ahmed D.",
    company: "AD Loodgietersbedrijf",
    role: "Eigenaar",
    rating: 5,
    text: "Ayoub heeft een prachtige website gebouwd voor ons loodgietersbedrijf. Sinds de lancering krijgen we aanzienlijk meer online aanvragen. Professioneel, snel en altijd bereikbaar.",
    result: "+60% meer aanvragen",
    avatar: "A",
    color: "from-[#7B4FB5] to-[#B39DDB]",
  },
  {
    name: "Patrick V.",
    company: "Pro Banden Service",
    role: "Directeur",
    rating: 5,
    text: "Onze nieuwe website laadt razendsnel en staat bovenaan in Google. De samenwerking verliep vlot en Ayoub denkt altijd mee. Absoluut aanrader!",
    result: "Pagina 1 in Google",
    avatar: "P",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Fatima L.",
    company: "Loens Collection",
    role: "Founder",
    rating: 5,
    text: "De webshop die Ayoub voor ons heeft gebouwd is exact wat we zochten. Strak design, makkelijk te beheren en klanten vinden het geweldig. Onze online omzet is verdubbeld!",
    result: "2x online omzet",
    avatar: "F",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Mohammed K.",
    company: "MKH Bouw",
    role: "Eigenaar",
    rating: 5,
    text: "Top vakman die precies begrijpt wat je nodig hebt. De website ziet er professioneel uit en genereert dagelijks nieuwe leads. Heel tevreden met het resultaat.",
    result: "Dagelijks nieuwe leads",
    avatar: "M",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Thomas B.",
    company: "Clockd",
    role: "Co-Founder",
    rating: 5,
    text: "Ayoub heeft onze complexe SaaS applicatie van A tot Z gebouwd. Technisch sterk, goede communicatie en altijd op tijd. We werken zeker weer samen.",
    result: "SaaS gelanceerd",
    avatar: "T",
    color: "from-emerald-500 to-green-400",
  },
  {
    name: "Sarah J.",
    company: "Startup Founder",
    role: "CEO",
    rating: 5,
    text: "Als startup hadden we een strak budget maar wel hoge verwachtingen. Ayoub heeft beide gecombineerd — een website die eruitziet als enterprise maar betaalbaar was.",
    result: "Eerste investeerders aangetrokken",
    avatar: "S",
    color: "from-violet-500 to-purple-400",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="relative bg-black py-32">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#7B4FB5]/[0.05] blur-[150px]" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-amber-400">5.0 gemiddeld uit 6 reviews</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Wat klanten{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              zeggen
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-white/50">
            Geen mooie praatjes, maar echte resultaten voor echte bedrijven.
          </p>
        </motion.div>

        {/* Google rating strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white">5.0</span>
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-white/40">Google Reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all hover:border-[#7B4FB5]/20 hover:bg-[#7B4FB5]/[0.03]"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-6 w-6 text-[#7B4FB5]/40" />

              {/* Rating */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="my-4 flex-1 text-sm leading-relaxed text-white/60">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {review.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/[0.07] pt-4">
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.color} text-sm font-bold text-white`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{review.name}</div>
                  <div className="text-xs text-white/40">
                    {review.role} · {review.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  User,
  Briefcase,
  Eye,
  Users,
  Award,
  Layout,
  UserCircle,
  FileText,
  Mail,
  Search,
  Smartphone,
  Wallet,
  Zap,
  MessageSquare,
  Settings,
  CalendarOff,
  TrendingUp,
  Globe,
  Wrench,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const whyWebsite = [
  {
    icon: Briefcase,
    title: "Professionele uitstraling",
    description:
      "Een professionele website laat zien dat je je vak serieus neemt. Opdrachtgevers kiezen eerder voor een ZZP'er die er online professioneel uitziet.",
  },
  {
    icon: Eye,
    title: "24/7 vindbaar",
    description:
      "Je website werkt dag en nacht voor je. Potentiele klanten kunnen je vinden, je werk bekijken en contact opnemen wanneer het hen uitkomt.",
  },
  {
    icon: Users,
    title: "Meer leads & opdrachten",
    description:
      "Een goede website trekt nieuwe klanten aan via Google en sociale media. Meer zichtbaarheid betekent meer aanvragen en een vollere agenda.",
  },
  {
    icon: Award,
    title: "Geloofwaardigheid bij opdrachtgevers",
    description:
      "Een eigen website geeft vertrouwen. Opdrachtgevers checken je online aanwezigheid voordat ze contact opnemen. Zorg dat je indruk maakt.",
  },
];

const zzpFeatures = [
  {
    icon: Layout,
    title: "Portfolio/werk overzicht",
    description:
      "Laat je beste werk zien met een visueel aantrekkelijk portfolio. Overtuig potentiele opdrachtgevers met concrete voorbeelden van je expertise.",
  },
  {
    icon: UserCircle,
    title: "Over mij pagina",
    description:
      "Vertel je verhaal en laat zien wie er achter het bedrijf zit. Persoonlijk contact maakt het verschil als ZZP'er.",
  },
  {
    icon: FileText,
    title: "Diensten & expertise",
    description:
      "Een helder overzicht van wat je aanbiedt, zodat bezoekers direct zien of je de juiste match bent voor hun project.",
  },
  {
    icon: Mail,
    title: "Contactformulier",
    description:
      "Een laagdrempelig contactformulier maakt het makkelijk om een aanvraag te doen. Meer conversies, minder drempels.",
  },
  {
    icon: Search,
    title: "SEO basis",
    description:
      "Je website wordt geoptimaliseerd voor Google, zodat potentiele klanten je vinden wanneer ze zoeken naar jouw diensten.",
  },
  {
    icon: Smartphone,
    title: "Mobiel-vriendelijk design",
    description:
      "Je website ziet er perfect uit op elk apparaat. Van smartphone tot desktop, je maakt altijd een goede indruk.",
  },
];

const tailoredBenefits = [
  {
    icon: Wallet,
    title: "Betaalbaar",
    description:
      "Een investering die zichzelf terugverdient. Scherpe tarieven speciaal voor ZZP'ers, zonder verborgen kosten.",
  },
  {
    icon: Zap,
    title: "Snel geleverd",
    description:
      "Binnen 2-3 weken live. Geen maandenlange trajecten, maar een snelle oplevering zodat je direct online zichtbaar bent.",
  },
  {
    icon: MessageSquare,
    title: "Een aanspreekpunt",
    description:
      "Persoonlijke aanpak met korte lijnen. Je hebt altijd direct contact met de developer die jouw website bouwt.",
  },
  {
    icon: Settings,
    title: "Zelf beheerbaar",
    description:
      "Een gebruiksvriendelijk CMS waarmee je zelf teksten en afbeeldingen kunt aanpassen. Geen technische kennis nodig.",
  },
  {
    icon: CalendarOff,
    title: "Geen abonnement nodig",
    description:
      "Je betaalt eenmalig voor je website. Geen maandelijkse kosten of langlopende contracten waar je aan vastzit.",
  },
  {
    icon: TrendingUp,
    title: "Groeit mee met je bedrijf",
    description:
      "Start klein en breid uit wanneer je wilt. Extra pagina's, functies of een webshop? Alles is mogelijk.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kennismakingsgesprek",
    description:
      "We bespreken je wensen, doelgroep en doelen. Wat maakt jouw dienstverlening uniek? Welke uitstraling past bij jou? Op basis van dit gesprek stel ik een voorstel op maat samen.",
  },
  {
    step: "02",
    title: "Ontwerp",
    description:
      "Ik maak een design dat past bij jouw persoonlijke merk en doelgroep. Je krijgt een visueel ontwerp te zien en kunt feedback geven voordat we verder gaan met de bouw.",
  },
  {
    step: "03",
    title: "Bouw",
    description:
      "Je website wordt gebouwd met moderne technologie. Snel, veilig en SEO-vriendelijk. Ik zorg voor een perfect werkende website die er op elk apparaat goed uitziet.",
  },
  {
    step: "04",
    title: "Lancering",
    description:
      "Na je goedkeuring gaat de website live. Ik regel de technische setup, koppel je domeinnaam en zorg dat alles soepel draait. Je ontvangt een uitleg over het beheer van je website.",
  },
];

const faqs = [
  {
    question: "Wat kost een website voor een ZZP'er?",
    answer:
      "Neem contact op, we werken met scherpe tarieven voor ZZP'ers. De exacte kosten zijn afhankelijk van je wensen en het aantal pagina's. We maken altijd een voorstel op maat, zodat je precies weet waar je aan toe bent. Geen verborgen kosten.",
  },
  {
    question: "Wat moet ik zelf aanleveren?",
    answer:
      "Je levert de teksten, foto's en je logo aan. Heb je die nog niet? Geen probleem. Ik kan helpen met het schrijven van teksten en het selecteren van professionele stock foto's. Samen zorgen we dat de content aansluit bij je doelgroep.",
  },
  {
    question: "Hoe snel is mijn website af?",
    answer:
      "De meeste ZZP-websites zijn binnen 2-3 weken live. Dit is afhankelijk van hoe snel je de content aanlevert en hoeveel feedbackrondes er nodig zijn. Heb je haast? Bespreek de mogelijkheden voor een spoedtraject.",
  },
  {
    question: "Kan ik de website zelf bijwerken?",
    answer:
      "Ja, je website wordt opgeleverd met een gebruiksvriendelijk CMS (content management systeem). Hiermee kun je zelf eenvoudig teksten, afbeeldingen en pagina's aanpassen. Je krijgt een korte uitleg zodat je direct aan de slag kunt.",
  },
  {
    question: "Heb ik zelf hosting nodig?",
    answer:
      "Ik kan de hosting voor je regelen of advies geven over de beste hostingoplossing voor jouw situatie. De kosten voor hosting zijn meestal een paar euro per maand. Ik zorg ervoor dat alles correct is geconfigureerd.",
  },
  {
    question: "Wordt mijn website gevonden in Google?",
    answer:
      "Ja, elke website die ik bouw bevat een SEO basis. Dit betekent dat je website technisch geoptimaliseerd is voor zoekmachines. Denk aan snelle laadtijden, correcte meta tags, gestructureerde data en mobiel-vriendelijk design. Wil je nog beter gevonden worden? Bekijk dan ook mijn SEO optimalisatie dienst.",
  },
];

export function WebsiteZzpContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2975]/15 via-black to-black" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              <User className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Website voor ZZP
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Website voor{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                ZZP&#39;ers & Freelancers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Als zelfstandige verdien je een professionele online
              aanwezigheid. Een website die jouw expertise uitstraalt, nieuwe
              klanten aantrekt en je onderscheidt van de concurrentie. Betaalbaar,
              snel geleverd en volledig op maat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Gratis kennismakingsgesprek
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Bekijk portfolio
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why ZZP Needs a Website */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Waarom Heb Je als ZZP&#39;er een{" "}
              <span className="text-[#B39DDB]">Website Nodig?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              In een wereld waar opdrachtgevers online zoeken naar de juiste
              professional, is een eigen website geen luxe meer maar een
              noodzaak.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyWebsite.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <item.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What a ZZP Website Includes */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Wat zit er in jouw{" "}
              <span className="text-[#B39DDB]">ZZP website?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Alles wat je nodig hebt om online professioneel over te komen en
              nieuwe klanten aan te trekken.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zzpFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <feature.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Speciaal voor{" "}
                <span className="text-[#B39DDB]">ZZP&#39;ers</span>
              </h2>
              <p className="max-w-2xl text-lg text-white/60">
                Onze aanpak is speciaal afgestemd op de behoeften van
                zelfstandige ondernemers en freelancers.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {tailoredBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                    <benefit.icon className="h-6 w-6 text-[#B39DDB]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Van idee naar{" "}
                <span className="text-[#B39DDB]">jouw website</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#7B4FB5]/30 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                      <span className="text-lg font-bold text-[#B39DDB]">
                        {item.step}
                      </span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="mt-4 h-full w-px bg-gradient-to-b from-[#7B4FB5]/30 to-transparent" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Veelgestelde vragen over{" "}
                <span className="text-[#B39DDB]">websites voor ZZP&#39;ers</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over het laten maken
                van een website als zelfstandige.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#7B4FB5]/30"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <h3 className="pr-4 text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#B39DDB]" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
                Meer nodig dan een website?{" "}
                <span className="text-[#B39DDB]">Bekijk onze diensten</span>
              </h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                Een website is de basis. Wil je nog meer uit je online
                aanwezigheid halen? Bekijk onze aanvullende diensten:
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/diensten/seo-optimalisatie"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Search className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  SEO Optimalisatie
                </h3>
                <p className="text-sm text-white/50">
                  Beter gevonden worden in Google
                </p>
              </Link>
              <Link
                href="/diensten/website-onderhoud"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Wrench className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Website Onderhoud
                </h3>
                <p className="text-sm text-white/50">
                  Zorgeloos online met professioneel beheer
                </p>
              </Link>
              <Link
                href="/diensten/maatwerk-software"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Code2 className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Maatwerk Software
                </h3>
                <p className="text-sm text-white/50">
                  Custom web applicaties op maat
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/20 to-[#7B4FB5]/10 p-8 text-center sm:p-12"
          >
            <User className="mx-auto mb-6 h-12 w-12 text-[#B39DDB]" />
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Start met Jouw Professionele Online Aanwezigheid
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Klaar om je als ZZP&#39;er professioneel te presenteren online?
              Plan een gratis kennismakingsgesprek en ontdek wat wij voor je
              kunnen betekenen.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Gratis kennismakingsgesprek
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/diensten/website-laten-maken">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Website laten maken
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

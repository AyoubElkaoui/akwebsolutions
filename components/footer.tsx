"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { name: "Over Ons", href: "/over-ons" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Diensten", href: "/diensten" },
    { name: "Contact", href: "/contact" },
  ],
  diensten: [
    { name: "Web Development", href: "/diensten#web-development" },
    { name: "SEO Optimalisatie", href: "/diensten#seo" },
    { name: "E-commerce", href: "/diensten#ecommerce" },
    { name: "Maatwerk Software", href: "/diensten#maatwerk" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Algemene Voorwaarden", href: "/voorwaarden" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/ak-web-solutions-nl/",
  },
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/AyoubElkaoui",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61573229608493",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#7B4FB5]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#B39DDB]/5 blur-3xl" />

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <div className="relative h-10 w-10 md:h-14 md:w-14">
                <Image
                  src="/fulllogo_transparent_nobuffer.png"
                  alt="AK Web Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  AK Web Solutions
                </div>
                <div className="text-sm text-white/50">
                  Web Development & Design
                </div>
              </div>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
              Ik bouw moderne websites en webapplicaties die niet alleen mooi
              zijn, maar ook presteren. Van concept tot lancering.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@akwebsolutions.nl"
                className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#B39DDB]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7B4FB5]/10 transition-colors group-hover:bg-[#7B4FB5]/20">
                  <Mail className="h-4 w-4 text-[#B39DDB]" />
                </div>
                info@akwebsolutions.nl
              </a>
              <a
                href="tel:+31685722387"
                className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#B39DDB]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7B4FB5]/10 transition-colors group-hover:bg-[#7B4FB5]/20">
                  <Phone className="h-4 w-4 text-[#B39DDB]" />
                </div>
                +31 (0)6 85 72 23 87
              </a>
              <div className="group flex items-center gap-3 text-sm text-white/60">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7B4FB5]/10">
                  <MapPin className="h-4 w-4 text-[#B39DDB]" />
                </div>
                Baarn, Nederland
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Bedrijf
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#B39DDB]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Diensten
            </h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#B39DDB]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#B39DDB]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} AK Web Solutions. Alle rechten
            voorbehouden.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:border-[#7B4FB5]/50 hover:bg-[#7B4FB5]/10"
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4 text-white/60 transition-colors group-hover:text-[#B39DDB]" />
              </a>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-sm text-white/50">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span>Beschikbaar voor nieuwe projecten</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

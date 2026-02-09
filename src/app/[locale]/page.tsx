"use client";

import { ArrowUpRight, Zap, Settings2, Layers, ShieldCheck, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LogoLoop } from "@/components/LogoLoop";
import Threads from "@/components/Threads";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();

  const industryCards = [
    {
      key: "realEstate" as const,
      previewBg: "bg-[#E8F0FE]",
      href: "/real-estate-os" as const,
    },
    {
      key: "healthServices" as const,
      previewBg: "bg-[#ECFDF5]",
      href: "/health-services-os" as const,
    },
    {
      key: "custom" as const,
      previewBg: "bg-[#FFF7ED]",
      href: "/custom-solutions" as const,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* ──────────────────── HERO SECTION ──────────────────── */}
      <div className="bg-cream rounded-b-3xl border-b border-sand/30 relative overflow-hidden">
        <section className="relative pt-28 pb-40 px-6 sm:pt-36 sm:pb-48 lg:pt-40 lg:pb-60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              {/* Badge */}
              {/* Heading */}
              <h1 className="relative z-0 font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                {t("hero.title")} <br />
                {t("hero.titleHighlight")}
              </h1>

              {/* Subtitle */}
              <p className="relative z-20 mt-8 text-lg leading-8 text-text-muted max-w-2xl mx-auto sm:text-xl">
                {t("hero.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="relative z-20 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--color-sand)_0%,transparent_70%)] opacity-30 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative p-1 rounded-2xl border border-sand/20 bg-white/30 backdrop-blur-md"
                >
                  <Link
                    href="/book-a-call"
                    className="inline-flex items-center justify-center px-8 py-3 font-medium tracking-tight text-white rounded-xl bg-charcoal text-lg shadow-xl shadow-charcoal/10 hover:bg-black transition-all active:scale-95"
                  >
                    {t("hero.cta")}
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={{ pathname: "/", hash: "industries" }}
                    className="relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-tight text-charcoal rounded-xl bg-white/60 backdrop-blur-sm border border-sand/50 text-lg hover:bg-white/80 transition-all active:scale-95"
                  >
                    {t("hero.ctaSecondary")}
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Threads Overlay */}
          <div className="absolute -top-[15%] left-0 right-0 bottom-0 z-10 pointer-events-none">
            <Threads
              color={[0.64, 0.62, 0.59]}
              amplitude={0.5}
              distance={0.15}
              enableMouseInteraction={false}
              speed={0.4}
            />
          </div>
        </section>

        {/* ──────────────────── FEATURED PLATFORMS (half-visible on load) ──────────────────── */}
        <section id="industries" className="pb-16 px-6 bg-transparent relative z-10 -mt-20 sm:-mt-24 lg:-mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industryCards.map((card, index) => (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={card.href} className="block group h-full">
                    <div className="bg-white rounded-xl border border-sand p-8 relative flex flex-col h-full overflow-hidden group hover:border-warm-gray transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-lg">
                      <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 transition-all duration-300" />

                      <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                        {t(`industries.${card.key}.name`)}
                      </h3>

                      <p className="text-text-muted text-sm leading-relaxed mb-8 min-h-[4.5rem] line-clamp-3">
                        {t(`industries.${card.key}.description`)}
                      </p>

                      <div className={`mt-auto aspect-[4/3] rounded-2xl ${card.previewBg} border border-sand/50 overflow-hidden relative`}>
                        {/* Placeholder Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1/2 h-[1px] bg-charcoal/5 rotate-45" />
                          <div className="w-1/2 h-[1px] bg-charcoal/5 -rotate-45" />
                        </div>
                        <div className="absolute top-4 left-4 flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                          <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                          <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50" />
                        <div className="absolute top-1/4 right-4 w-12 h-12 bg-white/80 rounded-lg shadow-sm" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ──────────────────── AI CAPABILITIES SECTION ──────────────────── */}
      <section id="ai-solutions" className="pt-24 pb-16 px-6 bg-cream relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4"
            >
              {t("capabilities.label")}
            </motion.h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-[1.1] tracking-tight">
              {t("capabilities.title")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Automation Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">
                {t("capabilities.automation.title")}
              </h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                {t("capabilities.automation.description")}
              </p>
              <div className="mt-auto aspect-[16/8] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative group-hover:bg-sand/30 transition-colors">
                <div className="absolute inset-0 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm">
                    <Image src="/images/automation-agents-visual.png" alt={t("capabilities.automation.title")} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Voice Agent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">
                {t("capabilities.voice.title")}
              </h4>
              <p className="text-text-muted leading-relaxed text-sm mb-4">
                {t("capabilities.voice.description")}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {(["Vision", "Planning", "Marketing"] as const).map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full bg-cream border border-sand text-[9px] font-bold uppercase tracking-wider text-charcoal/40">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto aspect-[16/8] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative group-hover:bg-sand/30 transition-colors">
                <div className="absolute inset-0 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm">
                    <Image src="/images/ai-voice-agent-visual.png" alt={t("capabilities.voice.title")} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lead Qualification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">
                {t("capabilities.leads.title")}
              </h4>
              <p className="text-text-muted leading-relaxed text-sm mb-4">
                {t("capabilities.leads.description")}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {(["Conversion", "Sales"] as const).map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-full bg-cream border border-sand text-[9px] font-bold uppercase tracking-wider text-charcoal/40">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto aspect-[16/8] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative group-hover:bg-sand/30 transition-colors">
                <div className="absolute inset-0 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm">
                    <Image src="/images/lead-qualification-visual.png" alt={t("capabilities.leads.title")} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-warm-gray group-hover:text-charcoal/70 group-hover:scale-125 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">
                {t("capabilities.analytics.title")}
              </h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">
                {t("capabilities.analytics.description")}
              </p>
              <div className="mt-auto aspect-[16/8] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative group-hover:bg-sand/30 transition-colors">
                <div className="absolute inset-0 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm">
                    <Image src="/images/data-analytics-visual.png" alt={t("capabilities.analytics.title")} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Logos */}
          <div className="mt-12 pt-12 border-t border-sand/50 pointer-events-none select-none overflow-hidden">
            <p className="text-center text-xs font-semibold text-text-muted/50 uppercase tracking-widest mb-6">
              {t("hero.trustedBy")}
            </p>
            <LogoLoop
              logos={[
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">OpenAI</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Anthropic</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">LangChain</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Mistral</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Pinecone</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">NVIDIA</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Meta</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">Groq</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">HuggingFace</span> },
                { node: <span className="text-charcoal font-display font-bold tracking-tighter opacity-30 text-2xl">LlamaIndex</span> },
              ]}
              speed={35}
              gap={60}
              logoHeight={32}
              fadeOut={true}
              fadeOutColor="#F5F0EB"
              pauseOnHover={false}
              scaleOnHover={false}
            />
          </div>
        </div>
      </section>

      {/* ──────────────────── BENEFITS SECTION ──────────────────── */}
      <section id="benefits" className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              {t("benefits.label")}
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              {t("benefits.title")} <br />
              {t("benefits.titleLine2")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Speed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Zap className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">{t("benefits.speed.title")}</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">{t("benefits.speed.description")}</p>
              <div className="mt-auto h-2 bg-cream rounded-full overflow-hidden border border-sand/50">
                <div className="h-full bg-accent-blue w-3/4 animate-pulse" />
              </div>
            </motion.div>

            {/* Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Settings2 className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">{t("benefits.control.title")}</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">{t("benefits.control.description")}</p>
              <div className="mt-auto flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 h-1 bg-sand rounded-full overflow-hidden">
                    <div className="h-full bg-charcoal/20 w-1/2" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Book a Meeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-xl bg-charcoal border border-charcoal hover:border-charcoal/80 transition-all duration-500 h-full flex flex-col relative cursor-pointer shadow-xl"
            >
              <h4 className="font-display text-3xl font-bold text-white mb-2">{t("benefits.bookMeeting.title")}</h4>
              <p className="text-white/70 text-sm leading-relaxed max-w-[80%]">
                {t("benefits.bookMeeting.description")}
              </p>
              <Link
                href="/book-a-call"
                className="absolute bottom-8 right-8 inline-flex items-center justify-center px-6 py-2.5 font-medium tracking-tight text-charcoal rounded-lg bg-white hover:bg-white/90 transition-colors shadow-sm"
              >
                {t("benefits.bookMeeting.cta")}
                <ArrowUpRight className="ml-2 w-4 h-4 text-charcoal" />
              </Link>
            </motion.div>

            {/* Flexibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Share2 className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">{t("benefits.flexibility.title")}</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">{t("benefits.flexibility.description")}</p>
              <div className="mt-auto flex gap-3 justify-center items-center">
                <div className="w-6 h-6 rounded-lg border border-sand bg-cream" />
                <div className="w-3 h-px bg-sand" />
                <div className="w-8 h-8 rounded-full border border-sand bg-cream flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                </div>
                <div className="w-3 h-px bg-sand" />
                <div className="w-6 h-6 rounded-lg border border-sand bg-cream" />
              </div>
            </motion.div>

            {/* Deep Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <Layers className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">{t("benefits.depth.title")}</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">{t("benefits.depth.description")}</p>
              <div className="mt-auto flex flex-col gap-1.5">
                <div className="h-1 bg-accent-blue/40 w-full rounded" />
                <div className="h-1 bg-accent-blue/20 w-3/4 rounded" />
                <div className="h-1 bg-accent-blue/10 w-1/2 rounded" />
              </div>
            </motion.div>

            {/* Proven Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 h-full flex flex-col relative cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-accent-blue mb-6" />
              <h4 className="font-display text-xl font-bold text-charcoal mb-3">{t("benefits.experience.title")}</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-8">{t("benefits.experience.description")}</p>
              <div className="mt-auto flex items-end gap-1 px-4">
                {[4, 7, 5, 8, 6].map((h, i) => (
                  <div key={i} className="flex-1 bg-charcoal/5 rounded-t" style={{ height: `${h * 4}px` }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────── HOW IT WORKS SECTION ──────────────────── */}
      <section id="how-it-works" className="py-32 px-6 bg-cream border-y border-sand relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              {t("howItWorks.label")}
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              {t("howItWorks.title")}
            </h3>
          </div>

          <div className="relative">
            {/* Peristaltic pulse line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none hidden lg:block">
              <svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none" className="overflow-visible">
                <line x1="0" y1="22" x2="1200" y2="22" stroke="#E8E2DA" strokeWidth="1" />
                <line x1="0" y1="38" x2="1200" y2="38" stroke="#E8E2DA" strokeWidth="1" />
                <path d="M 0,22 L 1200,22" fill="none" stroke="#A39E97" strokeWidth="1.5" opacity="0.4">
                  <animate attributeName="d" dur="4s" repeatCount="indefinite"
                    values="M 0,18 Q 150,22 300,22 Q 450,22 600,22 Q 750,22 900,22 Q 1050,22 1200,22;M 0,22 Q 150,18 300,22 Q 450,22 600,22 Q 750,22 900,22 Q 1050,22 1200,22;M 0,22 Q 150,22 300,18 Q 450,22 600,22 Q 750,22 900,22 Q 1050,22 1200,22;M 0,22 Q 150,22 300,22 Q 450,18 600,22 Q 750,22 900,22 Q 1050,22 1200,22;M 0,22 Q 150,22 300,22 Q 450,22 600,18 Q 750,22 900,22 Q 1050,22 1200,22;M 0,22 Q 150,22 300,22 Q 450,22 600,22 Q 750,18 900,22 Q 1050,22 1200,22;M 0,22 Q 150,22 300,22 Q 450,22 600,22 Q 750,22 900,18 Q 1050,22 1200,22;M 0,22 Q 150,22 300,22 Q 450,22 600,22 Q 750,22 900,22 Q 1050,18 1200,22;M 0,18 Q 150,22 300,22 Q 450,22 600,22 Q 750,22 900,22 Q 1050,22 1200,22" />
                </path>
                <path d="M 0,38 L 1200,38" fill="none" stroke="#A39E97" strokeWidth="1.5" opacity="0.4">
                  <animate attributeName="d" dur="4s" repeatCount="indefinite"
                    values="M 0,42 Q 150,38 300,38 Q 450,38 600,38 Q 750,38 900,38 Q 1050,38 1200,38;M 0,38 Q 150,42 300,38 Q 450,38 600,38 Q 750,38 900,38 Q 1050,38 1200,38;M 0,38 Q 150,38 300,42 Q 450,38 600,38 Q 750,38 900,38 Q 1050,38 1200,38;M 0,38 Q 150,38 300,38 Q 450,42 600,38 Q 750,38 900,38 Q 1050,38 1200,38;M 0,38 Q 150,38 300,38 Q 450,38 600,42 Q 750,38 900,38 Q 1050,38 1200,38;M 0,38 Q 150,38 300,38 Q 450,38 600,38 Q 750,42 900,38 Q 1050,38 1200,38;M 0,38 Q 150,38 300,38 Q 450,38 600,38 Q 750,38 900,42 Q 1050,38 1200,38;M 0,38 Q 150,38 300,38 Q 450,38 600,38 Q 750,38 900,38 Q 1050,42 1200,38;M 0,42 Q 150,38 300,38 Q 450,38 600,38 Q 750,38 900,38 Q 1050,38 1200,38" />
                </path>
                <circle r="5" cy="30" fill="#2D7FF9" opacity="0.35">
                  <animate attributeName="cx" from="-20" to="1220" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="r" values="5;7;5;7;5;7;5;7;5" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.4;0.2;0.4;0.2;0.4;0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" cy="30" fill="#2D7FF9" opacity="0.2">
                  <animate attributeName="cx" from="-20" to="1220" dur="4s" begin="2s" repeatCount="indefinite" />
                  <animate attributeName="r" values="3.5;5;3.5;5;3.5;5;3.5;5;3.5" dur="4s" begin="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.1;0.25;0.1;0.25;0.1;0.25;0.1;0.25;0.1" dur="4s" begin="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="30" r="3" fill="#E8E2DA" stroke="#A39E97" strokeWidth="1">
                  <animate attributeName="fill" dur="4s" repeatCount="indefinite" values="#E8E2DA;#2D7FF9;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA" />
                </circle>
                <circle cx="600" cy="30" r="3" fill="#E8E2DA" stroke="#A39E97" strokeWidth="1">
                  <animate attributeName="fill" dur="4s" repeatCount="indefinite" values="#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#2D7FF9;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA" />
                </circle>
                <circle cx="1000" cy="30" r="3" fill="#E8E2DA" stroke="#A39E97" strokeWidth="1">
                  <animate attributeName="fill" dur="4s" repeatCount="indefinite" values="#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#E8E2DA;#2D7FF9;#E8E2DA" />
                </circle>
              </svg>
            </div>

            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {(["discovery", "build", "launch"] as const).map((stepKey, index) => (
                <motion.div
                  key={stepKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative min-h-[280px]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-4xl font-bold text-sand/40 group-hover:text-accent-blue/40 transition-colors duration-300">
                      {t(`howItWorks.steps.${stepKey}.step`)}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cream border border-sand flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                    </div>
                  </div>
                  <h4 className="font-display text-xl font-bold text-charcoal mb-3">
                    {t(`howItWorks.steps.${stepKey}.title`)}
                  </h4>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {t(`howItWorks.steps.${stepKey}.description`)}
                  </p>
                  <div className="mt-8 pt-6 border-t border-sand/30 flex gap-2">
                    <div className="w-1/3 h-1 bg-cream rounded-full overflow-hidden">
                      <div className="h-full bg-sand w-1/2" />
                    </div>
                    <div className="w-2/3 h-1 bg-cream rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── FINAL CTA SECTION ──────────────────── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
            <Threads
              color={[0.64, 0.62, 0.59]}
              amplitude={0.5}
              distance={0.15}
              enableMouseInteraction={false}
              speed={0.2}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {t("cta.title")} <br />
              {t("cta.titleLine2")}
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center px-8 py-4 font-medium tracking-tight text-charcoal rounded-lg bg-white hover:bg-white/90 transition-colors text-lg shadow-sm"
            >
              {t("cta.button")}
              <ArrowUpRight className="ml-2 w-5 h-5 text-charcoal" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

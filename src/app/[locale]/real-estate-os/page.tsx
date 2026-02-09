"use client";

import { Link } from "@/i18n/navigation";
import { Building2, TrendingUp, Users, MessageSquare, BarChart3, Zap, Globe, ShieldCheck, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export default function RealEstateOS() {
  const features = [
    {
      icon: TrendingUp,
      title: "AI Property Valuation",
      desc: "Get instant, data-backed property valuations using machine learning models trained on millions of transactions, local trends, and market signals."
    },
    {
      icon: Users,
      title: "Automated Lead Nurturing",
      desc: "Engage prospects across email, SMS, and social with intelligent follow-ups that adapt based on buyer behavior and intent signals."
    },
    {
      icon: MessageSquare,
      title: "AI Voice & Chat Agents",
      desc: "Handle inbound inquiries 24/7. Qualify leads, schedule viewings, and answer property questions in multiple languages automatically."
    },
    {
      icon: BarChart3,
      title: "Transaction Orchestration",
      desc: "Automate the entire deal pipeline — from offer to close. Track milestones, trigger workflows, and keep every stakeholder in sync."
    },
    {
      icon: Bot,
      title: "Smart CRM Integration",
      desc: "Seamlessly connect with your existing CRM. Enrich contact profiles, score leads automatically, and surface your best opportunities."
    },
    {
      icon: Globe,
      title: "Market Intelligence",
      desc: "Real-time dashboards with neighborhood analytics, pricing trends, inventory levels, and competitive insights at your fingertips."
    }
  ];

  const results = [
    { metric: "3x", label: "Faster lead response time" },
    { metric: "40%", label: "Increase in qualified leads" },
    { metric: "60%", label: "Reduction in manual tasks" },
    { metric: "24/7", label: "Automated availability" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-24 px-6 sm:pt-36 sm:pb-32 bg-cream overflow-hidden">
        <Particles
          className="absolute inset-0 z-0 bg-transparent"
          quantity={80}
          size={1.2}
          color="#A39E97"
          staticity={60}
          ease={40}
        />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4 block font-display">
              Real Estate OS
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl leading-[1.05]">
              Close more deals. Respond faster. Work less.
            </h1>
            <p className="mt-8 text-lg leading-8 text-text-muted max-w-2xl sm:text-xl">
              Automated property valuation, lead nurturing, and transaction management — purpose-built for high-performing real estate teams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book-a-call"
                className="inline-flex items-center justify-center px-8 py-3 font-medium tracking-tight text-white rounded-xl bg-charcoal text-lg shadow-xl shadow-charcoal/10 hover:bg-black transition-all active:scale-95"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-12 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-2">{item.metric}</div>
                <div className="text-text-muted text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Platform Capabilities
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Everything your team needs, <br />
              automated by AI.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative"
              >
                <feature.icon className="w-5 h-5 text-accent-blue mb-6" />
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{feature.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              How It Works
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              From onboarding to ROI <br />
              in weeks, not months.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Discovery & Audit", desc: "We map your current workflows, tech stack, and pain points to identify the highest-impact AI opportunities for your team." },
              { step: "02", title: "Build & Integrate", desc: "Our engineers build and connect your custom AI agents, automation flows, and analytics dashboards into your existing systems." },
              { step: "03", title: "Launch & Optimize", desc: "Go live with full support. We monitor performance, fine-tune models, and train your team during a 30-day optimization period." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-4xl font-bold text-sand/40 group-hover:text-accent-blue/40 transition-colors duration-300">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-cream border border-sand flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>

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
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to transform <br />
            your real estate operations?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Join the teams using Autonymo to close more deals, faster, with less manual work.
          </p>
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center px-8 py-2.5 font-medium tracking-tight text-white rounded-lg bg-accent-blue text-lg"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}

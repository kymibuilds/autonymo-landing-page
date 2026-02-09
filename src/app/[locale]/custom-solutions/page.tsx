"use client";

import { Link } from "@/i18n/navigation";
import { Layers, Settings2, Workflow, Cpu, Lock, Plug, Sparkles, Code2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export default function CustomSolutions() {
  const capabilities = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      desc: "Map, design, and automate any business process end-to-end — from simple task routing to complex multi-system orchestration."
    },
    {
      icon: Cpu,
      title: "Custom AI Agents",
      desc: "Purpose-built AI agents trained on your data, your logic, and your business rules. Not generic — truly custom."
    },
    {
      icon: Plug,
      title: "System Integration",
      desc: "Connect any combination of CRMs, ERPs, databases, APIs, and legacy systems into one intelligent, automated ecosystem."
    },
    {
      icon: Code2,
      title: "Bespoke Dashboards",
      desc: "Real-time operational dashboards designed around your KPIs, data sources, and decision-making workflows."
    },
    {
      icon: Lock,
      title: "Private Infrastructure",
      desc: "Deploy on your own infrastructure or a dedicated cloud environment. Your data never leaves your control."
    },
    {
      icon: RefreshCw,
      title: "Continuous Optimization",
      desc: "AI models that learn from your operations over time, continuously improving accuracy, efficiency, and outcomes."
    }
  ];

  const process = [
    { step: "01", title: "Discovery Audit", desc: "A deep dive into your operations, tech stack, and strategic objectives to identify the highest-impact automation opportunities." },
    { step: "02", title: "Solution Architecture", desc: "We design a custom AI system blueprint — mapping agents, integrations, data flows, and automation logic tailored to your business." },
    { step: "03", title: "Build & Deploy", desc: "Our engineering team builds, tests, and deploys your solution. Full integration with your existing tools and processes." },
    { step: "04", title: "Train & Support", desc: "Comprehensive team training, documentation, and a 30-day optimization period with dedicated technical support." }
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
              Custom AI Solutions
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl leading-[1.05]">
              Your business logic, powered by our AI core.
            </h1>
            <p className="mt-8 text-lg leading-8 text-text-muted max-w-2xl sm:text-xl">
              A modular, highly-flexible operating system designed to automate any complex enterprise workflow from the ground up. Built around your processes, not ours.
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

      {/* Who it's for */}
      <section className="py-16 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Enterprise Teams", desc: "Organizations with complex, multi-department processes that need unified AI automation across the board." },
              { title: "Scaling Startups", desc: "Fast-growing companies that need to automate operations before hiring becomes a bottleneck." },
              { title: "Niche Industries", desc: "Businesses in verticals where off-the-shelf tools don't fit — logistics, legal, manufacturing, and more." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col"
              >
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              What We Build
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              Tailored AI systems <br />
              for any workflow.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white border border-sand hover:border-warm-gray transition-all duration-500 flex flex-col relative"
              >
                <cap.icon className="w-5 h-5 text-accent-blue mb-6" />
                <h4 className="font-display text-xl font-bold text-charcoal mb-3">{cap.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
              Our Process
            </h2>
            <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight">
              From audit to launch, <br />
              built around you.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {process.map((item, i) => (
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
            Have a complex workflow <br />
            that needs AI?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Let's start with a free discovery audit. We'll map your operations and show you where AI can make the biggest impact.
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

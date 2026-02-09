"use client";

import { Link } from "@/i18n/navigation";
import { Heart, Calendar, ShieldCheck, FileText, Brain, Clock, Phone, Activity, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export default function HealthServicesOS() {
  const features = [
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      desc: "AI-powered appointment management that optimizes chair time, reduces no-shows, and automatically fills cancellation gaps."
    },
    {
      icon: Brain,
      title: "AI-Assisted Diagnostics",
      desc: "Support clinical decisions with AI models that analyze imaging, flag anomalies, and surface relevant patient history in real time."
    },
    {
      icon: ShieldCheck,
      title: "Insurance Verification",
      desc: "Automate eligibility checks, pre-authorizations, and claims processing. Reduce denials and speed up reimbursement cycles."
    },
    {
      icon: Phone,
      title: "Patient Voice Agent",
      desc: "Handle appointment confirmations, post-visit follow-ups, and FAQ calls automatically in multiple languages, 24/7."
    },
    {
      icon: FileText,
      title: "Smart Documentation",
      desc: "Generate clinical notes, treatment plans, and patient summaries automatically from consultation data and templates."
    },
    {
      icon: Activity,
      title: "Practice Analytics",
      desc: "Real-time dashboards showing patient flow, revenue metrics, treatment acceptance rates, and operational efficiency KPIs."
    }
  ];

  const results = [
    { metric: "50%", label: "Reduction in no-shows" },
    { metric: "35%", label: "Faster insurance processing" },
    { metric: "8hrs", label: "Admin time saved per week" },
    { metric: "98%", label: "Patient satisfaction rate" }
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
              Health Services OS
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal sm:text-6xl lg:text-7xl leading-[1.05]">
              See more patients. Less admin. Better outcomes.
            </h1>
            <p className="mt-8 text-lg leading-8 text-text-muted max-w-2xl sm:text-xl">
              Automated scheduling, insurance verification, and patient communication — purpose-built for modern health practices.
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
              Purpose-built for healthcare, <br />
              powered by AI.
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

      {/* Compliance Section */}
      <section className="py-24 px-6 bg-cream border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-caption text-accent-blue font-bold tracking-[0.08em] uppercase mb-4">
                Security & Compliance
              </h2>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
                Built for trust <br />
                from day one.
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Health Services OS is designed with privacy and regulatory compliance at its core. Your patient data stays secure, encrypted, and fully under your control.
              </p>
              <div className="flex flex-col gap-4">
                {["HIPAA-ready architecture", "End-to-end encryption", "Role-based access controls", "Audit trail & logging"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cream border border-sand flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    </div>
                    <span className="text-charcoal text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white border border-sand"
            >
              <div className="aspect-[4/3] rounded-xl bg-sand/20 border border-sand/50 overflow-hidden relative">
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                  <div className="w-2 h-2 rounded-full bg-charcoal/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-16 h-16 text-accent-blue/20" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 h-1/3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-xl bg-charcoal text-white text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to modernize <br />
            your practice?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Join healthcare teams using Autonymo to deliver better patient outcomes with less administrative burden.
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

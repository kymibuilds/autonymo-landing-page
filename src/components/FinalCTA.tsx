"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  verticalPhrase: string;
}

export default function FinalCTA({ verticalPhrase }: FinalCTAProps) {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto rounded-2xl bg-charcoal text-white relative overflow-hidden">
        <div className="p-12 md:p-20 pb-8 md:pb-10 relative z-10 text-center flex flex-col items-center min-h-[400px]">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Let&apos;s talk about {verticalPhrase}.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
            Book a free 15-minute assessment. We&apos;ll tell you exactly where AI
            can make the biggest impact. No commitment, no pitch.
          </p>
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center gap-2 font-semibold tracking-tight text-charcoal text-lg bg-white rounded-xl px-10 py-4 hover:opacity-90 transition-colors active:scale-95"
          >
            Book a Free Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-auto pt-8">
            {["No commitment required", "You keep everything we build", "Limited spots per quarter"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/40" />
                <span className="text-white/50 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

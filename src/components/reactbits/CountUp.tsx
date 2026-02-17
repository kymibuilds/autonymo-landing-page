"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ target, duration = 1.5, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Extract numeric part and suffix/prefix
    const match = target.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) return;

    const prefix = match[1];
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3];
    const end = parseFloat(numStr);
    const isFloat = numStr.includes(".");
    const decimals = isFloat ? (numStr.split(".")[1]?.length || 0) : 0;
    const hasComma = match[2].includes(",");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const durationMs = duration * 1000;

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / durationMs, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;

            let formatted = isFloat ? current.toFixed(decimals) : Math.round(current).toString();
            if (hasComma) {
              const parts = formatted.split(".");
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              formatted = parts.join(".");
            }

            setDisplayed(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}

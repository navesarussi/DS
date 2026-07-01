"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Extra delay in ms, e.g. for staggering a list of cards. */
  delay?: number;
  className?: string;
};

/**
 * Reveals its children with a subtle fade-up once they scroll into view.
 * Motion is disabled automatically via CSS for `prefers-reduced-motion`.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sd-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}

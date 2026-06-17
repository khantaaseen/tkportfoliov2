import { useEffect, useRef, type ReactNode } from "react";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, kicker, title, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className="section reveal" ref={ref}>
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

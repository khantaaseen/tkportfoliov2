import { useEffect, useRef, useState } from "react";

/**
 * A little robot that walks down the right edge of the screen as you
 * scroll. Its vertical position mirrors your scroll progress through
 * the page; its legs only move while the page is actually scrolling.
 */
export default function ScrollWalker() {
  const walkerRef = useRef<HTMLDivElement>(null);
  const [walking, setWalking] = useState(false);
  const stopTimer = useRef<number | undefined>(undefined);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    const place = () => {
      const el = walkerRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      const travel = window.innerHeight - 64; // keep the buddy fully on screen
      el.style.top = `${10 + progress * travel}px`;
    };

    const onScroll = () => {
      if (raf.current === undefined) {
        raf.current = requestAnimationFrame(() => {
          place();
          raf.current = undefined;
        });
      }
      setWalking(true);
      window.clearTimeout(stopTimer.current);
      stopTimer.current = window.setTimeout(() => setWalking(false), 140);
    };

    place();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", place);
      if (raf.current !== undefined) cancelAnimationFrame(raf.current);
      window.clearTimeout(stopTimer.current);
    };
  }, []);

  return (
    <div className="walker-track" aria-hidden="true">
      <div ref={walkerRef} className={`walker${walking ? " walking" : ""}`}>
        <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
          {/* legs (animate from the hip) */}
          <g transform="translate(18 30)">
            <g className="leg back">
              <rect x="-1.5" y="0" width="3" height="9" rx="1.5" fill="#8b94b3" />
              <rect x="-3" y="8" width="6" height="3" rx="1.5" fill="#ffb454" />
            </g>
          </g>
          <g transform="translate(26 30)">
            <g className="leg front">
              <rect x="-1.5" y="0" width="3" height="9" rx="1.5" fill="#aab3cc" />
              <rect x="-3" y="8" width="6" height="3" rx="1.5" fill="#ffb454" />
            </g>
          </g>

          {/* body + head bob together */}
          <g className="body-group">
            {/* antenna */}
            <line x1="22" y1="9" x2="22" y2="5" stroke="#8b94b3" strokeWidth="1.5" />
            <circle className="antenna-tip" cx="22" cy="4" r="2.2" />
            {/* head */}
            <rect x="14" y="9" width="16" height="11" rx="4" fill="#dce3f2" />
            {/* eyes — looking down the page */}
            <circle className="eye" cx="19.5" cy="15" r="1.8" fill="#0a0f1e" />
            <circle className="eye" cx="26" cy="15" r="1.8" fill="#0a0f1e" />
            {/* torso */}
            <rect x="15.5" y="21" width="13" height="10" rx="3.5" fill="#aab3cc" />
            <rect x="19" y="24" width="6" height="4" rx="1" fill="#0a0f1e" />
            <circle cx="22" cy="26" r="1" fill="#ffb454" />
          </g>
        </svg>
      </div>
    </div>
  );
}

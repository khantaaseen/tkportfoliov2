import { useState } from "react";
import Section from "./Section";
import { experiences } from "../data/experience";

export default function Experience() {
  const [active, setActive] = useState(0);
  const xp = experiences[active];

  return (
    <Section id="experience" kicker="02." title="Where I've Worked">
      <div className="xp">
        <div className="xp-tabs" role="tablist" aria-label="Companies">
          {experiences.map((e, i) => (
            <button
              key={e.company}
              role="tab"
              aria-selected={i === active}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
            >
              {e.company}
            </button>
          ))}
        </div>

        <div className="xp-panel" role="tabpanel">
          <h3>
            {xp.title} <span className="at">@ {xp.company}</span>
          </h3>
          <p className="meta">
            {xp.period} · {xp.location}
          </p>
          <ul className="points">
            {xp.bullets.map((b) => (
              <li key={b.slice(0, 32)}>{b}</li>
            ))}
          </ul>
          <ul className="chip-row" aria-label="Technologies used">
            {xp.stack.map((s) => (
              <li className="chip" key={s}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

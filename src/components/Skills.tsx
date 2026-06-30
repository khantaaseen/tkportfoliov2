import Section from "./Section";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" kicker="03." title="Technical Skills">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.label}>
            <h3>{group.label}</h3>
            <ul className="chip-row">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

import Section from "./Section";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" kicker="01." title="About Me">
      <div className="about-body">
        {profile.intro.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
        <p>
          Find me on{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          , browse my code on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          , or grab a copy of my{" "}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>
          .
        </p>
        <ul className="about-facts">
          <li>BSc Computer Science, Wayne State</li>
          <li>3.8 GPA · Dean's List</li>
          <li>Irvin D. Reid Honors College</li>
          <li>AWS Cloud Computing Club</li>
        </ul>
      </div>
    </Section>
  );
}

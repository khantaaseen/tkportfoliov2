import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="greeting">hi, my name is</p>
      <h1>{profile.name}.</h1>
      <h2>{profile.tagline}</h2>
      <p className="hero-blurb">
        {profile.role} based in {profile.location} — currently shipping enterprise
        features at Intellinetics and leading development of EliteMedMatch.
      </p>
      <div className="hero-cta">
        <a className="btn primary" href="#projects">
          see my work
        </a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">
          resume
        </a>
      </div>
    </section>
  );
}

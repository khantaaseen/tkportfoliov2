import Section from "./Section";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { ExternalIcon, FolderIcon, GitHubIcon } from "./Icons";

export default function Projects() {
  return (
    <Section id="projects" kicker="04." title="Things I've Built">
      <div className="projects-grid">
        {projects.map((p) => {
          const primaryLink = p.live ?? p.github;
          return (
            <article className={`project-card${p.featured ? " featured" : ""}`} key={p.title}>
              <div className="project-top">
                <FolderIcon className="folder" />
                <div className="project-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live site`}
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3>
                {primaryLink ? (
                  <a href={primaryLink} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              {p.period && <div className="period">{p.period}</div>}
              <p>{p.description}</p>
              <ul className="chip-row" aria-label="Built with">
                {p.stack.map((s) => (
                  <li className="chip" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="projects-more">
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          more on github
        </a>
      </div>
    </Section>
  );
}

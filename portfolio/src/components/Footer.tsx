import { profile } from "../data/profile";
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <MailIcon />
        </a>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume (PDF)">
          <FileIcon />
        </a>
      </div>
      <p>
        Designed & built by{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          {profile.name}
        </a>{" "}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

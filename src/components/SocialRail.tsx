import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon } from "./Icons";

export default function SocialRail() {
  return (
    <>
      <div className="rail" aria-label="Social links">
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

      <div className="rail-email">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </>
  );
}

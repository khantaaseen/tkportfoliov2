import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

interface NavbarProps {
  walkerOn: boolean;
  onToggleWalker: () => void;
}

export default function Navbar({ walkerOn, onToggleWalker }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Back to top">
          TK
        </a>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}

          <button
            className="walker-toggle"
            aria-pressed={walkerOn}
            onClick={onToggleWalker}
            title="Toggle the scroll buddy"
          >
            <span className="track-pill" aria-hidden="true">
              <span className="knob" />
            </span>
            buddy
          </button>

          <a
            className="btn"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  );
}

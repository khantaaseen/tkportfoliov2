import { useState, type FormEvent } from "react";
import Section from "./Section";
import { profile } from "../data/profile";

/**
 * Optional: paste your Formspree endpoint here (e.g. "https://formspree.io/f/abcdwxyz")
 * to have messages delivered straight to your inbox without a backend.
 * Leave it empty and the form falls back to opening the visitor's mail app
 * with everything pre-filled.
 */
const FORM_ENDPOINT = "";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      // No backend configured — open the visitor's email client pre-filled.
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`${body}\n\n— ${name}`)}`;
      window.location.href = mailto;
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, subject, message: body }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setName("");
      setSubject("");
      setBody("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" kicker="05." title="Get In Touch">
      <div className="contact">
        <p className="lede">
          Whether it's a role, a project, or just a question about something I've
          built — my inbox is open. Write me a note below and I'll get back to you.
        </p>

        <form className="mail-form" onSubmit={handleSubmit}>
          <div className="mail-header">
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="to">
              new message — to: <b>{profile.email}</b>
            </span>
          </div>

          <div className="field">
            <label htmlFor="c-name">from:</label>
            <input
              id="c-name"
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="c-subject">subject:</label>
            <input
              id="c-subject"
              type="text"
              required
              placeholder="What's this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="field body">
            <label htmlFor="c-body">message:</label>
            <textarea
              id="c-body"
              required
              placeholder="Write your message…"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="mail-footer">
            <span className="hint">replies go to {profile.email}</span>
            <button className="btn primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "sending…" : "send message"}
            </button>
          </div>
        </form>

        {status === "sent" && (
          <p className="form-status" role="status">
            Message sent — thanks for reaching out. I'll reply soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-status" role="alert">
            Something went wrong sending that. Email me directly at{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        )}
      </div>
    </Section>
  );
}

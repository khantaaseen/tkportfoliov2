import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import ScrollWalker from "./components/ScrollWalker";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const WALKER_KEY = "tk-walker-enabled";

export default function App() {
  const [walkerOn, setWalkerOn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(WALKER_KEY) !== "off";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WALKER_KEY, walkerOn ? "on" : "off");
    } catch {
      /* storage unavailable — toggle still works for this visit */
    }
    document.body.classList.toggle("walker-on", walkerOn);
  }, [walkerOn]);

  return (
    <>
      <Navbar walkerOn={walkerOn} onToggleWalker={() => setWalkerOn((v) => !v)} />
      <SocialRail />
      {walkerOn && <ScrollWalker />}

      <main className="shell">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { IntroLoader } from "@/components/portfolio/IntroLoader";

const Index = () => {
  const [ready, setReady] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {!ready && <IntroLoader onDone={() => setReady(true)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./About";

type Category = "All" | "Frontend" | "Fullstack" | "AI" | "Web App";

const projects: { title: string; desc: string; tags: string[]; categories: Category[]; github: string; demo?: string }[] = [
  {
    title: "AI Job Portal (Microservices)",
    desc: "A scalable AI-powered job portal built on a microservices architecture for smart job matching and recommendations.",
    tags: ["Microservices", "Node.js", "AI", "MongoDB", "Docker"],
    categories: ["AI", "Fullstack", "Web App"],
    github: "https://github.com/Bhavya101-Y/ai-job-portal-microservices",
  },
  {
    title: "Sorting Visualization",
    desc: "Interactive visualizer for classic sorting algorithms with animated step-by-step comparisons.",
    tags: ["JavaScript", "HTML", "CSS", "Algorithms"],
    categories: ["Frontend", "Web App"],
    github: "https://github.com/Bhavya101-Y/Sorting_Visualization",
  },
  {
    title: "Chat Bot",
    desc: "A conversational chatbot built with Python that handles user queries with natural responses.",
    tags: ["Python", "NLP", "AI"],
    categories: ["AI"],
    github: "https://github.com/Bhavya101-Y/Chat_Bot",
  },
];

const filters: Category[] = ["All", "Frontend", "Fullstack", "AI", "Web App"];

export const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 left-0 h-72 w-1/2 bg-brand-pink/5 blur-3xl pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading>Projects</SectionHeading>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-1.5 text-sm font-medium border transition-all ${
                active === f
                  ? "bg-gradient-button text-primary-foreground border-transparent shadow-cyan"
                  : "bg-card text-foreground border-brand-cyan/40 hover:border-brand-cyan"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-card border border-brand-cyan/30 p-6 hover:border-brand-cyan hover:shadow-cyan transition-all"
              >
                <h3 className="text-2xl font-bold text-gradient-heading mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-brand-cyan/40 text-brand-cyan px-3 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-brand-cyan hover:text-brand-pink transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-brand-cyan hover:text-brand-pink transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

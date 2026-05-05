import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./About";

const education = [
  {
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    place: "Uttarakhand Technical University",
    period: "2024 - 2028",
    desc: "Studying core subjects like DSA, Web Dev, AI, and DBMS.",
  },
  {
    title: "Intermediate",
    place: "Krist Jayanti School",
    period: "2022 - 2024",
    desc: "Studied core subjects like Physics, Mathematics, Chemistry, Informatics Practices.",
  },
  {
    title: "High School",
    place: "Krist Jayanti School",
    period: "2020 - 2022",
    desc: "Completed high school with focus on Science and Computer fundamentals.",
  },
];

const experience = [
  {
    title: "Freelance Web Developer",
    place: "Self-employed",
    period: "2024 - Present",
    desc: "Building portfolios, landing pages and full-stack apps for clients across India.",
  },
  {
    title: "Open Source Contributor",
    place: "GitHub Community",
    period: "2023 - Present",
    desc: "Contributing to open-source web and AI projects, improving docs and small features.",
  },
];

const TimelineCard = ({ item }: { item: (typeof education)[number] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative rounded-xl bg-card border border-border p-6 hover:border-brand-cyan/50 transition-all"
    style={{ borderLeft: "3px solid hsl(var(--brand-pink))" }}
  >
    <h3 className="text-xl font-bold text-brand-cyan mb-1">{item.title}</h3>
    <p className="text-brand-pink font-semibold mb-2">{item.place}</p>
    <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
    <p className="text-muted-foreground">{item.desc}</p>
  </motion.div>
);

export const Resume = () => {
  const [tab, setTab] = useState<"education" | "experience">("education");
  const items = tab === "education" ? education : experience;

  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <SectionHeading>Resume</SectionHeading>

        <div className="flex justify-center gap-4 mb-12">
          {(["education", "experience"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-6 py-2 text-sm font-semibold capitalize transition-all border-gradient-brand ${
                tab === t
                  ? "bg-gradient-button text-primary-foreground shadow-pink"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {items.map((it) => (
                <TimelineCard key={it.title} item={it} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

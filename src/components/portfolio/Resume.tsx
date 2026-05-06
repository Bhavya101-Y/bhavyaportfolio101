import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./About";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    place: "Uttarakhand Technical University",
    period: "2022 - 2026",
    desc: "Studying core CSE subjects including DSA, Web Development, DBMS and Software Engineering.",
  },
  {
    title: "Intermediate",
    place: "Shivedale School",
    period: "2021 - 2022",
    desc: "Completed intermediate with focus on Science and Mathematics.",
  },
  {
    title: "High School",
    place: "Shivedale School",
    period: "2019 - 2020",
    desc: "Completed high school with strong foundation in Science and Computer fundamentals.",
  },
];

const experience = [
  {
    title: "Python Programming Intern",
    place: "CodSoft",
    period: "Jul 2024 – Jul 2024",
    desc: "Worked on Python-based projects during a 4-week virtual internship. Built mini applications including calculator, to-do list, contact book, and rock-paper-scissors game using Python.",
  },
  {
    title: "Web Development Intern",
    place: "Prasunet Pvt. Ltd.",
    period: "Aug 2024 – Aug 2024",
    desc: "Worked on frontend web development and responsive UI design projects. Improved practical skills in HTML, CSS, JavaScript, and modern web development practices.",
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

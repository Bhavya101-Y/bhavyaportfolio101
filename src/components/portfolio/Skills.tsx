import { motion } from "framer-motion";
import { SectionHeading } from "./About";

const skills = [
  { name: "HTML5", level: 95, color: "#E34F26" },
  { name: "CSS3", level: 90, color: "#1572B6" },
  { name: "JavaScript", level: 88, color: "#F7DF1E" },
  { name: "React.js", level: 90, color: "#61DAFB" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "Express.js", level: 78, color: "#ffffff" },
  { name: "MongoDB", level: 80, color: "#47A248" },
  { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
  { name: "Three.js", level: 65, color: "#ffffff" },
  { name: "Framer Motion", level: 80, color: "#E91E63" },
  { name: "Git", level: 85, color: "#F05032" },
  { name: "GitHub", level: 88, color: "#ffffff" },
  { name: "Render", level: 75, color: "#46E3B7" },
  { name: "Firebase", level: 70, color: "#FFCA28" },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute -top-20 right-0 h-64 w-1/2 bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading>Skills</SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl bg-card border border-border p-5 hover:border-brand-cyan/50 hover:-translate-y-1 transition-all"
            >
              <div
                className="h-10 w-10 mb-3 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: `${s.color}20`, color: s.color }}
              >
                {s.name.slice(0, 2)}
              </div>
              <p className="text-sm font-medium text-center mb-3">{s.name}</p>
              <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                  className="h-full bg-gradient-button rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

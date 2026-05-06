import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import type { IconType } from "react-icons";

const techIcons: { name: string; color: string; Icon: IconType }[] = [
  { name: "HTML5", color: "#E34F26", Icon: FaHtml5 },
  { name: "CSS3", color: "#1572B6", Icon: FaCss3Alt },
  { name: "JavaScript", color: "#F7DF1E", Icon: FaJs },
  { name: "React", color: "#61DAFB", Icon: FaReact },
  { name: "Node.js", color: "#339933", Icon: FaNodeJs },
  { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { name: "Tailwind", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "Git", color: "#F05032", Icon: FaGitAlt },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden ambient-bg pt-24 pb-16"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand-purple/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 h-72 w-72 rounded-full bg-brand-pink/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          Hey, I'm <span className="text-gradient-heading">Akshat Kala</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-10"
        >
          A passionate full-stack developer who builds fast, functional, and
          visually striking web apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-button px-8 py-3 text-sm font-semibold text-primary-foreground shadow-pink hover:scale-105 transition-transform"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {techIcons.map((t) => {
            const { Icon } = t;
            return (
              <div
                key={t.name}
                title={t.name}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-card border border-border flex items-center justify-center hover:scale-110 transition-transform animate-float"
                style={{ animationDelay: `${Math.random() * 2}s`, boxShadow: `0 0 20px ${t.color}30` }}
              >
                <Icon size={26} color={t.color} style={{ filter: `drop-shadow(0 0 8px ${t.color}90)` }} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

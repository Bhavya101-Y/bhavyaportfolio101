import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiRender,
  SiFirebase,
  SiVite,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";

type Skill = { name: string; level: number; color: string; Icon: IconType };

const skills: Skill[] = [
  { name: "HTML5", level: 95, color: "#E34F26", Icon: FaHtml5 },
  { name: "CSS3", level: 90, color: "#1572B6", Icon: FaCss3Alt },
  { name: "JavaScript", level: 88, color: "#F7DF1E", Icon: FaJs },
  { name: "React.js", level: 90, color: "#61DAFB", Icon: FaReact },
  { name: "Node.js", level: 80, color: "#339933", Icon: FaNodeJs },
  { name: "Express.js", level: 78, color: "#ffffff", Icon: SiExpress },
  { name: "MongoDB", level: 80, color: "#47A248", Icon: SiMongodb },
  { name: "Tailwind CSS", level: 92, color: "#06B6D4", Icon: SiTailwindcss },
  { name: "Three.js", level: 65, color: "#ffffff", Icon: SiThreedotjs },
  { name: "Framer Motion", level: 80, color: "#E91E63", Icon: SiFramer },
  { name: "Git", level: 85, color: "#F05032", Icon: FaGitAlt },
  { name: "GitHub", level: 88, color: "#ffffff", Icon: FaGithub },
  { name: "Render", level: 75, color: "#46E3B7", Icon: SiRender },
  { name: "Firebase", level: 70, color: "#FFCA28", Icon: SiFirebase },
  { name: "npm", level: 85, color: "#CB3837", Icon: FaNpm },
  { name: "Vite", level: 80, color: "#FFCA28", Icon: SiVite },
  { name: "VS Code", level: 90, color: "#3B82F6", Icon: VscCode },
  { name: "Postman", level: 75, color: "#FF6C37", Icon: SiPostman },
  { name: "TypeScript", level: 78, color: "#3178C6", Icon: SiTypescript },
  { name: "Next.js", level: 70, color: "#ffffff", Icon: SiNextdotjs },
  { name: "Figma", level: 72, color: "#F24E1E", Icon: FaFigma },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute -top-20 right-0 h-64 w-1/2 bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading>Skills</SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {skills.map((s, i) => {
            const { Icon } = s;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="rounded-xl bg-card border border-border p-5 flex flex-col items-center hover:border-brand-cyan/50 hover:-translate-y-1 transition-all"
                style={{ boxShadow: `0 0 0 transparent` }}
              >
                <Icon
                  size={48}
                  color={s.color}
                  style={{ filter: `drop-shadow(0 0 12px ${s.color}80)` }}
                  className="mb-3"
                />
                <p className="text-sm font-medium text-center mb-3">{s.name}</p>
                <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.03, ease: "easeOut" }}
                    className="h-full bg-gradient-button rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

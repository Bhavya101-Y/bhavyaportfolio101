import { motion } from "framer-motion";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST / GraphQL"] },
  { title: "Tools", items: ["Git", "Docker", "Figma", "Vercel", "AWS"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-card/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-primary mb-3">// what I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold">My Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-8 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-5 text-primary">{g.title}</h3>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";

const items = [
  { year: "2024 — Present", role: "Senior Frontend Engineer", company: "Stellar Labs", desc: "Leading design system and core product UI for a multi-tenant SaaS platform." },
  { year: "2022 — 2024", role: "Full Stack Developer", company: "Nimbus Studio", desc: "Built end-to-end features across React, Node.js & PostgreSQL for fintech clients." },
  { year: "2021 — 2022", role: "Freelance Developer", company: "Self-employed", desc: "Delivered 20+ marketing sites and web apps for startups and creators." },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-card/20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-primary mb-3">// my journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative pl-8 border-l border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]" />
              <p className="font-mono text-xs text-primary mb-2">{it.year}</p>
              <h3 className="text-xl font-semibold">{it.role}</h3>
              <p className="text-muted-foreground mb-2">{it.company}</p>
              <p className="text-muted-foreground/80 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

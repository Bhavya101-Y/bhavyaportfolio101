import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";

const stats = [
  { Icon: Code2, label: "Projects Built", value: "30+" },
  { Icon: Rocket, label: "Years Experience", value: "3+" },
  { Icon: Sparkles, label: "Happy Clients", value: "15+" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm text-primary mb-3">// about me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building digital products with{" "}
            <span className="text-primary">purpose & precision</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a passionate developer who loves building things that live on
              the internet. My interest in web development started back in 2021
              when I built my first landing page — turns out hacking together a
              custom theme taught me a lot about HTML & CSS.
            </p>
            <p>
              Today, I focus on crafting accessible, performant, human-centered
              products at the intersection of design and engineering.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map(({ Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 transition-all"
            >
              <Icon className="h-6 w-6 text-primary mb-4" />
              <div className="text-3xl font-bold mb-1">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

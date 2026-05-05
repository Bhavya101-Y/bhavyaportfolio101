import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-3">// say hello</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's build something <span className="text-primary text-glow">together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="mailto:hello@akshat.dev"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-soft-glow hover:shadow-glow transition-all"
          >
            <Mail className="h-4 w-4" />
            hello@akshat.dev
          </a>

          <div className="flex items-center justify-center gap-5 mt-10">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="container mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Akshat. Crafted with care.</p>
        <p className="font-mono">designed & built by AK</p>
      </footer>
    </section>
  );
};

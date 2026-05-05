import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Nebula Analytics",
    desc: "Real-time data visualization dashboard with custom chart engine and live websocket streams.",
    tags: ["Next.js", "D3.js", "WebSockets"],
    accent: "from-primary/30 to-transparent",
  },
  {
    title: "Pulse Commerce",
    desc: "Headless e-commerce storefront with Stripe checkout, animated product galleries and CMS.",
    tags: ["React", "Stripe", "Sanity"],
    accent: "from-purple-500/30 to-transparent",
  },
  {
    title: "Drift Notes",
    desc: "Minimal markdown note app with end-to-end encryption and offline-first sync.",
    tags: ["TypeScript", "IndexedDB", "PWA"],
    accent: "from-amber-500/30 to-transparent",
  },
  {
    title: "Atlas AI",
    desc: "AI chat interface with streaming responses, context memory and tool calling.",
    tags: ["OpenAI", "Edge Functions"],
    accent: "from-rose-500/30 to-transparent",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="font-mono text-sm text-primary mb-3">// selected work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">View all →</a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${p.accent} relative`}>
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

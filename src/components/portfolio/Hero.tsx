import { motion } from "framer-motion";

const techIcons = [
  { name: "HTML5", color: "#E34F26", path: "M12 1L3 2.5l1.6 18L12 23l7.4-2.5L21 2.5 12 1zm6.4 5.5H8.6l.2 2.5h9.4l-.6 7.5L12 18.5l-5.6-2L6 12.5h2.5l.2 2 3.3 1 3.3-1 .3-3.5H6L5.4 4h13.4l-.4 2.5z" },
  { name: "CSS3", color: "#1572B6", path: "M3 2l1.6 18L12 23l7.4-2.5L21 2H3zm14.4 5H8.6l.2 2.5h8.4l-.6 7L12 18l-4.6-1.5-.3-3.5H9.5l.2 1.7L12 15.4l2.4-.8.2-2.6H7L6.4 7h11.2l-.2 2z" },
  { name: "JS", color: "#F7DF1E", path: "M3 3h18v18H3V3zm9.4 14.5c.4.8 1 1.5 2.3 1.5 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.6-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-2 1.5-3.5 3.8-3.5 1.7 0 2.9.6 3.7 2.1l-2 1.3c-.4-.8-.9-1.1-1.7-1.1s-1.3.5-1.3 1.1c0 .8.5 1.1 1.6 1.6l.6.2c2.2 1 3.4 1.9 3.4 4 0 2.4-1.9 3.7-4.4 3.7-2.5 0-4.1-1.2-4.9-2.8l2.1-1.2zm-7-.2c.4.7.7 1.3 1.6 1.3.8 0 1.4-.3 1.4-1.6V8h2.4v9.4c0 2.5-1.5 3.6-3.6 3.6-1.9 0-3.1-1-3.7-2.2l1.9-1.5z" },
  { name: "React", color: "#61DAFB", path: "M12 9.9a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2zm0-2c-3.4 0-6.4.5-8.4 1.4-2 .9-3.1 2.1-3.1 3.5 0 1.4 1.1 2.7 3.1 3.5 2 .9 5 1.4 8.4 1.4 3.4 0 6.4-.5 8.4-1.4 2-.8 3.1-2.1 3.1-3.5 0-1.4-1.1-2.7-3.1-3.5C18.4 8.4 15.4 7.9 12 7.9zm0 1.6c3.2 0 6.1.5 8 1.3 1.6.6 2.4 1.4 2.4 2 0 .6-.8 1.4-2.4 2-1.9.8-4.8 1.3-8 1.3s-6.1-.5-8-1.3c-1.6-.6-2.4-1.4-2.4-2 0-.6.8-1.4 2.4-2 1.9-.8 4.8-1.3 8-1.3z" },
  { name: "Node", color: "#339933" },
  { name: "Mongo", color: "#47A248" },
  { name: "Tailwind", color: "#06B6D4" },
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
          {techIcons.map((t) => (
            <div
              key={t.name}
              title={t.name}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-card border border-border flex items-center justify-center hover:scale-110 transition-transform animate-float"
              style={{ animationDelay: `${Math.random() * 2}s`, boxShadow: `0 0 20px ${t.color}30` }}
            >
              <span className="text-sm font-bold" style={{ color: t.color }}>
                {t.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

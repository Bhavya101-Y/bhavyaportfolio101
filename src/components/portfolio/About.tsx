import { motion } from "framer-motion";

const info = [
  { label: "Name", value: "Akshat Kala" },
  { label: "DOB", value: "November 05, 2005" },
  { label: "Address", value: "Himalayan Colony, Najibabad" },
  { label: "Zip Code", value: "246763" },
  { label: "Email", value: "itzakshat706@gmail.com" },
  { label: "Phone", value: "+91 8923 700017" },
  { label: "Projects", value: "5+ Projects Worked On" },
];

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gradient-heading"
  >
    {children}
  </motion.h2>
);

export const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[80%] bg-brand-pink/5 blur-3xl pointer-events-none" />
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gradient-heading mb-10"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] max-w-sm rounded-2xl border-gradient-brand shadow-pink overflow-hidden bg-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/30 via-brand-purple/20 to-brand-cyan/30 flex items-center justify-center">
              <span className="text-7xl font-extrabold text-gradient-brand">AK</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              A web developer with a passion for clean design and functional code,
              I specialize in building responsive, user-focused websites that make
              a lasting impact. With a strong foundation in front-end and back-end
              technologies, I aim to deliver digital solutions that are not only
              visually appealing but also optimized for performance and user
              experience. Whether it's a simple landing page or a complex web
              application, every project is built with precision, creativity, and
              a focus on results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {info.map((i) => (
                <div
                  key={i.label}
                  className="rounded-lg bg-card border border-border px-4 py-3 text-sm"
                >
                  <span className="font-semibold text-foreground">{i.label}: </span>
                  <span className="text-muted-foreground">{i.value}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-button px-7 py-3 text-sm font-semibold text-primary-foreground shadow-pink hover:scale-105 transition-transform"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

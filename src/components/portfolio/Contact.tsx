import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { SectionHeading } from "./About";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:bhavya101yadav@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your mail app…", description: "Your message will be delivered to bhavya101yadav@gmail.com." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[80%] bg-brand-pink/10 blur-3xl pointer-events-none" />
      <div className="container relative z-10">
        <SectionHeading>Contact</SectionHeading>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-2xl mx-auto rounded-2xl border border-brand-cyan/40 bg-card/50 backdrop-blur p-8 md:p-10 space-y-6 shadow-cyan"
        >
          <div className="relative">
            <label className="absolute -top-2 left-4 px-2 bg-card text-xs text-brand-cyan">
              May I know your good name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-brand-cyan/40 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-4 px-2 bg-card text-xs text-brand-cyan">
              Where should I contact you back (Your Mail ID)
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-brand-cyan/40 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-4 px-2 bg-card text-xs text-brand-cyan">
              Your message goes here
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-brand-cyan/40 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan resize-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-button px-8 py-3 text-sm font-semibold text-primary-foreground shadow-pink hover:scale-105 transition-transform"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>

      <footer className="container mt-24 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground mb-5">
          Designed & Built with <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> by{" "}
          <span className="text-brand-cyan font-semibold">Bhavya</span>
        </p>
        <div className="flex items-center justify-center gap-5">
          {[
            { Icon: Github, href: "https://github.com/Bhavya101-Y" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/bhavya-yadav-" },
            { Icon: Mail, href: "mailto:bhavya101yadav@gmail.com" },
            { Icon: Twitter, href: "https://x.com/Bhavya101Yadav" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-cyan transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
};

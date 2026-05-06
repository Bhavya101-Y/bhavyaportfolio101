import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const IntroLoader = ({ onDone }: { onDone: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      setTimeout(onDone, 700);
    }, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* ambient glow */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-brand-pink/20 blur-3xl animate-pulse" />
          <div className="absolute h-[400px] w-[400px] rounded-full bg-brand-cyan/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          {/* moving gradient orbs */}
          <motion.div
            className="absolute h-40 w-40 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple blur-2xl opacity-60"
            animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-40 w-40 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple blur-2xl opacity-60"
            animate={{ x: [200, -200, 200], y: [100, -100, 100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* AK monogram */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-32 w-32 rounded-3xl bg-gradient-button flex items-center justify-center mb-8"
              style={{ boxShadow: "0 0 60px hsl(var(--brand-pink) / 0.6), 0 0 120px hsl(var(--brand-cyan) / 0.4)" }}
            >
              <span className="text-5xl font-extrabold text-white tracking-tight">AK</span>
              <motion.span
                className="absolute inset-0 rounded-3xl border-2 border-brand-cyan"
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>

            {/* name reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold text-gradient-heading mb-6"
            >
              Akshat Kala
            </motion.h1>

            {/* loading bar */}
            <div className="relative h-1 w-56 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-y-0 w-1/2 bg-gradient-button rounded-full"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase"
            >
              Loading Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

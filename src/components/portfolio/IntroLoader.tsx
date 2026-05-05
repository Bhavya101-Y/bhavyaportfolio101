import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const IntroLoader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex h-24 w-24 items-center justify-center rounded-full bg-foreground animate-pulse-glow"
          >
            <span className="font-bold text-2xl text-background tracking-tight">AK</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

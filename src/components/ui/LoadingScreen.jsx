import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-3 w-3 rounded-full bg-brand-400"
        />
        <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Carregando</p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;

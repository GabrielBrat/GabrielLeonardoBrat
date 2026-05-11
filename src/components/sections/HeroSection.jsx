import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, stackFocus } from "../../data/profile";

function HeroSection() {
  return (
    <section id="hero" className="section-container relative pt-32 md:pt-40">
      <div className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-xl text-brand-600 dark:text-brand-300"
          >
            {profile.role}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-4 inline-flex rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-200"
          >
            {profile.badge}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={profile.links.cv} download="Gabriel-Bratfisch-Curriculo-2026.pdf" className="btn-primary">
              <Download size={16} /> Download CV
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={16} /> GitHub
            </a>
            <a href="#contato" className="btn-secondary">
              <Mail size={16} /> Contato
            </a>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stackFocus.map((item) => (
              <span key={item} className="rounded-full border border-brand-400/40 px-3 py-1 text-xs text-brand-600 dark:text-brand-200">
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass relative mx-auto w-full max-w-sm overflow-hidden p-8"
        >
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl shadow-soft">
            <img src="/assets/profile-gabriel.png" alt="Gabriel Leonardo Bratfisch" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-slate-950/25" />
          </div>
          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">{profile.location}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;

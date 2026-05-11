import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import { learningNow, stackFocus } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

function CurrentLearningSection() {
  return (
    <section className="section-container">
      <SectionHeading
        kicker="Evolução"
        title="O que estou estudando agora"
        description="Estudo com foco em aplicação real. O objetivo é ganhar repertório para atuar como dev no dia a dia."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <BookOpen size={18} /> Foco atual
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            {learningNow.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="glass p-6"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Sparkles size={18} /> Ferramentas foco
          </h3>
          <div className="flex flex-wrap gap-3">
            {stackFocus.map((tech) => (
              <span key={tech} className="rounded-xl border border-brand-400/40 px-4 py-2 text-sm text-brand-600 dark:text-brand-200">
                {tech}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default CurrentLearningSection;

import { motion } from "framer-motion";
import { skillCategories } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

function SkillsSection() {
  return (
    <section id="habilidades" className="section-container">
      <SectionHeading
        kicker="Habilidades"
        title="O que eu uso na prática"
        description="Separei por rotina real: o que uso todo dia, o que já tenho experiência e o que ainda estou evoluindo."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className={`glass p-6 ${
              category.priority === "alta"
                ? "border border-brand-400/30"
                : category.priority === "media"
                  ? "border border-slate-300/50 dark:border-slate-700/70"
                  : "border border-slate-300/30 opacity-90 dark:border-slate-700/50"
            }`}
          >
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-slate-100">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-800 dark:text-slate-100">
                    <span>{skill.name}</span>
                    <span
                      className={
                        category.priority === "baixa"
                          ? "rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-300"
                          : "text-slate-500 dark:text-slate-300"
                      }
                    >
                      {category.priority === "baixa" ? "Iniciante" : `${skill.level}%`}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <motion.div
                      className={`h-full rounded-full ${
                        category.priority === "alta"
                          ? "bg-gradient-to-r from-brand-600 to-cyan-400"
                          : category.priority === "media"
                            ? "bg-gradient-to-r from-brand-500 to-cyan-500/80"
                            : "bg-gradient-to-r from-slate-500 to-slate-400 dark:from-slate-600 dark:to-slate-500"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

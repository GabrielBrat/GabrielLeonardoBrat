import { motion } from "framer-motion";
import { Award, GraduationCap, Languages } from "lucide-react";
import { certifications, education, languages } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

function EducationSection() {
  return (
    <section id="formacao" className="section-container">
      <SectionHeading
        kicker="Formação"
        title="Base de estudo"
        description="Formação, cursos e idiomas que sustentam minha transição para desenvolvimento."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <GraduationCap size={18} /> Formação
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            {education.map((item) => (
              <li key={item.title}>
                <p className="font-medium">{item.title}</p>
                <p className="text-slate-500 dark:text-slate-400">{item.institution}</p>
                <p className="text-xs text-brand-500">{item.period}</p>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="glass p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Award size={18} /> Certificações
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            {certifications.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="glass p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Languages size={18} /> Idiomas
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            {languages.map((item) => (
              <li key={item.name}>
                <p className="font-medium">{item.name}</p>
                <p className="text-slate-500 dark:text-slate-400">{item.level}</p>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}

export default EducationSection;

import { motion } from "framer-motion";
import { experiences } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

function ExperienceSection() {
  return (
    <section id="experiencia" className="section-container">
      <SectionHeading
        kicker="Experiência"
        title="Trabalho direto na operação"
        description="Atendimento, implantação, treinamento e resolução de incidentes. Sempre com contato próximo com cliente e time técnico."
      />

      <div className="relative ml-2 border-l border-brand-400/30 pl-6">
        {experiences.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass relative mb-6 p-6"
          >
            <span className="absolute -left-[1.92rem] top-8 h-3 w-3 rounded-full bg-brand-500 shadow-glow" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs text-brand-600 dark:text-brand-300">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {job.company} - {job.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{job.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-100">
              {job.responsibilities.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-300 px-3 py-1 text-xs dark:border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-brand-700 dark:text-brand-200">Impacto: {job.results}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

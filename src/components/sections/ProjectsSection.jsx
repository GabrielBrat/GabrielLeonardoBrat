import { motion } from "framer-motion";
import { ExternalLink, Github, LoaderCircle } from "lucide-react";
import { projects } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

function ProjectsSection() {
  return (
    <section id="projetos" className="section-container">
      <SectionHeading
        kicker="Projetos"
        title="Projetos"
        description="Projetos que usei pra praticar, testar ideias e evoluir no desenvolvimento."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`glass overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border hover:border-brand-400/30 ${
              project.upcoming ? "opacity-85" : ""
            }`}
          >
            {project.upcoming ? (
              <div className="flex h-40 w-full items-center justify-center bg-slate-200/60 dark:bg-slate-900/60">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <LoaderCircle size={18} className="animate-spin" />
                  Em desenvolvimento
                </div>
              </div>
            ) : (
              <img src={project.image} alt={project.name} className="h-40 w-full object-cover" />
            )}
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                {project.featured ? (
                  <span className="rounded-full bg-brand-500/10 px-2 py-1 text-[10px] uppercase tracking-wider text-brand-500">
                    Projeto em destaque
                  </span>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-slate-100/80 px-3 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {!project.upcoming ? (
                <div className="mt-5 flex items-center gap-3">
                  {project.demo ? (
                    <a href={project.demo} className="btn-secondary text-xs" target="_blank" rel="noreferrer">
                      <ExternalLink size={14} /> {project.demoLabel ?? "Ver projeto"}
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a href={project.repo} className="btn-secondary text-xs" target="_blank" rel="noreferrer">
                      <Github size={14} /> {project.repoLabel ?? "Código"}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

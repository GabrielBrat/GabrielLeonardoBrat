import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import StatsSection from "./StatsSection";

function AboutSection() {
  return (
    <section id="sobre" className="section-container">
      <SectionHeading
        kicker="Sobre mim"
        title="Base pratica de operacao"
        description="Suporte, implantacao e contato direto com cliente. Hoje aplico essa base na minha migracao para desenvolvimento."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6"
        >
          <h3 className="mb-4 text-lg font-semibold">Como cheguei ate aqui</h3>
          <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            {profile.longBio.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="glass p-6"
        >
          <h3 className="mb-4 text-lg font-semibold">Para onde estou indo</h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{profile.careerGoals}</p>
          <ul className="space-y-3 text-sm text-slate-800 dark:text-slate-100">
            {profile.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>

      <StatsSection />
    </section>
  );
}

export default AboutSection;

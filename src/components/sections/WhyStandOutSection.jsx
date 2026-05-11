import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { differentiators } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

function WhyStandOutSection() {
  return (
    <section id="diferenciais" className="section-container">
      <SectionHeading
        kicker="Na pratica"
        title="Como eu trabalho"
        description="Meu jeito de atuar: comunicacao clara, foco em resolver e aprendizado constante no dia a dia."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {differentiators.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass border border-brand-400/25 p-6"
          >
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
              <BadgeCheck size={18} className="text-brand-500" /> {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default WhyStandOutSection;

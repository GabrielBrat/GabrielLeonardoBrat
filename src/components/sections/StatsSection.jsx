import { motion } from "framer-motion";
import { BriefcaseBusiness, Rocket, TrendingUp, Users } from "lucide-react";
import { stats } from "../../data/profile";

const statIcons = {
  briefcase: BriefcaseBusiness,
  rocket: Rocket,
  users: Users,
  "trending-up": TrendingUp,
};

function StatsSection() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="glass group p-5 transition-all duration-300 hover:-translate-y-1 hover:border hover:border-brand-400/30 hover:shadow-glow"
        >
          <div className="mb-3 inline-flex rounded-xl bg-brand-500/10 p-2 text-brand-500 transition-colors group-hover:bg-brand-500/20">
            {(() => {
              const Icon = statIcons[stat.icon];
              return <Icon size={20} />;
            })()}
          </div>
          <p className="text-lg font-bold leading-snug text-slate-900 dark:text-white">{stat.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsSection;

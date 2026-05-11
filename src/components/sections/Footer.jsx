import { profile } from "../../data/profile";

function Footer({ navItems }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row md:px-8">
        <p>© {currentYear} {profile.name}. Feito com foco em pratica e evolucao.</p>
        <div className="flex flex-wrap items-center gap-3">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-brand-500">
              {item.label}
            </a>
          ))}
        </div>
        <p>React, Tailwind e Framer Motion no dia a dia.</p>
      </div>
    </footer>
  );
}

export default Footer;

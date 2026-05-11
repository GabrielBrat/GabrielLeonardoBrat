import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Contato portfólio - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nDe: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Seu cliente de e-mail foi aberto para enviar a mensagem.");
  };

  return (
    <section id="contato" className="section-container">
      <SectionHeading
        kicker="Contato"
        title="Vamos conversar"
        description="Se fizer sentido para o seu time, me chama. Respondo por e-mail ou LinkedIn."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass space-y-4 p-6"
        >
          <input name="name" value={form.name} onChange={handleChange} required className="input-style" placeholder="Seu nome" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" className="input-style" placeholder="Seu e-mail" />
          <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="input-style resize-none" placeholder="Sua mensagem" />
          <button type="submit" className="btn-primary w-full justify-center">
            <Send size={16} /> Enviar mensagem
          </button>
          {status ? <p className="text-xs text-brand-500">{status}</p> : null}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="glass flex flex-col gap-4 p-6"
        >
          <a href={`mailto:${profile.email}`} className="contact-link">
            <Mail size={18} /> {profile.email}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact-link">
            <Github size={18} /> GitHub
          </a>
          <a href={profile.links.cv} download="Gabriel-Bratfisch-Curriculo-2026.pdf" className="contact-link">
            <Download size={18} /> Download Currículo
          </a>
          <p className="rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Aberto a oportunidades em suporte, implantação e início em desenvolvimento web.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;

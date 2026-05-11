# Portfólio Profissional - Gabriel Leonardo Bratfisch

Portfólio pessoal moderno desenvolvido com React + Vite, TailwindCSS e Framer Motion.

## Tecnologias

- React 18 + Vite
- TailwindCSS
- Framer Motion
- Lucide React

## Funcionalidades implementadas

- Layout minimalista, elegante e responsivo (desktop e mobile)
- Navbar fixa com navegação suave entre seções
- Tema dark/light com persistência em `localStorage`
- Hero com CTA para CV, LinkedIn, GitHub e contato
- Seções completas: Sobre, Experiência, Habilidades, Projetos, Formação e Contato
- Timeline de carreira e estatísticas animadas
- Sessões extras: "Atualmente estudando" e "Stack principal"
- Loading screen minimalista
- Efeito de partículas discreto no background
- SEO básico via `index.html` (meta tags essenciais)
- Estrutura pronta para deploy na Vercel

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura principal

```txt
src/
  components/
    sections/
    ui/
  data/
    profile.js
  App.jsx
  index.css
```

## Personalização rápida

- Edite os dados do portfólio em `src/data/profile.js`
- Troque avatar e imagens dos projetos nas URLs dentro dos componentes e dados
- Ajuste paleta de cores em `tailwind.config.js`

## Sugestões de identidade visual e imagens

- **Estilo:** dark premium com acentos ciano/azul
- **Ícones:** Lucide (já integrado)
- **Imagens de projetos:** mockups de dashboard, suporte e analytics
- **Avatar:** foto profissional com fundo neutro e boa iluminação

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub
2. Importe na Vercel
3. Framework preset: `Vite`
4. Build command: `npm run build`
5. Output directory: `dist`

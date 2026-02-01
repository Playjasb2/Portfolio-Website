# Portfolio Site

A high-performance, accessible, and responsive personal portfolio website built with modern web standards.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) (Zero-JS architecture by default)
- **UI Library**: [React](https://react.dev) (Used selectively for interactive islands)
- **Styling**: [TailwindCSS](https://tailwindcss.com) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## ✨ Key Features

- **⚡️ Performance First**: Statically generated with minimal client-side JavaScript for optimal load times (Lighthouse 100).
- **♿️ Accessible**: Semantic HTML, ARIA labels, and keyboard navigation support.
- **📱 Responsive**: Mobile-first design that scales seamlessly from phone to desktop.
- **🎨 Dynamic UI**: Smooth scroll animations and interactive elements using Framer Motion.
- **🧩 Type-Safe Content**: Uses Astro Content Collections for type-safe project and experience data.

## 🛠️ Development

All commands are run from the root of the project:

| Command        | Action                                                 |
| :------------- | :----------------------------------------------------- |
| `pnpm install` | Installs dependencies                                  |
| `pnpm dev`     | Starts local dev server at `localhost:4321`            |
| `pnpm build`   | Build your production site to `./dist/`                |
| `pnpm preview` | Preview build locally using Cloudflare Pages emulation |

## 📂 Project Structure

```text
/
├── src/
│   ├── components/
│   │   ├── Astro/       # Server-only components (Headers, Footers)
│   │   ├── React/       # Interactive components (Hero, Projects, Timeline)
│   ├── content/         # Markdown/JSON data for Projects & Experience
│   ├── layouts/         # Page layouts
│   └── pages/           # File-based routing
├── public/              # Static assets
└── package.json
```

# DulanJaya Lakruwan — Portfolio

Personal portfolio website built with Next.js 16, React 19, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4, Framer Motion
- **Language:** TypeScript
- **Icons:** Lucide React

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Tailwind v4 + custom theme
│   └── admin/
│       ├── layout.tsx      # Admin metadata
│       └── page.tsx        # Admin panel (embeds /admin/index.html)
├── components/
│   ├── Navbar.tsx          # Fixed top nav
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Tech stack grid
│   ├── Projects.tsx        # Portfolio projects (hardcoded + localStorage)
│   ├── Experience.tsx      # Work experience & education
│   ├── Contact.tsx         # Contact form & info
│   └── Footer.tsx          # Footer with admin link
└── lib/
    └── utils.ts            # cn() helper (clsx + tailwind-merge)

public/
└── admin/                  # Standalone admin panel (vanilla HTML/JS/CSS)
    ├── index.html
    ├── app.js
    └── styles.css
```

## Admin Panel

Access at `/admin` — a full CRUD dashboard for managing projects, clients, portfolio items, and work tasks. All data persists in localStorage. Portfolio items added in the admin panel automatically appear in the public Projects section.

## License

Private — DulanJaya Lakruwan

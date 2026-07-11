# website

Monorepo containing two web applications and a Spring Boot backend stub.

---

## Projects in this repo

| App | Directory | Stack | Description |
|-----|-----------|-------|-------------|
| **Digital Billboard Events** | Root (`/`) | Next.js 14, Mapbox, TypeScript | Interactive event map with digital billboards and RSVP |
| **Personal Portfolio** | `frontend/` | React, Three.js, MUI | 3D starry-background portfolio site |
| **Backend (stub)** | `src/main/java/` | Spring Boot | Incomplete skeleton — no `build.gradle` |

---

## Digital Billboard Events App (root)

A modern event planning app with an interactive Mapbox map, event markers, digital billboard displays, and RSVP tracking.

### Setup

```bash
npm install
cp .env.example .env.local
# Add your Mapbox token: NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_token
npm run dev
```

Open http://localhost:3000

**Prerequisites:** Node.js 18+, free [Mapbox](https://mapbox.com) account.

See [`setup-instructions.md`](setup-instructions.md) for a quick-start guide.

### Features

- Interactive Mapbox map with event markers
- Digital billboard displays with priority-based visibility
- RSVP system with attendance tracking
- Category-based organization (Social, Professional, Educational, Cultural, Sports)
- Responsive design with Framer Motion animations

---

## Personal Portfolio (`frontend/`)

A 3D portfolio site with animated starry background, career timeline, and social links. Deployed to GitHub Pages.

### Setup

```bash
cd frontend
npm install
npm start          # http://localhost:3001 (use PORT=3001 to avoid conflict)
npm run deploy     # Deploy to GitHub Pages
```

> **Port note:** Both apps default to port 3000. Run the portfolio on a different port: `PORT=3001 npm start`.

---

## Spring Boot backend (stub)

An incomplete Spring Boot skeleton exists at `src/main/java/com/Jiraiya_sen/solution/` but lacks a `build.gradle` file and is not runnable. It can be removed or completed in a future iteration.

---

## Author

**Kai'ree Gay** — [GitHub](https://github.com/Kaireega)

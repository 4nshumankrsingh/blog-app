# BlogApp

A Contentful-driven mini blog built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui. Deployed on Vercel.

---

## Live URL

[https://blog-app-ten-henna.vercel.app](https://blog-app-ten-henna.vercel.app)

---

## Stack

- **Next.js 16** — App Router, Server Components, ISR
- **TypeScript** — strict, no `any` in domain types
- **Contentful** — Delivery API, headless CMS
- **Tailwind CSS v4** — utility-first styling
- **shadcn/ui** — Button, Card, Badge, Table
- **Radix UI Icons** — icon set
- **Vercel** — deployment

---

## Features

- Home page with hero section, latest 3 posts grid, and full posts table
- Blog list page with responsive card grid and empty/loading states
- Blog detail page with cover image, rich text body, and SEO metadata
- Green-white / green-black theme toggle (light & dark mode)
- ISR with 60-second revalidation on all pages
- Graceful error boundaries and 404 pages on all routes
- Active nav link highlighting

---

## Contentful Model

### Content Type: `BlogPost`

| Field | Type | Notes |
|---|---|---|
| `title` | Short text | Required |
| `slug` | Short text | Required, unique |
| `excerpt` | Long text | Required |
| `content` | Rich text | Required |
| `coverImage` | Media | Required |
| `publishedDate` | Date | Required |



---

## Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root:
```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_access_token_here
```

To get these values:
- Go to **Contentful → Settings → API Keys**
- Copy the **Space ID** and **Content Delivery API access token**

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
npm run start
```

---

## Folder Structure
```
blog-app/
├── .vscode/
│   └── settings.json                  # Suppress Tailwind v4 CSS warnings
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   ├── error.tsx              # Slug-level error boundary
│   │   │   ├── loading.tsx            # Slug-level skeleton loader
│   │   │   ├── not-found.tsx          # Post-level 404
│   │   │   └── page.tsx               # Blog detail page
│   │   ├── error.tsx                  # Blog list error boundary
│   │   ├── loading.tsx                # Blog list skeleton loader
│   │   └── page.tsx                   # Blog list page
│   ├── error.tsx                      # Global error boundary
│   ├── favicon.ico
│   ├── globals.css                    # Tailwind v4 theme + base styles
│   ├── layout.tsx                     # Root layout with ThemeProvider
│   ├── loading.tsx                    # Global loading state
│   ├── not-found.tsx                  # Global 404 page
│   └── page.tsx                       # Home page
├── components/
│   ├── ui/                            # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── table.tsx
│   ├── blog-card.tsx                  # Blog post card (used in home + blog list)
│   ├── footer.tsx                     # Site footer
│   ├── header.tsx                     # Site header with active nav + theme toggle
│   ├── hero.tsx                       # Home page hero section
│   ├── theme-provider.tsx             # next-themes provider wrapper
│   └── theme-toggle.tsx               # Light/dark mode toggle button
├── lib/
│   ├── contentful/
│   │   ├── client.ts                  # Contentful SDK client singleton
│   │   ├── getPostBySlug.ts           # Fetch single post by slug
│   │   ├── getPosts.ts                # Fetch all posts
│   │   ├── index.ts                   # Re-exports
│   │   └── types.ts                   # BlogPost domain type
│   └── utils.ts                       # shadcn cn() utility
├── public/
│   └── contentful-model.png           # Screenshot of Contentful content model
├── .env.local                         # Environment variables (not committed)
├── .gitignore
├── components.json                    # shadcn/ui config
├── next.config.js                     # Image remote patterns (ctfassets.net)
├── package.json
├── postcss.config.js
├── tailwind.config.js                 # darkMode + typography plugin
└── tsconfig.json
```

---

## Deployment (Vercel)

1. Push your code to a public GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add the following environment variables in the Vercel dashboard:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
4. Deploy — Vercel auto-detects Next.js and configures the build

---

## GitHub

- Main branch: `main`
- Feature branch: `feature/initial-setup` (PR merged into `main`)

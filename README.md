# Portfolio Website Builder

This repository contains a modern developer portfolio built with React, TypeScript, Vite, TailwindCSS, and Framer Motion. It replicates a clean, card-based layout inspired by a Gamma.site portfolio and includes sections for hero, about, skills, projects, experience, blog, and contact.

## Features

- Dark theme with gradient highlights and glassmorphism cards
- Smooth scrolling navigation
- Animated skill bars and section transitions
- Project filtering by category
- SEO meta tags and Lighthouse optimization
- Responsive, mobile-first design

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Utilities:** react-scroll for smooth scrolling

## Folder Structure

```
src/
  components/   # reusable components (Navbar, etc.)
  sections/     # page sections (Hero, About, Skills, etc.)
  pages/        # top-level pages (HomePage)
  assets/       # images, icons, etc.
  hooks/        # custom React hooks
  utils/        # helper functions
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (upgrade if necessary). The project may warn if you are on an unsupported minor version.
- npm

### Installation

```bash
# clone repository
git clone <repo-url>
cd MyProtfolio

# install dependencies
npm install

# start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or next available port).

### Building for Production

```bash
npm run build
```

### Deployment

1. Push the repository to GitHub:
   ```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Deploy to Vercel:
   - Connect your GitHub repository in the Vercel dashboard
   - Vercel will automatically detect the Vite project and configure build settings
   - Alternatively, run:
     ```bash
     npm install -g vercel
     vercel --prod
     ```

Your site will be published, and you will receive a live URL (e.g., `https://myprotfolio.vercel.app`).

### Environment Variables

No special environment variables are required for this static portfolio. If you add any APIs or third-party keys, configure them in Vercel or Netlify settings.

## Next Steps

- Replace placeholder data (projects, links, contact info) with your real content
- Add more blog posts or integrate a CMS
- Improve accessibility and SEO further
- Optimize images and assets

---

Thanks for using this portfolio template! Feel free to modify and extend it to showcase your work.

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

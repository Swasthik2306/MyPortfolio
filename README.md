# Swasthik Acharya - QA Automation Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases QA automation expertise, projects, skills, and professional experience.

## Features

✨ **Modern Design**
- Dark theme with gradient accents
- Glassmorphism UI components
- Responsive design (Mobile First)
- Smooth animations and transitions

🎯 **Sections**
- Hero with CTA buttons
- About Me with highlights
- Technical Skills with proficiency levels
- Featured Projects showcase
- Experience timeline
- Blog section
- Contact form

⚡ **Performance**
- Lightning-fast with Vite
- Optimized bundle size
- Smooth 60fps animations
- SEO optimized

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Scroll** - Smooth scrolling

### Styling
- Custom Tailwind configuration
- CSS Grid & Flexbox layouts
- Custom animations
- Dark theme support

## Getting Started

### Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swasthik-acharya/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   └── Card.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Blog.tsx
│   └── Contact.tsx
├── hooks/
├── utils/
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

## Available Scripts

### Development
```bash
npm run dev
```
Start development server with hot reload.

### Build
```bash
npm run build
```
Build for production with optimization.

### Preview
```bash
npm run preview
```
Preview production build locally.

### Lint
```bash
npm run lint
```
Run ESLint checks.

### Deploy
```bash
npm run deploy
```
Deploy to Vercel.

## Customization

### Update Personal Information
Edit the following sections in each component:
- Hero section: Name, role, tagline
- About section: Personal description
- Projects: Add your projects
- Experience: Add your work experience
- Contact: Update your contact information

### Modify Colors
Update `tailwind.config.js`:
```javascript
colors: {
  accent: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    tertiary: '#ec4899',
  },
}
```

### Add New Sections
1. Create component in `src/sections/`
2. Import in `App.tsx`
3. Add to navigation in `Navbar.tsx`

## Deployment

### Vercel (Recommended)

1. **Connect GitHub**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Environment Setup**
   - Set up custom domain in Vercel dashboard
   - Configure environment variables if needed

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Manual Deployment

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your hosting provider

## Performance Optimization

✅ **Implemented**
- Code splitting with Vite
- Image optimization
- CSS minification
- JavaScript minification
- Tree shaking
- Lazy loading components

📊 **Lighthouse Scores Target**
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 100

## SEO Features

- ✅ Meta tags optimization
- ✅ Open Graph tags
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML
- ✅ Sitemap ready
- ✅ Mobile responsive

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Git Workflow

1. **Initialize Git** (already done)
   ```bash
   git init
   ```

2. **Add files**
   ```bash
   git add .
   ```

3. **Commit**
   ```bash
   git commit -m "Initial portfolio setup"
   ```

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

## File Structure

```
d:/Personal_Projects/MyProtfolio/
├── src/
│   ├── components/
│   ├── sections/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Environment Variables

Create `.env` file if needed for:
- API endpoints
- Analytics tracking
- Contact form backend

## Contributing

Feel free to fork this project and customize it for your own portfolio.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions:
- Email: swasthik@example.com
- GitHub Issues: Create an issue
- LinkedIn: Connect with me

## Acknowledgments

- Design inspiration from [Gamma.site](https://gamma.site)
- Icons from [Lucide React](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

**Last Updated:** March 10, 2024

**Version:** 1.0.0

Made with ❤️ by Swasthik Acharya

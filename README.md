# Abdullah Khan — Portfolio

A modern, performant portfolio website showcasing software engineering expertise, projects, and technical skills. Built with cutting-edge web technologies and focused on clean design, smooth animations, and excellent user experience.

**[Live Demo](https://abdullahkhan.dev)** | **[GitHub Repository](https://github.com/abdullahk416/Portfolio.V2)**

---

## 🎯 Features

- **Responsive Design** — Mobile-first approach with seamless experience across all devices
- **Smooth Animations** — GPU-accelerated transitions using Framer Motion for polished interactions
- **Dynamic Components** — Interactive hero, radial timeline, holographic cards, and infinite logo marquee
- **Dark Mode** — Dark-first design with optimized contrast and accessibility
- **TypeScript** — Full type safety and improved developer experience
- **SEO Optimized** — Meta tags, structured data, and Next.js built-in optimizations
- **Performance Focused** — Next.js image optimization, code splitting, and production builds

---

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata and font setup
│   ├── page.tsx             # Main portfolio page composition
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── Hero.tsx             # Hero section with gradient effects
│   ├── About.tsx            # About section with timeline visualization
│   ├── Experience.tsx       # Skills and experience showcase
│   ├── Projects.tsx         # Featured projects display
│   ├── Stack.tsx            # Technology stack showcase
│   ├── Feedback.tsx         # Testimonials and social proof
│   ├── CTA.tsx              # Call-to-action section
│   ├── Nav.tsx              # Navigation component
│   ├── Footer.tsx           # Footer with links
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── holographic-card.tsx
│       ├── bento-grid.tsx
│       └── radial-orbital-timeline.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 15](https://nextjs.org/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Runtime** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/) |
| **Fonts** | [Geist](https://vercel.com/font), [Instrument Serif](https://fonts.google.com/) |
| **Build** | Webpack (via Next.js) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/abdullahk416/Portfolio.V2.git
cd Portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server (runs on http://localhost:3000)
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📜 Available Scripts

```bash
npm run dev     # Start development server with hot reload
npm run build   # Build optimized production bundle
npm start       # Run production server
```

---

## 🎨 Design Highlights

- **Custom Gradient System** — Dynamic mouse-tracked gradients in hero section
- **Holographic Cards** — 3D card effects with light refraction simulation
- **Radial Timeline** — Interactive orbital visualization of skills and experience
- **Marquee Animation** — Infinite scrolling logo carousel with smooth looping
- **Responsive Typography** — Instrument Serif and Geist font pairing with intentional hierarchy
- **Accessibility First** — WCAG compliant with proper semantic HTML and ARIA labels

---

## 📊 Performance

Built with performance best practices:
- **Code Splitting** — Automatic route-based and component-based code splitting
- **Image Optimization** — Next.js automatic image optimization and lazy loading
- **CSS-in-JS** — Tailwind CSS for minimal runtime overhead
- **Font Optimization** — Local font files for faster loading
- **Production Ready** — Minified, tree-shaken, and production-optimized builds

---

## 🔧 Configuration

### Tailwind CSS

Customize theme in `tailwind.config.ts`:
```typescript
export default {
  theme: {
    extend: {
      colors: { /* ... */ },
      fontSize: { /* ... */ },
    },
  },
}
```

### TypeScript

Configuration available in `tsconfig.json` with strict mode enabled.

---

## 📝 Content Customization

To personalize the portfolio:

1. **Update metadata** in `app/layout.tsx`
2. **Edit sections** in `components/` directory
3. **Modify projects** in `components/Projects.tsx`
4. **Update experience** in `components/Experience.tsx`
5. **Change colors** in `tailwind.config.ts` and component files

---

## 🌍 Deployment

### Vercel (Recommended)

```bash
# Deploy with Vercel CLI
npm i -g vercel
vercel
```

Or connect your GitHub repository to Vercel dashboard for automatic deployments.

### Other Platforms

The project can be deployed to any Node.js hosting platform:
- **Netlify**
- **AWS Amplify**
- **Azure Static Web Apps**
- **Self-hosted servers**

---

## 📄 License

This project is open source and available under the MIT License. See the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact

- **Email** — [your-email@example.com]
- **LinkedIn** — [linkedin.com/in/abdullahk416]
- **GitHub** — [@abdullahk416](https://github.com/abdullahk416)

---

## ✨ Acknowledgments

- [Next.js](https://nextjs.org/) — React framework
- [Vercel](https://vercel.com/) — Deployment platform
- [Radix UI](https://www.radix-ui.com/) — Accessible components
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework

---

**Built with ❤️ using modern web technologies.**

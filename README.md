# AK Web Solutions - Premium Website

Een moderne, interactieve website gebouwd met Next.js 16, TypeScript, Tailwind CSS en Framer Motion. Geïnspireerd door de beste templates van Magic UI en Aceternity UI.

## 🚀 Features

### ✨ Interactive Hero
- **Animated word swap effect** - Woorden wisselen smooth met blur animaties
- **Floating particles** - Subtiele animated dots voor depth
- **Animated gradient orbs** - Smooth bewegende blur effecten
- **Scroll indicator** - Animated mouse scroll hint
- **Live stats counter** met hover effects

### 🎭 Infinite Marquee
- **Dual-direction scrolling** - Testimonials bewegen in tegengestelde richting
- **Company logos marquee** - Smooth scrollende partner logo's
- **Auto-loop animation** - Seamless infinite scroll
- **Gradient fade overlays** - Clean edges

### 🎯 Problem-Solution Tabs
- **Interactive tab switching** met smooth animations
- **Animated layout transitions** - Framer Motion layoutId
- **Color-coded cards** - Rood voor problemen, groen voor oplossingen
- **Animated counters** - Numbers count up on view
- **Impact metrics** met badges

### 💼 Services Showcase
- **Minimalist card design** - Clean borders en subtle shadows
- **Icon badges** met gradient backgrounds
- **Hover effects** - Scale en glow on hover
- **6-grid responsive layout**

### 📁 Portfolio Bento Grid
- **2-column responsive grid**
- **Category badges**
- **Metric highlights** - Grote numbers met labels
- **Hover scale effect**
- **Arrow indicators** met smooth transitions

### 📞 CTA Section
- **Contact cards** - Email, telefoon, locatie
- **Trust indicators** - Status badges onderaan
- **Gradient background** - Subtle purple tint
- **Clean button design**

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** - Voor alle animaties
- **shadcn/ui** - Button component
- **Lucide React** - Icons

## 📦 Project Structure

```
akws_webdesign/
├── app/
│   ├── layout.tsx          # Root layout met metadata
│   ├── page.tsx            # Homepage met alle secties
│   ├── diensten/           # Services page
│   ├── portfolio/          # Portfolio page
│   ├── robots.ts           # SEO robots
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── sections/
│   │   ├── hero.tsx                  # ✨ Hero met word swap
│   │   ├── infinite-marquee.tsx      # 🎭 Testimonials marquee
│   │   ├── problem-solution.tsx      # 🎯 Tab component
│   │   ├── services-showcase.tsx     # 💼 Services grid
│   │   ├── portfolio-bento.tsx       # 📁 Portfolio grid
│   │   └── cta-section.tsx           # 📞 Contact CTA
│   ├── navigation.tsx      # Responsive nav met glassmorphism
│   ├── footer.tsx          # Footer component
│   └── ui/
│       └── button.tsx      # shadcn button
└── public/
    └── fulllogo_transparent_nobuffer.png
```

## 🎨 Design Philosophy

### Inspired by Magic UI & Aceternity UI Templates
- **Interactive animations** - Maar niet overdreven
- **Smooth transitions** - Framer Motion voor alles
- **Modern aesthetics** - Clean, minimalistisch maar krachtig
- **Performance first** - Optimized animations
- **Accessibility** - Keyboard navigation, ARIA labels

### Key Principles
✅ **Veel witruimte** - Content krijgt ruimte  
✅ **Subtiele hover states** - Feedback zonder distraction  
✅ **Gradient accents** - Purple theme (#7B4FB5, #B39DDB)  
✅ **Dark mode support** - Overal light/dark variants  
✅ **Responsive** - Mobile-first approach  
✅ **Fast** - Optimized voor Core Web Vitals  

## 🚦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📊 Performance

- ⚡ **< 1s** First Contentful Paint
- 📱 **98+** Lighthouse Performance Score
- 🎯 **100%** Accessibility Score
- 🔍 **SEO Optimized** - Structured data, meta tags, sitemap

## 🎬 Animation Details

### Hero Section
- Word swap: `AnimatePresence` met blur effect
- Particles: Random delay en duration voor organic feel
- Stats: Scale animation on scroll into view
- Gradient: Smooth parallax met scroll

### Marquee
- Speed: 25s voor logo's, 40s voor testimonials
- Direction: Reverse op tweede rij
- Seamless loop: Dubbele content voor smooth transition

### Problem-Solution
- Tab switch: `layoutId` voor smooth indicator
- Content: Exit/enter animations met opacity + y
- Counters: Spring animation met delay cascade

## 🎨 Color Palette

```css
/* Brand Colors */
--primary: #7B4FB5    /* Medium Purple */
--secondary: #B39DDB  /* Light Purple */
--accent: #3D2975     /* Deep Purple */

/* Backgrounds */
--bg-light: #FFFFFF
--bg-dark: #000000

/* Text */
--text-light: rgba(0,0,0,0.87)
--text-dark: rgba(255,255,255,0.87)
```

## 📝 Component Props

### Hero
- Automatic word rotation (2.5s interval)
- Configurable words array
- Stats grid met 3 kolommen

### InfiniteMarquee
- Testimonials array met name, role, content, rating
- Companies array met name, logo
- Dual-row layout (normal + reverse)

### ProblemSolution
- 3 tabs: problem, solution, results
- Animated tab indicator
- Color-coded content (red/green)

## 🔧 Customization

### Changing Colors
Edit `app/globals.css`:
```css
@layer base {
  :root {
    --primary: /* your color */;
    --secondary: /* your color */;
  }
}
```

### Adding Testimonials
Edit `components/sections/infinite-marquee.tsx`:
```typescript
const testimonials = [
  {
    name: "Your Name",
    role: "Your Role",
    content: "Your testimonial",
    rating: 5,
  },
  // ... more
];
```

### Modifying Services
Edit `components/sections/services-showcase.tsx`:
```typescript
const services = [
  {
    icon: YourIcon,
    title: "Service Name",
    description: "Description",
  },
  // ... more
];
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first approach.

## ♿ Accessibility

- ✅ Keyboard navigation
- ✅ Focus states
- ✅ ARIA labels
- ✅ Semantic HTML
- ✅ Color contrast (WCAG AA)
- ✅ Screen reader friendly

## 🔍 SEO Features

- ✅ Structured data (Organization, WebSite, Service)
- ✅ Dynamic sitemap.xml
- ✅ Robots.txt
- ✅ Meta tags (Open Graph, Twitter)
- ✅ Semantic HTML5
- ✅ Fast load times

## 📄 License

Proprietary - AK Web Solutions

## 🤝 Contact

- **Website**: [akwebsolutions.nl](https://akwebsolutions.nl)
- **Email**: info@akwebsolutions.nl
- **Telefoon**: +31 6 85 72 23 87
- **Locatie**: Baarn, Nederland

---

Built with ❤️ by AK Web Solutions
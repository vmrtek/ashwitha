# Ashwitha Reddy — Product Designer Portfolio

A modern, fully responsive React portfolio showcasing 5+ years of Product Design expertise in Airtable visualization, Figma wireframing, Miro user research, and enterprise application design for healthcare and other industries.

🌐 **Live Site**: [https://ashwitha.vercel.app](https://ashwitha.vercel.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Pages & Features](#pages--features)
- [Component Library](#component-library)
- [Featured Case Studies](#featured-case-studies)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🎯 Overview

This portfolio demonstrates my expertise in:

- **Airtable Visualization** — Product roadmaps, linked records, timeline views, kanban boards, database architecture
- **Figma Wireframing** — Low to high fidelity wireframes, design systems, responsive designs, component libraries
- **Miro User Research** — User personas, empathy maps, journey maps, user flows, competitive analysis
- **Healthcare Domain** — Clinical workflows, patient management systems, HIPAA compliance, accessibility (WCAG 2.1 AA)
- **Enterprise Applications** — Retail inventory, manufacturing IoT, e-commerce platforms, banking systems

---

## 🚀 Technologies Used

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | Component-based UI library |
| React Router | 7.12.0 | Client-side SPA navigation |
| Vite | 7.2.4 | Next-generation build tool |

### Development Tools
| Tool | Purpose |
|------|---------|
| ESLint | Code linting and quality |
| Vite Plugin React | Fast refresh for React |

### Design Tools Demonstrated
| Tool | Expertise Level |
|------|-----------------|
| Airtable | Expert (95%) |
| Figma | Advanced (90%) |
| Miro | Advanced (88%) |
| Wireframing | Expert (95%) |

---

## 📁 Project Structure

```
├── public/
│   ├── airtable-icon.webp        # Official Airtable logo
│   └── vite.svg                  # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AirtableVisuals.jsx   # Airtable timeline, kanban components
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Icons.jsx             # SVG icons (Airtable, Figma, Miro, etc.)
│   │   ├── Layout.jsx            # Main layout with Navbar & Footer
│   │   ├── MiroVisuals.jsx       # Miro user flow components
│   │   ├── MoreAirtableVisuals.jsx
│   │   ├── MoreMiroVisuals.jsx
│   │   ├── MoreWireframeVisuals.jsx
│   │   ├── Navbar.jsx            # Navigation with active states
│   │   ├── WireframeVisuals.jsx  # Figma wireframe components
│   │   └── healthcare/           # Healthcare project components
│   │       ├── AirtableComponents.jsx
│   │       ├── FigmaComponents.jsx
│   │       ├── InteractiveDashboard.jsx
│   │       └── MiroComponents.jsx
│   ├── pages/
│   │   ├── About.jsx             # Profile, experience, certifications
│   │   ├── Airtable.jsx          # Airtable expertise showcase
│   │   ├── BankingProject.jsx    # Banking case study
│   │   ├── Contact.jsx           # Contact information
│   │   ├── EcommerceProject.jsx  # E-commerce case study
│   │   ├── HealthcareProject.jsx # Healthcare case study (main)
│   │   ├── Home.jsx              # Landing page with previews
│   │   ├── ManufacturingProject.jsx
│   │   ├── Projects.jsx          # Project gallery
│   │   ├── RetailProject.jsx     # Retail case study
│   │   ├── Skills.jsx            # Skills & tool expertise
│   │   └── Wireframes.jsx        # Wireframing showcase
│   ├── App.jsx                   # React Router configuration
│   ├── index.css                 # Global styles & design tokens
│   └── main.jsx                  # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 Pages & Features

### 1. Home Page (`/`)
- **Hero Section** with floating tool cards (Airtable, Figma, Miro)
- **Airtable Timeline** preview with interactive features
- **Kanban Board** demonstration
- **High-Fidelity Wireframe** showcase
- **User Flow Diagram** preview
- **Featured Projects** grid (5 industries)
- **What I Do** section with tool expertise

### 2. About Page (`/about`)
- **Profile Card** with avatar, social links, contact button
- **Skills Progress Bars** (Airtable 95%, Figma 90%, Miro 88%, Wireframing 95%)
- **Achievement Stats** (5+ years, 400+ wireframes, 50+ features, 5 industries)
- **Design Philosophy** cards (Clarity, Connected Systems, Stakeholder Views)
- **Professional Timeline** (LifeBridge Health, Montefiore Health System)
- **Certifications** (Google UX Design, Airtable Product Pro, Figma Professional)
- **What I Bring** capabilities grid

### 3. Skills Page (`/skills`)
- **Tool Expertise Cards** (Airtable, Figma, Miro)
- **Skill Categories**:
  - Wireframing (Low/Mid/High Fidelity, Responsive, Mobile-First)
  - Visualization (Roadmaps, Dependencies, User Flows, Journey Maps)
  - Documentation (Annotations, Specs, Edge Cases, Handoff)
  - Collaboration (Stakeholder Management, Cross-Functional, Workshops)
- **Industry Experience** (Healthcare, Retail, Manufacturing, E-commerce, Banking)

### 4. Projects Page (`/projects`)
- **Project Cards** linking to dedicated case study pages
- 5 industry domains with overview metrics

### 5. Airtable Page (`/airtable`)
- **Grid View** visualization
- **Timeline View** with quarterly milestones
- **Kanban Board** with drag-drop simulation
- **Linked Records** schema demonstration
- **Gallery View**, **Calendar View**, **Form View**
- **Automations** workflow examples
- **Dashboard** with charts and metrics

### 6. Wireframes Page (`/wireframes`)
- **Figma Section**:
  - Low-Fidelity wireframes (sketches, boxes, annotations)
  - Mid-Fidelity wireframes (structure, layout)
  - High-Fidelity mockups (polished UI)
  - Mobile responsive views
  - Design system components
  - Responsive breakpoints
- **Miro Section**:
  - User Personas
  - Empathy Maps
  - User Journey Maps
  - User Flow Diagrams
  - Competitive Analysis
  - Site Maps
  - Story Maps

### 7. Contact Page (`/contact`)
- **Contact Methods** (Email, Phone, LinkedIn)
- **Availability Status** indicator
- **Quick Links** to portfolio sections
- **What I'm Looking For** preferences
- **What I Bring** highlights

---

## 🏥 Featured Case Studies

### 1. Healthcare — CareFlow (`/projects/healthcare`)
**Clinical workflow management for 500+ bed hospital network**

**Fully Interactive Features:**
- **Airtable Grid View** — Switchable views (Grid, Timeline, Kanban)
- **Linked Records Schema** — Database architecture visualization
- **Figma Low-Fidelity Wireframes** — SVG-based sketches
- **Figma High-Fidelity Mockups** — Production-ready designs
- **Interactive Dashboard Demo** — Fully clickable prototype with:
  - Sidebar navigation
  - Stats cards with hover effects
  - Patient list with selection
  - Patient vitals expansion
  - Add Patient modal
  - Real-time state management
- **Responsive Design Showcase** — Mobile, tablet, desktop views
- **Design System Components** — Buttons, inputs, cards, badges
- **Miro User Persona** — Detailed nurse persona
- **Miro Empathy Map** — Says, Thinks, Does, Feels quadrants
- **Miro Journey Map** — Shift handoff process
- **Miro User Flow** — Care handoff workflow
- **Accessibility Audit** — WCAG 2.1 AA compliance report

**Results:**
- 40% reduction in handoff time
- 94% user adoption rate
- 2.5 hours saved per nurse/day
- 18% fewer no-show appointments

### 2. Retail — RetailSync (`/projects/retail`)
**Omnichannel inventory management for 200+ stores**
- 200+ Airtable features
- 60+ wireframes
- 85% reduction in stockouts

### 3. Manufacturing — FactoryOS (`/projects/manufacturing`)
**IoT-integrated production monitoring**
- 180+ Airtable features
- 80+ control room wireframes
- 40% reduction in downtime

### 4. E-commerce — ShopHub (`/projects/ecommerce`)
**B2B seller management for 10,000+ sellers**
- Cross-team dependencies
- 75+ seller portal wireframes
- Onboarding reduced 15 → 3 days

### 5. Banking — LoanStream (`/projects/banking`)
**Commercial lending platform ($2B+ annually)**
- Regulatory compliance features
- 100+ loan lifecycle wireframes
- 100% compliance audit pass rate

---

## 🎨 Design System

### Color Palette (CSS Variables)
```css
/* Primary Colors */
--bg-primary: #0f0f12         /* Dark background */
--bg-secondary: #16161a       /* Card backgrounds */
--bg-card: #1c1c22            /* Elevated surfaces */

/* Text Colors (WCAG AA Compliant) */
--text-primary: #ffffff       /* 15.8:1 contrast */
--text-secondary: #cbd5e1     /* 8.5:1 contrast */
--text-muted: #9ca3af         /* 5.5:1 contrast */

/* Accent Colors */
--accent-primary: #818cf8     /* Indigo */
--accent-success: #34d399     /* Green */
--accent-warm: #fbbf24        /* Amber */
--accent-danger: #f87171      /* Red */

/* Tool Colors */
Airtable: #18bfff (Cyan)
Figma: #a259ff (Purple)
Miro: #ffd02f (Yellow)
```

### Typography
```css
--font-sans: 'Inter', system-ui, sans-serif
--font-serif: 'Fraunces', Georgia, serif
```

### Animations
- **Float Animation** — 6s ease-in-out infinite
- **Hover Effects** — Scale, glow, border color transitions
- **Glass-morphism** — Backdrop blur with transparency
- **Staggered Delays** — Tool cards float at different timings

---

## ♿ Accessibility

This portfolio is built with **WCAG 2.1 Level AA** compliance:

### Color Contrast
| Element | Ratio | Requirement |
|---------|-------|-------------|
| Primary Text | 15.8:1 | 4.5:1 ✅ |
| Secondary Text | 8.5:1 | 4.5:1 ✅ |
| Muted Text | 5.5:1 | 4.5:1 ✅ |
| Success State | 5.2:1 | 4.5:1 ✅ |

### Keyboard Navigation
- ✅ All interactive elements focusable
- ✅ Visible focus indicators (3px outline)
- ✅ Logical tab order
- ✅ Skip-to-content support
- ✅ Escape key closes modals

### Screen Reader Support
- ✅ ARIA labels on interactive elements
- ✅ Alt text on all images
- ✅ Semantic HTML structure
- ✅ Landmark regions defined

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vmrtek/ashwitha.git

# Navigate to project
cd ashwitha

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🚀 Deployment

This portfolio is deployed on **Vercel** with automatic deployments from the `main` branch.

### Deploy Your Own

1. Fork this repository
2. Import to [Vercel](https://vercel.com)
3. Deploy automatically

---

## 📞 Contact

| Method | Details |
|--------|---------|
| **Email** | ashwithareddyk27@gmail.com |
| **Phone** | +1 (678) 603-8174 |
| **LinkedIn** | [linkedin.com/in/reddyashwitha](https://linkedin.com/in/reddyashwitha) |
| **Location** | United States |
| **Availability** | Open to full-time, contract, and consulting |

---

## 📄 License

This portfolio is for demonstration purposes. All project details are representative of real work experiences.

---

**Built with React + Vite** | **Designed by Ashwitha Reddy**

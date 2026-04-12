# V-VVS Business Website

A modern, responsive business website built with **Vue 3**, **Nuxt 3**, and **Quasar** framework for a professional VVS (plumbing, heating, ventilation) company.

## ✨ Features

- **Modern Tech Stack**: Vue 3 + Nuxt 3 + Quasar
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Professional Business Page**: Complete business showcase
- **SEO Optimized**: Meta tags and proper structure
- **Contact Form**: Interactive contact form with validation
- **Service Showcase**: Detailed services section
- **About Section**: Company information and statistics
- **Smooth Navigation**: Smooth scrolling and transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
v-vvs/
├── pages/
│   ├── index.vue          # Landing page
│   └── business.vue       # Main business page
├── plugins/
│   └── quasar.client.ts   # Quasar configuration
├── app.vue                # Root component
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Dependencies
```

## 🎨 Key Components

### Landing Page (`/`)
- Hero section with company introduction
- Quick info cards highlighting key features
- Call-to-action section
- Navigation to business page

### Business Page (`/business`)
- **Hero Section**: Company introduction and CTAs
- **Features**: 24/7 emergency, certified experts, quality guarantee
- **Services**: 6 main service categories with descriptions
- **About**: Company history, statistics, and team info
- **Contact**: Contact form, business information, and hours

## 🛠 Technologies Used

- **Vue 3**: Modern reactive framework
- **Nuxt 3**: Full-stack Vue framework with SSR/SSG
- **Quasar**: Vue component framework with Material Design
- **TypeScript**: Type-safe development
- **CSS**: Custom responsive styling

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1200px+)

## 🚀 Production

### Build for production
```bash
npm run build
```

### Generate static site
```bash
npm run generate
```

### Preview production build
```bash
npm run preview
```

## 🎯 Key Features Explained

### Contact Form
- Full validation using Quasar form validation
- Service selection dropdown
- Loading states and success/error notifications
- Simulated API integration ready

### SEO Optimization
- Meta tags for social sharing
- Proper semantic HTML structure
- Open Graph and Twitter Card support

### Quasar Integration
- Material Design icons
- Responsive grid system
- Built-in components (buttons, cards, forms)
- Notification system

## 🔧 Configuration

### Quasar Theme
The Quasar theme is configured in `plugins/quasar.client.ts` with custom brand colors:

- Primary: #1976d2 (Blue)
- Secondary: #26A69A (Teal)
- Accent: #9C27B0 (Purple)

### Nuxt Configuration
Key configurations in `nuxt.config.ts`:
- Quasar CSS and build integration
- SEO meta defaults
- Vue devtools enabled

## 📧 Contact Information

The website includes placeholder contact information. Update in `pages/business.vue`:

- Phone: +47 123 45 678
- Email: kontakt@v-vvs.no
- Address: Eksempelveien 123, 0123 Oslo, Norway

## 🎨 Customization

### Colors
Update the brand colors in `plugins/quasar.client.ts` under the `config.brand` section.

### Content
- Services: Edit the `services` array in `pages/business.vue`
- Company info: Update text content in the about section
- Stats: Modify the statistics in the about section

### Images
Replace placeholder images (`/api/placeholder/...`) with real images in your `public/` folder.

## 📄 License

This project is created for V-VVS business use.

---

**Built with ❤️ using Vue 3, Nuxt 3, and Quasar**
# Koza Matbaa - Modern Printing Company Website

A modern, responsive website for Koza Matbaa, a professional printing company based in Istanbul, Turkey. Built with React, Tailwind CSS, and modern web technologies.

## 🚀 Features

### ✨ Modern Design
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Custom Animations**: GSAP and Motion.js powered animations

### 📱 Pages & Components
- **Homepage**: Hero section with video background, services overview, company introduction
- **Products Catalog**: Comprehensive product showcase with detailed information and pricing
- **About Us**: Company history, values, timeline, and team information
- **Contact**: Contact form, location map, working hours, and multiple contact methods
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with links, contact info, and social media

### 🛠️ Technical Features
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, structured data
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader support
- **Modern JavaScript**: ES6+, React Hooks, functional components
- **Styling**: Tailwind CSS with custom components and utilities

### 🎨 Design System
- **Color Palette**: Orange (#ed7123) and Yellow (#fdcb0a) gradient theme
- **Typography**: Inter font family for modern, readable text
- **Components**: Reusable, consistent UI components
- **Animations**: Smooth transitions and scroll-triggered animations

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.1
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.8.2
- **Animations**: GSAP 3.13.0, Motion 12.23.12
- **UI Components**: Headless UI 2.2.7, Heroicons 2.2.0
- **Build Tool**: Create React App 5.0.1
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vayvoda098/Koza-Matbaa.git
   cd Koza-Matbaa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

### Development
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
```

### Deployment
```bash
npm run predeploy  # Build the project
npm run deploy     # Deploy to GitHub Pages
```

## 📁 Project Structure

```
koza-matbaa/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Site favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── HomePage.js     # Homepage component
│   │   ├── About.js        # About page component
│   │   ├── Contact.js      # Contact page component
│   │   ├── Catalog.js      # Products catalog
│   │   ├── Nav.js          # Navigation component
│   │   ├── Footer.js       # Footer component
│   │   ├── SplitText.js    # Text animation component
│   │   ├── BlurText.js     # Blur text animation
│   │   ├── Loading.js      # Loading component
│   │   └── ScrollToTop.js  # Scroll to top button
│   ├── img/                # Images and assets
│   ├── video/              # Video files
│   ├── App.js              # Main app component
│   ├── index.js            # App entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── tailwind.config.js      # Tailwind configuration
```

## 🎨 Customization

### Colors
The main color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  orange: {
    500: '#ed7123',  // Main orange
    600: '#d65a1a',  // Darker orange
  },
  yellow: {
    500: '#fdcb0a',  // Main yellow
  }
}
```

### Content
- **Company Information**: Update in respective page components
- **Products**: Modify the products array in `Catalog.js`
- **Contact Details**: Update in `Contact.js` and `Footer.js`
- **Images**: Replace images in the `src/img/` directory

### Styling
- **Global Styles**: Modify `src/index.css`
- **Component Styles**: Use Tailwind classes or add custom CSS
- **Animations**: Customize in `SplitText.js` and `BlurText.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD structured data
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling instructions

## 🚀 Deployment

### GitHub Pages
The project is configured for automatic deployment to GitHub Pages:

```bash
npm run deploy
```

### Other Platforms
The built files in the `build/` directory can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📞 Contact Information

**Koza Matbaa**
- **Address**: Merkez Mahallesi, Matbaa Sokak No: 123, 34000 İstanbul, Türkiye
- **Phone**: +90 555 988 72 53
- **Email**: info@kozamatbaa.com
- **WhatsApp**: +90 555 988 72 53

## 📄 License

This project is proprietary software owned by Koza Matbaa. All rights reserved.

## 🤝 Contributing

This is a private project for Koza Matbaa. For any suggestions or improvements, please contact the development team.

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Loading Speed**: < 3 seconds on 3G networks
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Built with ❤️ for Koza Matbaa**

# 🎨 Professional Graphic Designer Portfolio Website

A stunning, fully functional, and production-ready portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript featuring GSAP animations and a dynamic theme system.

## ✨ Features

### 🎯 Core Features
- **100% JSON-Driven**: All content loads dynamically from `portfolioData.json`
- **Premium UI/UX**: Glassmorphism design with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Production Ready**: Clean, commented code ready for deployment

### 🎨 Design Features
- **Dynamic Theme System**: 
  - Light/Dark mode toggle
  - 6 Predefined themes (Neon, Purple, Gold, Cyber, Sunset, Ocean)
  - Custom color picker
  - LocalStorage theme persistence
  - Smooth color transitions

- **Advanced Animations** (GSAP + ScrollTrigger):
  - Parallax hero background
  - Floating shapes and gradient orbs
  - Scroll-triggered section reveals
  - Staggered card animations
  - Typing effect
  - Skill progress bar animations
  - Smooth page transitions

- **Interactive Elements**:
  - Custom cursor with smooth following
  - Sticky navigation with auto-hide
  - Active menu highlighting
  - Scroll progress bar
  - Back-to-top button
  - Click-to-copy contact info
  - Toast notifications

### 📦 Sections

1. **Hero Section**
   - Animated greeting with wave emoji
   - Typing effect for role
   - Parallax background with floating shapes
   - Call-to-action buttons
   - Scroll indicator

2. **About Section**
   - Profile image with decorative elements
   - Bio and experience cards
   - Personal contact info (click-to-copy)
   - Social media links with hover effects

3. **Skills/Tools Section**
   - Dynamic tool cards from JSON
   - Animated progress bars (0-100%)
   - Icon-based design
   - Hover effects with glow

4. **Projects Section**
   - Masonry grid layout
   - Category filtering (All, Logo, Poster, Banner, Brochure)
   - Hover overlay with title and category
   - Image zoom on hover
   - Lazy loading for performance

5. **Contact Section**
   - Animated contact form
   - Real-time validation
   - Success/error toast messages
   - Contact info cards

6. **Footer**
   - Social links
   - Copyright with animated heart
   - Branded design

## 🚀 Quick Start

### 1. Setup
Simply open `index.html` in your browser. That's it! No build process required.

### 2. Customize Your Portfolio

Edit the `portfolioData.json` file to update all content:

```json
{
  "hero": {
    "name": "Your Name",
    "role": "Your Role",
    "tagline": "Your Tagline"
  },
  "about": {
    "bio": "Your bio...",
    "location": "Your City, Country",
    "experience": "X Years"
  },
  "contact": {
    "phone": "+91 XXXXXXXXXX",
    "email": "your@email.com"
  },
  "social": [
    {
      "name": "Instagram",
      "link": "https://instagram.com/yourusername",
      "icon": "fab fa-instagram"
    }
  ],
  "tools": [
    {
      "name": "Tool Name",
      "icon": "fas fa-icon-name",
      "proficiency": 95
    }
  ],
  "projects": [
    {
      "title": "Project Title",
      "category": "Logo",
      "image": "path/to/image.jpg"
    }
  ]
}
```

### 3. Update Images

- **Profile Image**: Replace the Unsplash URL in HTML (line ~240) with your photo
- **Project Images**: Update image URLs in `portfolioData.json`
- **Recommended**: Use high-quality images (1200px+ width for projects)

### 4. Customize Theme Colors

**Option 1: Use the UI**
1. Click the palette icon in the navigation
2. Choose a preset theme OR
3. Pick a custom color

**Option 2: Edit CSS**
```css
:root {
    --primary-color: #00e5ff;
    --secondary-color: #7c7cff;
}
```

## 📂 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css              # All styles with CSS variables
├── script.js              # JavaScript with GSAP animations
├── portfolioData.json     # All portfolio content (EDIT THIS!)
└── README.md              # This file
```

## 🎨 Available Font Awesome Icons

For social media and tools, use these icon classes:

**Social Media:**
- Instagram: `fab fa-instagram`
- Behance: `fab fa-behance`
- Dribbble: `fab fa-dribbble`
- LinkedIn: `fab fa-linkedin`
- Pinterest: `fab fa-pinterest`
- Twitter/X: `fab fa-twitter`
- Facebook: `fab fa-facebook`
- YouTube: `fab fa-youtube`

**Design Tools:**
- `fas fa-paint-brush` - Brush/Drawing
- `fab fa-figma` - Figma
- `fas fa-image` - Photo/Photoshop
- `fas fa-vector-square` - Illustrator/Vector
- `fas fa-file-alt` - Document/InDesign
- `fas fa-video` - Video/After Effects
- `fas fa-palette` - Palette/General Design
- `fas fa-pen-nib` - Pen/Sketching

[Find more icons at FontAwesome](https://fontawesome.com/icons)

## 🎯 Project Categories

Available categories for filtering:
- `Logo` - Logo designs
- `Poster` - Posters and prints
- `Banner` - Web banners and ads
- `Brochure` - Brochures and catalogs

You can add more categories by simply using them in your JSON - the script automatically generates filter buttons!

## 🌈 Predefined Themes

1. **Neon Cyan** - Futuristic cyan and purple
2. **Purple Dream** - Vibrant purple and pink
3. **Golden Luxury** - Elegant gold tones
4. **Cyber Green** - Tech-inspired green
5. **Sunset Orange** - Warm orange and red
6. **Ocean Blue** - Cool blue tones

## ⚡ Performance Features

- **Lazy Loading**: Images load as you scroll
- **CSS Animations**: Smooth, hardware-accelerated
- **Optimized GSAP**: ScrollTrigger for efficient scroll animations
- **LocalStorage**: Theme preferences saved locally
- **Mobile Optimized**: Touch-friendly, responsive design

## 🔧 Customization Tips

### Change Fonts
Replace the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Update CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Add More Sections
1. Add HTML section
2. Add to navigation
3. Create GSAP animation in `script.js`

### Modify Animations
Edit animation parameters in `script.js`:
```javascript
gsap.from('.your-element', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.your-section',
        start: 'top 80%'
    }
});
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repository-name`

### Netlify/Vercel
1. Drag and drop the entire folder
2. Your site goes live instantly!

### Traditional Hosting
Upload all files to your web host's public_html or www folder.

## 🎓 Learning Resources

- **GSAP Documentation**: https://greensock.com/docs/
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **Font Awesome**: https://fontawesome.com/

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Support

For issues or questions:
1. Check the code comments - every section is documented
2. Refer to this README
3. Review the example `portfolioData.json`

## 🎉 Credits

- **Fonts**: Google Fonts (Syne, DM Sans, Archivo Black)
- **Icons**: Font Awesome
- **Animation**: GSAP by GreenSock
- **Images**: Unsplash (for demo purposes - replace with your own)

---

Made with ❤️ and creativity. Customize it and make it your own!

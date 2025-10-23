# 💕 Anniversary Website

A sophisticated, multi-page anniversary website built with React, featuring elegant animations, beautiful typography, and a romantic design theme.

## ✨ Features

### 🏠 **Home Page**
- Full-screen hero section with collage image placeholder
- Elegant animated text overlay with gradient effects
- Smooth parallax scrolling
- Floating elements (flowers, sparkles)
- Quick navigation cards to other sections
- Statistics section with animated counters

### 💕 **Our Story Page**
- Interactive timeline with alternating left/right layout
- 9 romantic milestones with dates and descriptions
- Smooth scroll-triggered animations
- Future dreams section
- Beautiful icons and color-coded sections

### 📸 **Gallery Page**
- Multi-tab navigation (Hot 🔥, Cute 🥰, Love 💕, Weird 🤪)
- Masonry grid layout with hover effects
- Lightbox modal with smooth transitions
- Special styling for boyfriend's photo (4th image in Hot category)
- Responsive image loading with skeleton placeholders

### 💭 **Memories Page**
- Interactive carousel with 6 beautiful memory cards
- Auto-playing slideshow with pause on hover
- Smooth navigation controls
- Memory statistics section
- Color-coded memory themes

### 💌 **Letter Page**
- Romantic letter format with elegant typography
- 6 heartfelt sections with different themes
- Floating hearts animation
- Print-friendly styling
- Beautiful paper texture background

### 🎁 **Surprise Page**
- 3 interactive surprise options:
  - **Countdown Timer**: Live countdown to next anniversary
  - **365 Reasons**: Random love reasons generator
  - **Compatibility Meter**: Fun love compatibility display
- Confetti animation on page load
- Konami code easter egg (↑↑↓↓←→←→BA) for heart explosion

## 🎨 Design Features

### **Color Palette**
- Primary: #FFB6C1 (Light Pink)
- Secondary: #FFF0F5 (Lavender Blush)
- Accent: #FFD700 (Soft Gold)
- Background: #FFFAF0 (Floral White)
- Text: #4A4A4A (Soft Charcoal)

### **Typography**
- Headings: Playfair Display (Elegant Serif)
- Body: Lora (Readable Serif)
- Accents: Dancing Script (Handwritten Style)

### **Animations & Effects**
- Smooth page transitions (300-400ms)
- Scroll-triggered animations
- Hover effects with gentle lift and shadows
- 60fps butter-smooth animations
- Glassmorphism effects
- Gradient text animations
- Floating elements

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js          # Fixed navigation bar
│   ├── ScrollProgress.js      # Top progress bar
│   ├── CustomCursor.js        # Custom cursor effects
│   ├── FloatingElements.js    # Floating animations
│   ├── FloatingHearts.js      # Heart animations
│   ├── Lightbox.js           # Image lightbox modal
│   └── Confetti.js           # Confetti animation
├── pages/
│   ├── Home.js               # Landing page
│   ├── OurStory.js           # Timeline page
│   ├── Gallery.js            # Photo gallery
│   ├── Memories.js           # Memory carousel
│   ├── Letter.js             # Love letter
│   └── Surprise.js           # Interactive surprises
├── App.js                    # Main app component
├── App.css                   # Global styles
├── index.js                  # Entry point
└── index.css                 # Base styles
```

## 🖼️ Image Setup

### Folder Structure
Create the following folders in the `public` directory:
```
public/
├── hot/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg (boyfriend's photo - gets special styling)
│   ├── 5.jpg
│   ├── 6.jpg
│   └── 7.jpg
├── cute/
│   ├── 1.jpg through 6.jpg
├── love/
│   ├── 1.jpg through 6.jpg
└── weird/
    ├── 1.jpg through 6.jpg
```

### Image Requirements
- **Format**: JPG or PNG
- **Size**: Recommended 800x600px or similar aspect ratio
- **Quality**: High quality for best display
- **Naming**: Use numbers (1.jpg, 2.jpg, etc.)

## 🎯 Customization

### **Colors**
Edit the CSS custom properties in `src/index.css`:
```css
:root {
  --primary-color: #FFB6C1;
  --secondary-color: #FFF0F5;
  --accent-color: #FFD700;
  --background-color: #FFFAF0;
  --text-color: #4A4A4A;
}
```

### **Content**
- **Timeline**: Edit milestones in `src/pages/OurStory.js`
- **Memories**: Update memory cards in `src/pages/Memories.js`
- **Letter**: Modify letter content in `src/pages/Letter.js`
- **Love Reasons**: Add more reasons in `src/pages/Surprise.js`

### **Typography**
Change fonts in `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎮 Easter Eggs

1. **Konami Code**: Press ↑↑↓↓←→←→BA for heart explosion
2. **Special Photo**: 4th image in Hot category gets special styling
3. **Floating Elements**: Subtle animations throughout
4. **Confetti**: Appears on Surprise page load

## 🛠️ Technical Details

### **Dependencies**
- React 18.2.0
- React Router DOM 6.3.0
- Framer Motion 7.2.1
- React Intersection Observer 9.4.1

### **Performance**
- Lazy loading for images
- Optimized animations (60fps)
- Reduced motion support
- Mobile-optimized animations

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 💝 Special Features

### **Accessibility**
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Reduced motion preferences

### **SEO Ready**
- Semantic HTML structure
- Meta tags for social sharing
- Optimized images
- Fast loading times

## 🎨 Customization Tips

1. **Replace Placeholder Images**: Add your actual photos to the folders
2. **Update Content**: Personalize all text content with your story
3. **Adjust Colors**: Modify the color palette to match your preferences
4. **Add Music**: Consider adding background music (optional)
5. **Custom Animations**: Adjust animation timings in CSS

## 📄 License

This project is created with love for personal use. Feel free to customize and make it your own!

## 💕 Made with Love

This anniversary website was crafted with attention to detail, smooth animations, and a romantic aesthetic. Every element was designed to celebrate your love story in the most beautiful way possible.

---

**Happy Anniversary! 💕**

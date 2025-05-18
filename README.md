# Candy Couture Vintage - Whatnot Reseller Page

A cute Y2K-themed GitHub Pages site for your Whatnot reseller business. This page serves as a link tree to connect your customers with all your social media and shopping platforms.

## Features

- 🎀 Y2K-inspired design with cute animations
- 📱 Mobile-responsive layout
- 🔗 Easy-to-customize social media links
- ✨ Sparkle effects and custom cursor
- 🎨 Customizable colors and fonts

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Customization

### Profile Image

Replace the `public/profile.jpg` file with your own profile picture.

### Social Links

Edit the links in `src/App.tsx` to point to your social media profiles:

- Whatnot store
- Instagram
- TikTok
- WhatsApp

### Colors and Theme

Modify the theme object in `src/App.tsx` to change colors and fonts:

```typescript
const theme = {
  colors: {
    primary: '#FF69B4', // Hot pink
    secondary: '#00FFFF', // Cyan
    background: '#FFE4E1', // Misty rose
    text: '#4B0082', // Indigo
    accent: '#FFD700', // Gold
  },
  fonts: {
    main: "'Comic Sans MS', cursive",
    title: "'Impact', fantasy",
  },
}
```

## Deployment

1. Push your changes to GitHub
2. Enable GitHub Pages in your repository settings
3. Select the branch you want to deploy (usually `main` or `gh-pages`)

## License

MIT License - feel free to use this template for your own Whatnot reseller page!

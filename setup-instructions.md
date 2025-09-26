# Quick Setup Guide

## 🚀 Getting Started Fast

### Step 1: Prerequisites 
- Node.js 18+ installed
- Git installed

### Step 2: Get Your Mapbox Token
1. Go to [mapbox.com](https://mapbox.com) 
2. Sign up for a free account
3. Copy your map token (starts with `pk.ey...`)

### Step 3: Run These Commands
```bash
# Install dependencies
npm install

# Set up environment file
echo "NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here" > .env.local

# Start the development server
npm run dev
```

### Step 4: Open Your Browser
Navigate to `http://localhost:3000` to see your digital billboard events app!

## 💡 Features You'll See

🗺️ **Interactive Map with Events:**
- Click blue/orange markers to see event details
- Browse different event categories
- Explore geographic locations

📋 **Event Management:**
- RSVP system with form validation
- Event capacity tracking
- Category-based organization

🚦 **Digital Billboards:**
- Featured announcements with priority
- Eye-catching event promotions
- Call-to-action integration

## 📱 Usage Overview

1. **Map Navigation**: Use mouse/touch to pan and zoom
2. **Find Events**: Click markers on the map for details
3. **RSVP Process**: Complete the registration form
4. **Billboard Views**: Click orange markers for featured content

## 🔧 Configuration

### Adding Your Own Events
Edit `data/mockData.ts` to customize:
- Event titles and descriptions
- Geographic locations
- Event categories
- Pricing and capacity

### Map Styling  
Customize the map appearance with different Mapbox styles:
- `streets-v12` (current)
- `light-v11` (business)
- `dark-v11` (night mode)

Happy coding! 🎉
# Digital Billboard Events App

A modern event planning and networking application with an interactive map interface featuring digital billboard-style event displays.

## Features

🗺️ **Interactive Map Interface**
- Real-time map showing event locations
- Custom markers for different event categories
- Drag-to-explore navigation
- Location search functionality

📋 **Event Management**
- Rich event details with images and descriptions
- RSVP system with attendance tracking
- Category-based organization (Social, Professional, Educational, Cultural, Sports)
- Real-time payment and capacity tracking

📺 **Digital Billboard System**
- Eye-catching billboard displays for featured events
- Priority-based visibility with animations
- Call-to-action integration
- Automatic expiry dates

🎨 **Modern UI/UX**
- Responsive design for all devices
- Smooth animations and transitions
- Real-time status indicators
- Global search and filtering

## Getting Started

### Prerequisites
- Node.js 18+ 
- A free [Mapbox](https://mapbox.com) account

### Installation

1. **Clone and install:**
   ```bash
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env.local
   ```
   
   Get your Mapbox token at [mapbox.com](https://mapbox.com) and add it:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Data Structure

The app uses mock data with realistic event examples:
- **Events:** Professional mixers, art gallery openings, community workshops
- **Billboards:** Featured events with priority-based visibility
- **Categories:** Social, Professional, Educational, Cultural, Sports

## Development

### Project Structure
```
├── app/
│   ├── layout.tsx          # App layout and providers
│   └── page.tsx           # Main application page
├── components/
│   ├── MapInterface.tsx   # Core map with event markers
│   ├── EventPopup.tsx     # Event details popup
│   ├── BillboardPopup.tsx # Billboard display popup
│   └── LocationSearch.tsx # Location search component
├── types/
│   └── index.ts           # TypeScript interfaces
├── data/
│   └── mockData.ts        # Sample events and billboards
└── ...
```

### Technologies Used
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Mapbox GL JS** - Interactive maps
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Key Features Implementation
- **Event markers** with category-based colors
- **Billboard detection** with enhanced visual prominence
- **Real-time RSVP** system
- **Search functionality** with location detection
- **Responsive popups** with smooth animations

## Usage

1. **Explore the Map**: Use the navigation to zoom and pan around the city
2. **Search Locations**: Use the search bar to jump to specific areas
3. **Click Event Markers**: View detailed event information
4. **RSVP to Events**: Register for events you want to attend
5. **Check Billboards**: Look for priority announcements and featured events

## Customization

### Adding New Events
Edit `data/mockData.ts` to add new event entries:

```typescript
const newEvent: Event = {
  id: 'unique-id',
  title: 'Event Title',
  description: 'Detailed description...',
  startDate: '2024-12-01T18:00:00Z',
  endDate: '2024-12-01T22:00:00Z',
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    address: '123 Main St, New York, NY'
  },
  category: 'professional', // or 'social', 'educational', 'cultural', 'sports'
  capacity: 100,
  price: 0, // 0 for free events
  // ... other properties
};
```

### Styling Events
Category colors are defined in the marker styling:
- Professional: Green 🌿
- Cultural: Orange 🧡
- Educational: Purple 💜
- Social: Blue 💙
- Sports: Red ❤️

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use for your own event platforms!
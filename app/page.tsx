'use client';

import { MapInterface } from '../components/MapInterface';
import { mockEvents, mockBillboards } from '../data/mockData';
import { Event } from '../types';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('your-mapbox-token-here');

  useEffect(() => {
    // In a real app, you'd get this from environment variables
    // For this demo, user needs to provide their own Mapbox token
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; 
    if (token) {
      setMapboxToken(token);
    }
  }, []);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    console.log('Event clicked:', event.title);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Digital Billboard Events</h1>
          <p className="text-blue-100 mt-1">
            Discover and join amazing events in your area
          </p>
        </div>
      </div>

      {/* Main Map Interface */}
      <div className="flex-1 relative">
        {mapboxToken === 'your-mapbox-token-here' ? (
          <div className="h-full flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🤔 Mapbox Token Required
              </h2>
              <p className="text-gray-600 mb-4">
                To run this app, you'll need to add your Mapbox token:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg text-left">
                <p className="text-sm font-mono text-gray-800">
                  1. Get a free token at <a href="https://mapbox.com" target="_blank" className="text-blue-600 hover:underline">mapbox.com</a>
                </p>
                <p className="text-sm font-mono text-gray-800 mt-1">
                  2. Add NEXT_PUBLIC_MAPBOX_TOKEN=your_token to .env.local
                </p>
                <p className="text-sm font-mono text-gray-800 mt-1">
                  3. Restart this app
                </p>
              </div>
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  For now, just preview the components...
                </summary>
                <div className="mt-2 space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900">🗺️ Sample Map (Demo Mode)</h3>
                    <p className="text-blue-800 text-sm mt-1">
                      With Mapbox token, you'll see an interactive map with event markers and digital billboards.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h3 className="font-medium text-orange-900">📋 Current Demo Events</h3>
                    <div className="space-y-2 mt-2">
                      {mockEvents.map(event => (
                        <div key={event.id} className="text-left text-orange-800 text-sm">
                          • {event.title} ({event.category})
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        ) : (
          <MapInterface
            events={mockEvents}
            billboards={mockBillboards}
            onEventClick={handleEventClick}
            mapboxToken={mapboxToken}
          />
        )}
      </div>

      {/* Selected Event Info (below map) */}
      {selectedEvent && (
        <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {selectedEvent.title}
                </h2>
                <p className="text-gray-600">
                  {new Date(selectedEvent.startDate).toLocaleDateString()} • {selectedEvent.location.address}
                </p>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedEvent.category === 'professional' ? 'bg-green-100 text-green-800' :
                  selectedEvent.category === 'cultural' ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {selectedEvent.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  ${selectedEvent.price || 'FREE'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
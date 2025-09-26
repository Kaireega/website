'use client';

import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Event, Billboard } from '../types';
import { EventPopup } from './EventPopup';
import { BillboardPopup } from './BillboardPopup';
import { LocationSearch } from './LocationSearch';

interface MapInterfaceProps {
  events: Event[];
  billboards: Billboard[];
  onEventClick?: (event: Event) => void;
  mapboxToken: string;
}

export function MapInterface({ events, billboards, onEventClick, mapboxToken }: MapInterfaceProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedBillboard, setSelectedBillboard] = useState<Billboard | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapboxToken === 'your-mapbox-token-here') return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.0060, 40.7128], // New York City
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // Add markers for events
    events.forEach(event => {
      const marker = new mapboxgl.Marker({
        color: getEventMarkerColor(event.category),
        scale: 0.8
      })
        .setLngLat([event.location.longitude, event.location.latitude])
        .addTo(map.current!)
        .setPopup(
          new mapboxgl.Popup({
            offset: 25,
            anchor: 'bottom'
          }).setHTML('<div style="width: 300px;">Loading...</div>')
        );

      marker.getElement().addEventListener('click', () => {
        setSelectedEvent(event);
        setSelectedBillboard(null);
        if (onEventClick) onEventClick(event);
      });

      markers.current.push(marker);
    });

    // Add billboard markers
    billboards
      .filter(b => b.isActive)
      .forEach(billboard => {
        // Find the target event to get location
        const targetEvent = events.find(e => e.id === billboard.targetEventId);
        if (!targetEvent) return;

        const billboardMarker = new mapboxgl.Marker({
          color: '#FF6B35',
          scale: 1.2,
          rotation: 15 // Slight rotation for billboard effect
        })
          .setLngLat([targetEvent.location.longitude, targetEvent.location.latitude])
          .addTo(map.current!)
          .setPopup(
            new mapboxgl.Popup({
              offset: 25,
              anchor: 'bottom'
            }).setHTML('<div style="width: 400px;">Loading billboard...</div>')
          );

        billboardMarker.getElement().addEventListener('click', () => {
          setSelectedBillboard(billboard);
          setSelectedEvent(null);
        });

        markers.current.push(billboardMarker);
      });

    return () => {
      markers.current.forEach(marker => marker.remove());
    };
  }, [events, billboards, mapboxToken, onEventClick]);

  const getEventMarkerColor = (category: string): string => {
    const colors = {
      'social': '#3B82F6',
      'professional': '#10B981',
      'educational': '#8B5CF6',
      'cultural': '#F59E0B',
      'sports': '#EF4444'
    };
    return colors[category as keyof typeof colors] || '#6B7280';
  };

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Location Search Overlay */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <LocationSearch />
      </div>

      {/* Selected Event Popup */}
      {selectedEvent && (
        <div className="absolute bottom-4 left-4 z-10">
          <EventPopup 
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onRsvpClick={() => {
              // Handle RSVP logic
              console.log('RSVP clicked for event:', selectedEvent.id);
            }}
          />
        </div>
      )}

      {/* Selected Billboard Popup */}
      {selectedBillboard && (
        <div className="absolute bottom-4 right-4 z-10">
          <BillboardPopup 
            billboard={selectedBillboard}
            onClose={() => setSelectedBillboard(null)}
            onActionClick={(eventId) => {
              const event = events.find(e => e.id === eventId);
              if (event) {
                setSelectedBillboard(null);
                setSelectedEvent(event);
                if (onEventClick) onEventClick(event);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Event } from '../types';
import { format } from 'date-fns';
import { CalendarDays, MapPin, Users, X, Clock } from 'lucide-react';
import { RSVPSystem } from './RSVPSystem';

interface EventPopupProps {
  event: Event;
  onClose: () => void;
  onRsvpClick: () => void;
}

export function EventPopup({ event, onClose, onRsvpClick }: EventPopupProps) {
  const [showRSVP, setShowRSVP] = useState(false);
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  
  const getCategoryColor = (category: string) => {
    const colors = {
      'social': 'bg-blue-100 text-blue-800',
      'professional': 'bg-green-100 text-green-800',
      'educational': 'bg-purple-100 text-purple-800',
      'cultural': 'bg-orange-100 text-orange-800',
      'sports': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'upcoming': 'bg-green-500',
      'live': 'bg-red-500 animate-pulse',
      'ended': 'bg-gray-500',
      'cancelled': 'bg-red-600'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  if (showRSVP) {
    return (
      <RSVPSystem 
        event={event}
        onRsvpConfirmed={(eventId) => {
          console.log('RSVP confirmed for:', eventId);
          // You could update the global state or trigger a refresh here
          setShowRSVP(false);
        }}
        onClose={() => setShowRSVP(false)}
      />
    );
  }

  return (
    <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 w-80 animate-slide-up overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-lg transition-all"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Event Image/Banner */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        {event.flyerImage ? (
          <img
            src={event.flyerImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white text-4xl font-bold">
            {event.title.charAt(0)}
          </div>
        )}
        
        {/* Status indicator */}
        <div className={`absolute top-3 left-3 ${getStatusColor(event.status)} w-3 h-3 rounded-full`} />
        
        {/* Category badge */}
        <div className="absolute bottom-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
            {event.category.replace('_', ' ').toUpperCase()}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-4 space-y-4">
        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
        </div>

        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CalendarDays className="h-4 w-4" />
            <span className="font-medium">Starts:</span>
            <span>{format(startDate, 'MMM d, yyyy p')}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Duration:</span>
            <span>{Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60))} hours</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{event.location.address}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{event.rsvpCount} RSVPs</span>
            <span className="text-gray-400">•</span>
            <span>Capacity: {event.capacity}</span>
          </div>
        </div>

        {/* Tags */}
        {event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {event.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Host Info */}
        {event.host.organization && (
          <div className="text-sm text-gray-600">
            <span className="font-medium">Hosted by {event.host.name}</span>
            {event.host.organization && (
              <span className="text-gray-500">, {event.host.organization}</span>
            )}
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <div className="text-lg font-bold text-gray-900">
            {event.price === 0 ? 'FREE' : `$${event.price}`}
          </div>
          
          <button
            onClick={() => setShowRSVP(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {event.isRsvpRequired ? 'RSVP Now' : 'More Info'}
          </button>
        </div>
      </div>
    </div>
  );
}
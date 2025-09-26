'use client';

import React from 'react';
import { Billboard } from '../types';
import { ExternalLink, X } from 'lucide-react';

interface BillboardPopupProps {
  billboard: Billboard;
  onClose: () => void;
  onActionClick: (eventId: string) => void;
}

export function BillboardPopup({ billboard, onClose, onActionClick }: BillboardPopupProps) {
  const getPriorityStyle = (priority: string) => {
    const styles = {
      'high': 'bg-red-500 border-red-500 text-white animate-pulse-slow',
      'medium': 'bg-yellow-500 border-yellow-500 text-white',
      'low': 'bg-blue-500 border-blue-500 text-white'
    };
    return styles[priority as keyof typeof styles] || styles.low;
  };

  const handleActionClick = () => {
    if (billboard.targetEventId) {
      onActionClick(billboard.targetEventId);
    } else if (billboard.link) {
      window.open(billboard.link, '_blank');
    }
  };

  return (
    <div className={`relative border-2 rounded-xl overflow-hidden w-80 ${getPriorityStyle(billboard.priority)} shadow-2xl`}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 rounded-full p-1 transition-colors"
      >
        <X className="h-4 w-4 text-white" />
      </button>

      {/* Billboard Image/Content */}
      <div className="relative">
        {billboard.image ? (
          <div className="relative h-48">
            <img
              src={billboard.image}
              alt={billboard.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-current to-transparent opacity-80" />
        )}

        {/* Billboard Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            {/* Priority Badge */}
            <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold mb-4 ${getPriorityStyle(billboard.priority)}`}>
              {billboard.priority.toUpperCase()} PRIORITY
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{billboard.title}</h3>
            
            {/* Content */}
            <p className="text-sm leading-relaxed drop-shadow-md">{billboard.content}</p>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <button
              onClick={handleActionClick}
              className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 px-4 py-3 rounded-lg font-medium transition-colors shadow-lg"
            >
              <span>{billboard.callToAction}</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Expiry time if set */}
      {billboard.expiresAt && (
        <div className="px-4 py-2 bg-black/50 text-white text-xs text-center">
          Expires: {new Date(billboard.expiresAt).toLocaleDateString()}
        </div>
      )}
    </div>
  );
}
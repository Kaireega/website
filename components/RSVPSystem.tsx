'use client';

import React, { useState } from 'react';
import { Event } from '../types';
import { User, Check, Clock, X } from 'lucide-react';

interface RSVPSystemProps {
  event: Event;
  onRsvpConfirmed?: (eventId: string) => void;
  onClose?: () => void;
}

export function RSVPSystem({ event, onRsvpConfirmed, onClose }: RSVPSystemProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<'not_rsvp' | 'pending' | 'confirmed'>('not_rsvp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dietaryRestrictions: '',
    plusOneCount: 0
  });

  const handleRSVP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setRsvpStatus('confirmed');
    setIsProcessing(false);
    
    if (onRsvpConfirmed) {
      onRsvpConfirmed(event.id);
    }
  };

  const handleCancel = () => {
    setRsvpStatus('not_rsvp');
    setFormData({
      name: '',
      email: '',
      phone: '',
      dietaryRestrictions: '',
      plusOneCount: 0
    });
  };

  if (rsvpStatus === 'confirmed') {
    return (
      <div className="bg-white rounded-xl shadow-2xl border border-green-200 p-6 w-80">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            You're In! 🎉
          </h3>
          
          <p className="text-gray-600 mb-4">
            Confirmation sent to {formData.email}
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
            <div className="flex items-center gap-2 mb-1">
              <Check className="h-4 w-4" />
              <span className="font-medium">RSVP Confirmed</span>
            </div>
            <div className="text-green-700">
              Event: {event.title}
            </div>
            <div className="text-green-700">
              Date: {new Date(event.startDate).toLocaleDateString()}
            </div>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">RSVP to Event</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Event preview */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <h4 className="font-medium text-gray-900">{event.title}</h4>
        <p className="text-sm text-gray-600 mt-1">
          {new Date(event.startDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
        <p className="text-sm text-gray-600">
          📍 {event.location.address}
        </p>
      </div>

      {/* RSVP Form */}
      <form onSubmit={handleRSVP} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Optional phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plus-One Count
          </label>
          <select
            value={formData.plusOneCount}
            onChange={(e) => setFormData({...formData, plusOneCount: parseInt(e.target.value)})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {[0, 1, 2, 3, 4, 5].map(count => (
              <option key={count} value={count}>
                {count === 0 ? 'Just myself' : `+${count} guests`}
              </option>
            ))}
          </select>
        </div>

        {event.category === 'professional' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dietary Restrictions
            </label>
            <input
              type="text"
              value={formData.dietaryRestrictions}
              onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any dietary restrictions?"
            />
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2 pt-4">
          <button
            type="submit"
            disabled={isProcessing}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Check className="h-4 w-4" />
                <span>Confirm RSVP</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Capacity info */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        {event.rsvpCount} of {event.capacity} people attending
        {event.capacity - event.rsvpCount < 10 && (
          <span className="text-orange-600 font-medium ml-1">(Limited spots!)</span>
        )}
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface LocationSearchProps {
  onLocationChange?: (lat: number, lng: number) => void;
}

export function LocationSearch({ onLocationChange }: LocationSearchProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;

    setIsSearching(true);
    
    // Mock geocoding - in a real app, use a geocoding service
    // For now, just log and simulate search
    console.log('Searching for:', searchValue);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      // Mock coordinates for NYC area
      const mockCoords = {
        'times square': { lat: 40.7580, lng: -73.9855 },
        'central park': { lat: 40.7829, lng: -73.9654 },
        'brooklyn bridge': { lat: 40.7061, lng: -73.9969 }
      };
      
      const normalizedSearch = searchValue.toLowerCase();
      const coord = mockCoords[normalizedSearch as keyof typeof mockCoords];
      
      if (coord && onLocationChange) {
        onLocationChange(coord.lat, coord.lng);
      }
    }, 1000);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4 max-w-md">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for a location..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSearching}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          {isSearching ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Searching...</span>
            </>
          ) : (
            <>
              <MapPin className="h-4 w-4" />
              <span>Go</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
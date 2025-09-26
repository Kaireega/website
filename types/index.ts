export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  flyerImage?: string;
  banner?: string;
  category: 'social' | 'professional' | 'educational' | 'cultural' | 'sports';
  capacity: number;
  price: number; // 0 for free events
  host: {
    name: string;
    profileImage?: string;
    organization?: string;
  };
  rsvpCount: number;
  isRsvpRequired: boolean;
  tags: string[];
  status: 'upcoming' | 'live' | 'ended' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface RSVP {
  id: string;
  eventId: string;
  userId: string;
  status: 'confirmed' | 'waiting' | 'cancelled';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  location?: {
    latitude: number;
    longitude: number;
    address: string;
  };
  interests: string[];
  joinedDate: string;
}

export interface Billboard {
  id: string;
  title: string;
  content: string;
  image?: string;
  callToAction: string;
  link?: string;
  targetEventId?: string;
  priority: 'high' | 'medium' | 'low';
  isActive: boolean;
  expiresAt?: string;
}
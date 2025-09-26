import { Event, Billboard } from '../types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Networking Mixer',
    description: 'Join us for an evening of networking with professionals from the tech industry. Free drinks and appetizers provided!',
    startDate: '2024-02-15T18:00:00Z',
    endDate: '2024-02-15T22:00:00Z',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      address: '123 Broadway, New York, NY 10012'
    },
    flyerImage: '/events/tech-mixer.jpg',
    category: 'professional',
    capacity: 100,
    price: 0,
    host: {
      name: 'TechMeet NYC',
      organization: 'Innovation Hub',
    },
    rsvpCount: 67,
    isRsvpRequired: true,
    tags: ['networking', 'technology', 'free'],
    status: 'upcoming',
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z'
  },
  {
    id: '2',
    title: 'Art Gallery Opening',
    description: 'Experience the latest contemporary art exhibition featuring emerging NYC artists.',
    startDate: '2024-02-20T19:00:00Z',
    endDate: '2024-02-20T23:00:00Z',
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
      address: '456 5th Avenue, New York, NY 10001'
    },
    category: 'cultural',
    capacity: 200,
    price: 25,
    host: {
      name: 'Barbara Chen',
      organization: 'NYC Art Center',
    },
    rsvpCount: 145,
    isRsvpRequired: true,
    tags: ['art', 'gallery', 'culture'],
    status: 'upcoming',
    createdAt: '2024-01-18T14:30:00Z',
    updatedAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    title: 'Community Garden Workshop',
    description: 'Learn sustainable gardening techniques and connect with your local community.',
    startDate: '2024-02-17T10:00:00Z',
    endDate: '2024-02-17T15:00:00Z',
    location: {
      latitude: 40.7831,
      longitude: -73.9712,
      address: '789 2nd Avenue, New York, NY 10003'
    },
    category: 'educational',
    capacity: 30,
    price: 0,
    host: {
      name: 'Green Thumbs Community',
    },
    rsvpCount: 18,
    isRsvpRequired: true,
    tags: ['community', 'gardening', 'sustainable'],
    status: 'upcoming',
    createdAt: '2024-01-25T09:15:00Z',
    updatedAt: '2024-01-25T09:15:00Z'
  }
];

export const mockBillboards: Billboard[] = [
  {
    id: 'b1',
    title: 'Featured Event',
    content: 'Don\'t miss the Tech Networking Mixer!',
    image: '/billboards/tech-feature.jpg',
    callToAction: 'RSVP Now',
    targetEventId: '1',
    priority: 'high',
    isActive: true,
    expiresAt: '2024-02-16T00:00:00Z'
  },
  {
    id: 'b2',
    title: 'Weekend Fun',
    content: 'Join our Community Garden Workshop',
    image: '/billboards/garden-workshop.jpg',
    callToAction: 'Learn More',
    targetEventId: '3',
    priority: 'medium',
    isActive: true,
    expiresAt: '2024-02-18T00:00:00Z'
  }
];
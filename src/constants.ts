export interface Attraction {
  id: string;
  name: string;
  category: 'Beach' | 'Historical' | 'Natural' | 'Park' | 'Museum';
  description: string;
  image: string;
  location: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: '1',
    name: 'RK Beach',
    category: 'Beach',
    description: 'The most popular beach in Vizag, known for its vibrant atmosphere and the Submarine Museum.',
    image: 'https://picsum.photos/seed/rkbeach/800/600',
    location: 'Beach Road',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Kailasagiri',
    category: 'Park',
    description: 'A hilltop park offering panoramic views of the city and the sea, accessible by ropeway.',
    image: 'https://picsum.photos/seed/kailasagiri/800/600',
    location: 'Hilltop',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Araku Valley',
    category: 'Natural',
    description: 'A breathtaking hill station known for its coffee plantations and pleasant climate.',
    image: 'https://picsum.photos/seed/araku/800/600',
    location: '114km from Vizag',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Borra Caves',
    category: 'Natural',
    description: 'Million-year-old stalactite and stalagmite formations in the Ananthagiri hills.',
    image: 'https://picsum.photos/seed/borra/800/600',
    location: 'Ananthagiri Hills',
    rating: 4.8
  },
  {
    id: '5',
    name: 'Simhachalam Temple',
    category: 'Historical',
    description: 'An ancient temple dedicated to Lord Narasimha, famous for its architectural beauty.',
    image: 'https://picsum.photos/seed/simhachalam/800/600',
    location: 'Simhachalam Hill',
    rating: 4.9
  },
  {
    id: '6',
    name: 'INS Kursura Museum',
    category: 'Museum',
    description: 'A real submarine turned into a museum, showcasing the life of naval officers.',
    image: 'https://picsum.photos/seed/submarine/800/600',
    location: 'RK Beach Road',
    rating: 4.9
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Accommodation',
    description: 'Luxury hotels, beachfront resorts, and budget stays.',
    icon: 'Hotel',
    priceRange: '₹1,500 - ₹15,000'
  },
  {
    id: '2',
    title: 'Cab Services',
    description: 'Reliable airport pickups and full-day city tours.',
    icon: 'Car',
    priceRange: '₹1,200 - ₹5,000'
  },
  {
    id: '3',
    title: 'Tour Guides',
    description: 'Certified local guides for historical and cultural tours.',
    icon: 'Map',
    priceRange: '₹1,000 - ₹3,000'
  },
  {
    id: '4',
    title: 'Tour Packages',
    description: 'Customizable 1-3 day itineraries for families and couples.',
    icon: 'Package',
    priceRange: '₹3,000 - ₹25,000'
  }
];

// src/data/portfolio.ts
export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  services: string[];
  description: string;
  hero: {
    url: string;
    alt: string;
    blurDataUrl: string; // Base64 LQIP placeholder
  };
  category: 'living-room' | 'modular-kitchen' | 'bedroom';
  pdfBrochure?: string;
}

export const projects: Project[] = [
  {
    slug: 'modern-living-room-1',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    hero: {
      url: '/src/assets/living1.jpg',
      alt: 'Modern living room main view',
      blurDataUrl: ''
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'modern-living-room-2',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    hero: {
      url: '/src/assets/living2.jpg',
      alt: 'Modern living room main view',
      blurDataUrl: ''
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'modern-living-room-3',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    hero: {
      url: '/src/assets/living3.jpg',
      alt: 'Modern living room main view',
      blurDataUrl: ''
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'modern-living-room-4',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    hero: {
      url: '/src/assets/living4.jpg',
      alt: 'Modern living room main view',
      blurDataUrl: ''
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'luxury-kitchen',
    title: 'Smart Modular Kitchen',
    location: 'Udupi, India',
    year: 2024,
    services: ['Kitchen Design', 'Storage Solutions', 'Lighting Design'],
    description: 'A state-of-the-art modular kitchen featuring smart storage solutions, premium appliances, and ergonomic design. Perfect blend of functionality and aesthetic appeal.',
    hero: {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      alt: 'Luxury modular kitchen',
      blurDataUrl: ''
    },
    category: 'modular-kitchen'
  },
  {
    slug: 'master-bedroom-1',
    title: 'Serene Master Suite',
    location: 'Udupi, India',
    year: 2025,
    services: ['Bedroom Design', 'Custom Furniture', 'Lighting Design'],
    description: 'An elegant master bedroom designed to be your personal sanctuary. Featuring bespoke wooden paneling, soft ambient lighting, and a harmonious color palette that creates a tranquil atmosphere. Custom-built wardrobes offer ample storage while maintaining aesthetic appeal, and carefully selected furnishings ensure both comfort and sophistication.',
    hero: {
      url: '/src/assets/bedroom.jpg',
      alt: 'Luxury master bedroom',
      blurDataUrl: ''
    },
    category: 'bedroom'
  },
  {
    slug: 'master-bedroom-2',
    title: 'Serene Master Suite',
    location: 'Udupi, India',
    year: 2025,
    services: ['Bedroom Design', 'Custom Furniture', 'Lighting Design'],
    description: 'An elegant master bedroom designed to be your personal sanctuary. Featuring bespoke wooden paneling, soft ambient lighting, and a harmonious color palette that creates a tranquil atmosphere. Custom-built wardrobes offer ample storage while maintaining aesthetic appeal, and carefully selected furnishings ensure both comfort and sophistication.',
    hero: {
      url: '/src/assets/bedroom2.jpg',
      alt: 'Luxury master bedroom',
      blurDataUrl: ''
    },
    category: 'bedroom'
  },
  {
    slug: 'minimalist-bedroom',
    title: 'Elegant Guest Bedroom',
    location: 'Udupi, India',
    year: 2024,
    services: ['Interior Design', 'Space Optimization', 'Storage Solutions'],
    description: 'A refined guest bedroom that perfectly balances warmth and sophistication. The design features premium materials, thoughtful space planning, and integrated storage solutions that maintain a clutter-free environment. Carefully curated lighting and textures create an inviting retreat for guests, while the neutral palette with rich wood accents adds timeless elegance.',
    hero: {
      url: '/src/assets/bedroom3.jpg',
      alt: 'Elegant guest bedroom view',
      blurDataUrl: ''
    },
    category: 'bedroom'
  }
];
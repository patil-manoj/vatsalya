// src/data/portfolio.ts
export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  services: string[];
  description: string;
  images: {
    url: string;
    alt: string;
    aspectRatio: number;
  }[];
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
    slug: 'modern-living-room',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    images: [
      {
        url: '/src/assets/living1.jpg',
        alt: 'Living room with panoramic city views',
        aspectRatio: 16/9
      }
    ],
    hero: {
      url: '/src/assets/living1.jpg',
      alt: 'Modern living room main view',
      blurDataUrl: ''
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'modern-living-room',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    images: [
      {
        url: '/src/assets/living2.jpg',
        alt: 'Custom entertainment center',
        aspectRatio: 4/3
      }
    ],
    hero: {
      url: '/src/assets/living2.jpg',
      alt: 'Modern living room main view',
      blurDataUrl: ''
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'modern-living-room',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    images: [
      {
        url: '/src/assets/living3.jpg',
        alt: 'Seating area with accent lighting',
        aspectRatio: 3/2
      },
    ],
    hero: {
      url: '/src/assets/living3.jpg',
      alt: 'Modern living room main view',
      blurDataUrl: ''
    },
    category: 'living-room',
    pdfBrochure: '/assets/portfolio/modern-living-room/brochure.pdf'
  },
  {
    slug: 'modern-living-room',
    title: 'Contemporary Living Space',
    location: 'Udupi, India',
    year: 2025,
    services: ['Interior Design', 'Space Planning', 'Custom Furniture'],
    description: 'A luxurious living room design that combines modern aesthetics with comfort. Floor-to-ceiling windows frame panoramic city views while custom details accent rich wooden surfaces.',
    images: [
      {
        url: '/src/assets/living4.jpg',
        alt: 'Living room design details',
        aspectRatio: 3/2
      }
    ],
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
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
        alt: 'Modern kitchen with island',
        aspectRatio: 16/9
      },
      {
        url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2',
        alt: 'Built-in appliances',
        aspectRatio: 1/1
      },
      {
        url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163',
        alt: 'Storage solutions showcase',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      alt: 'Luxury modular kitchen',
      blurDataUrl: ''
    },
    category: 'modular-kitchen'
  },
  {
    slug: 'master-bedroom',
    title: 'Serene Master Suite',
    location: 'Udupi, India',
    year: 2025,
    services: ['Bedroom Design', 'Custom Furniture', 'Lighting Design'],
    description: 'An elegant master bedroom designed to be your personal sanctuary. Featuring bespoke wooden paneling, soft ambient lighting, and a harmonious color palette that creates a tranquil atmosphere. Custom-built wardrobes offer ample storage while maintaining aesthetic appeal, and carefully selected furnishings ensure both comfort and sophistication.',
    images: [
      {
        url: '/src/assets/bedroom.jpg',
        alt: 'Master bedroom overview with elegant design',
        aspectRatio: 16/9
      },
      {
        url: '/src/assets/bedroom2.jpg',
        alt: 'Custom wardrobe and storage solutions',
        aspectRatio: 4/3
      },
      {
        url: '/src/assets/bedroom3.jpg',
        alt: 'Bedroom details with ambient lighting',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: '/src/assets/bedroom.jpg',
      alt: 'Luxury master bedroom',
      blurDataUrl: ''
    },
    category: 'bedroom'
  },
  {
    slug: 'master-bedroom',
    title: 'Serene Master Suite',
    location: 'Udupi, India',
    year: 2025,
    services: ['Bedroom Design', 'Custom Furniture', 'Lighting Design'],
    description: 'An elegant master bedroom designed to be your personal sanctuary. Featuring bespoke wooden paneling, soft ambient lighting, and a harmonious color palette that creates a tranquil atmosphere. Custom-built wardrobes offer ample storage while maintaining aesthetic appeal, and carefully selected furnishings ensure both comfort and sophistication.',
    images: [
      {
        url: '/src/assets/bedroom.jpg',
        alt: 'Master bedroom overview with elegant design',
        aspectRatio: 16/9
      },
      {
        url: '/src/assets/bedroom2.jpg',
        alt: 'Custom wardrobe and storage solutions',
        aspectRatio: 4/3
      },
      {
        url: '/src/assets/bedroom3.jpg',
        alt: 'Bedroom details with ambient lighting',
        aspectRatio: 3/2
      }
    ],
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
    images: [
      {
        url: '/src/assets/bedroom2.jpg',
        alt: 'Guest bedroom with elegant furnishings',
        aspectRatio: 16/9
      },
      {
        url: '/src/assets/bedroom3.jpg',
        alt: 'Built-in storage and design details',
        aspectRatio: 4/3
      },
      {
        url: '/src/assets/bedroom.jpg',
        alt: 'Bedroom styling and decor',
        aspectRatio: 3/2
      }
    ],
    hero: {
      url: '/src/assets/bedroom3.jpg',
      alt: 'Elegant guest bedroom view',
      blurDataUrl: ''
    },
    category: 'bedroom'
  }
];
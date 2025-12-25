export interface ServiceData {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  'carpet-cleaning': {
    title: 'Carpet Cleaning',
    description: 'Professional deep cleaning for all types of carpets',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Deep steam cleaning',
      'Stain removal',
      'Odor elimination',
      'Fast drying technology',
      'Eco-friendly products',
      'All carpet types'
    ],
    benefits: [
      'Removes deep-seated dirt and allergens',
      'Extends carpet lifespan',
      'Improves indoor air quality',
      'Safe for children and pets',
      'Restores carpet appearance'
    ],
    process: [
      { step: 1, title: 'Inspection', description: 'We assess your carpet condition and identify problem areas' },
      { step: 2, title: 'Pre-treatment', description: 'Apply specialized solutions to tough stains and high-traffic areas' },
      { step: 3, title: 'Deep Cleaning', description: 'Use professional equipment for thorough steam cleaning' },
      { step: 4, title: 'Final Check', description: 'Inspect results and ensure your complete satisfaction' }
    ]
  },
  'sofa-mattresses': {
    title: 'Sofa & Mattresses',
    description: 'Remove dust mites, stains and allergens',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Dust mite elimination',
      'Deep fabric cleaning',
      'Stain treatment',
      'Odor removal',
      'Sanitization',
      'All fabric types'
    ],
    benefits: [
      'Healthier sleeping environment',
      'Removes allergens and bacteria',
      'Eliminates unpleasant odors',
      'Extends furniture lifespan',
      'Fresh and clean upholstery'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Check fabric type and identify specific cleaning needs' },
      { step: 2, title: 'Vacuuming', description: 'Remove loose dirt and dust particles' },
      { step: 3, title: 'Treatment', description: 'Apply cleaning solutions and extract dirt' },
      { step: 4, title: 'Sanitization', description: 'Apply anti-bacterial treatment for hygiene' }
    ]
  },
  'curtains-blinds': {
    title: 'Curtains & Blinds',
    description: 'Professional dust and allergen removal',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'On-site cleaning',
      'Delicate fabric care',
      'Dust removal',
      'Allergen elimination',
      'Crease-free results',
      'All blind types'
    ],
    benefits: [
      'No need to remove curtains',
      'Protects delicate fabrics',
      'Improves air quality',
      'Brightens your space',
      'Convenient service'
    ],
    process: [
      { step: 1, title: 'Preparation', description: 'Protect surrounding areas and assess material' },
      { step: 2, title: 'Cleaning', description: 'Carefully clean using appropriate methods' },
      { step: 3, title: 'Drying', description: 'Quick drying with professional equipment' },
      { step: 4, title: 'Finishing', description: 'Final touches and quality check' }
    ]
  },
  'deep-cleaning': {
    title: 'Deep Cleaning',
    description: 'Complete home sanitization service',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Complete home cleaning',
      'Hard-to-reach areas',
      'Kitchen deep clean',
      'Bathroom sanitization',
      'Window cleaning',
      'Floor treatment'
    ],
    benefits: [
      'Comprehensive cleaning solution',
      'Eliminates hidden dirt',
      'Healthier living environment',
      'Time-saving',
      'Professional results'
    ],
    process: [
      { step: 1, title: 'Planning', description: 'Discuss your needs and create cleaning plan' },
      { step: 2, title: 'Execution', description: 'Systematic cleaning of all areas' },
      { step: 3, title: 'Detail Work', description: 'Focus on overlooked and hard-to-reach spots' },
      { step: 4, title: 'Verification', description: 'Walk-through to ensure satisfaction' }
    ]
  },
  'air-conditioner': {
    title: 'Air Conditioner',
    description: 'Maintain air quality and efficiency',
    image: '/images/ac_cleaning.webp',
    features: [
      'Filter cleaning',
      'Coil treatment',
      'Drainage check',
      'Performance test',
      'Anti-bacterial spray',
      'All AC types'
    ],
    benefits: [
      'Better cooling efficiency',
      'Lower energy bills',
      'Cleaner air quality',
      'Prevents breakdowns',
      'Extends AC lifespan'
    ],
    process: [
      { step: 1, title: 'Inspection', description: 'Check AC condition and identify issues' },
      { step: 2, title: 'Disassembly', description: 'Carefully remove panels and filters' },
      { step: 3, title: 'Deep Clean', description: 'Clean all components thoroughly' },
      { step: 4, title: 'Testing', description: 'Reassemble and test performance' }
    ]
  },
  'regular-cleaning': {
    title: 'Regular Cleaning',
    description: 'Maintain cleanliness without hassle',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Flexible scheduling',
      'Weekly or bi-weekly service',
      'Eco-friendly products',
      'Professional team',
      'All cleaning supplies included',
      'Subscription discounts'
    ],
    benefits: [
      'Always clean home or office',
      'Save time and effort',
      'Consistent quality',
      'Reduce stress',
      'Healthier environment'
    ],
    process: [
      { step: 1, title: 'Organizing', description: 'Arrange items and organize spaces for efficient cleaning' },
      { step: 2, title: 'Dust Removal', description: 'Wipe all surfaces including furniture, shelves, and decorative items' },
      { step: 3, title: 'Vacuuming', description: 'Clean carpets, rugs, and upholstered furniture thoroughly' },
      { step: 4, title: 'Floor Care', description: 'Carefully sweep and mop all hard floors including tiles and laminate' },
      { step: 5, title: 'Bathroom & Kitchen', description: 'Clean sinks, sanitize surfaces, and disinfect high-touch areas' }
    ]
  }
};

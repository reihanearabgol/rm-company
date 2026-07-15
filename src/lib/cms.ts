export interface SiteContent {
  hero: {
    headline: string
    subheadline: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  contact: {
    phone: string
    email: string
    address: string
    city: string
  }
  footer: {
    copyright: string
    tagline: string
  }
  stats: {
    satisfaction: string
    projects: string
    years: string
    review: string
  }
  services: {
    id: string
    title: string
    description: string
  }[]
  faq: {
    id: string
    question: string
    answer: string
  }[]
  seo: {
    title: string
    description: string
  }
}

export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    headline: 'Where Space Becomes Art',
    subheadline: 'Luxury Renovation · Est. 2018',
    description: 'We shape timeless interiors through elegance and restraint — spaces designed for modern living.',
    ctaPrimary: 'Book Consultation',
    ctaSecondary: 'Discover Spaces',
  },
  contact: {
    phone: '+1 (647) 614-4437',
    email: 'shakeri.mojtaba.official@gmail.com',
    address: '135 Antibes Drive',
    city: 'North York',
  },
  footer: {
    copyright: '© 2024 R&M Company. All rights reserved.',
    tagline: 'Luxury Renovation · Toronto',
  },
  stats: {
    satisfaction: '98%',
    projects: '500+',
    years: '17',
    review: '5★',
  },
  services: [
    { id: '1', title: 'Kitchen Renovation', description: 'Complete kitchen transformations with premium materials and expert craftsmanship.' },
    { id: '2', title: 'Bathroom Remodeling', description: 'Luxurious bathroom renovations that blend form and function.' },
    { id: '3', title: 'Full Home Renovation', description: 'Comprehensive home transformations tailored to your vision.' },
    { id: '4', title: 'Custom Cabinetry', description: 'Bespoke cabinetry designed and built to perfection.' },
  ],
  faq: [
    { id: '1', question: 'How long does a typical renovation take?', answer: 'Most kitchen renovations take 4-8 weeks, bathroom 2-4 weeks, and full home renovations 3-6 months depending on scope.' },
    { id: '2', question: 'Do you provide free consultations?', answer: 'Yes, we offer complimentary initial consultations to understand your vision and provide accurate project estimates.' },
    { id: '3', question: 'What areas do you service?', answer: 'We primarily serve Toronto and the Greater Toronto Area, including North York, Scarborough, Etobicoke, and surrounding regions.' },
  ],
  seo: {
    title: 'R&M Company — Luxury Renovation',
    description: 'Award-winning luxury renovation and interior architecture in Toronto.',
  },
}

export const CMS_CONTENT_KEY = 'rm:cms:content'
export const CMS_DRAFT_KEY = 'rm:cms:draft'
export const CMS_HISTORY_KEY = 'rm:cms:history'

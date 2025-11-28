// Property data service
export const propertyService = {
  // Categorized featured properties
  getCategorizedProperties: () => ({
    'LUXURY APARTMENTS': [
      {
        id: 1,
        title: 'Modern 3BHK in City Center',
        description: 'Luxurious 3-bedroom apartment with modern amenities',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f7001c5d?w=600&h=400&fit=crop&q=80',
        beds: 3,
        baths: 2,
        price: '$850,000',
      },
      {
        id: 2,
        title: 'Sea-Facing 4BHK Penthouse',
        description: 'Premium penthouse with panoramic sea views',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80',
        beds: 4,
        baths: 3,
        price: '$2,500,000',
      },
      {
        id: 3,
        title: 'Gated Community 2BHK',
        description: 'Secure gated community with modern facilities',
        image: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=600&h=400&fit=crop&q=80',
        beds: 2,
        baths: 2,
        price: '$550,000',
      },
      {
        id: 4,
        title: 'Premium Studio Apartments',
        description: 'Compact yet luxurious studio for professionals',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop&q=80',
        beds: 1,
        baths: 1,
        price: '$350,000',
      },
    ],
    'COMMERCIAL SPACES': [
      {
        id: 5,
        title: 'Office Spaces in Business Districts',
        description: 'Prime office locations with modern infrastructure',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80',
        beds: 0,
        baths: 2,
        price: '$1,200,000',
      },
      {
        id: 6,
        title: 'Retail Shops in Malls',
        description: 'High-traffic retail spaces in premium malls',
        image: 'https://images.unsplash.com/photo-1460925895917-adf4e0c996f7?w=600&h=400&fit=crop&q=80',
        beds: 0,
        baths: 1,
        price: '$800,000',
      },
      {
        id: 7,
        title: 'Restaurant & Cafe Locations',
        description: 'Fully equipped spaces ready for restaurant setup',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop&q=80',
        beds: 0,
        baths: 2,
        price: '$650,000',
      },
      {
        id: 8,
        title: 'Warehouse & Storage Facilities',
        description: 'Large storage spaces for industrial use',
        image: 'https://images.unsplash.com/photo-1553531088-2cc6eecc475e?w=600&h=400&fit=crop&q=80',
        beds: 0,
        baths: 1,
        price: '$950,000',
      },
    ],
    'RESIDENTIAL HOMES': [
      {
        id: 9,
        title: 'Independent Villas',
        description: 'Spacious private villas with gardens',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f7001c5d?w=600&h=400&fit=crop&q=80',
        beds: 5,
        baths: 4,
        price: '$1,800,000',
      },
      {
        id: 10,
        title: 'Townhouses',
        description: 'Modern townhouses in prime locations',
        image: 'https://images.unsplash.com/photo-1505873242347-f86d427927c6?w=600&h=400&fit=crop&q=80',
        beds: 4,
        baths: 3,
        price: '$1,200,000',
      },
      {
        id: 11,
        title: 'Farmhouses',
        description: 'Peaceful farmhouses with land ownership',
        image: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=600&h=400&fit=crop&q=80',
        beds: 6,
        baths: 4,
        price: '$950,000',
      },
      {
        id: 12,
        title: 'Plot Investments',
        description: 'Prime plots for future development',
        image: 'https://images.unsplash.com/photo-1500382017468-7049fae79d71?w=600&h=400&fit=crop&q=80',
        beds: 0,
        baths: 0,
        price: '$400,000',
      },
    ],
  }),

  // Featured properties with detailed information
  getFeaturedProperties: () => [
    {
      id: 1,
      name: 'Luxury Penthouse',
      title: 'Modern Downtown Penthouse',
      price: '$2,500,000',
      beds: 4,
      baths: 3,
      location: 'Downtown Manhattan',
      address: '123 Park Ave, New York, NY 10022',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f7001c5d?w=800&h=500&fit=crop&q=80',
      description: 'Stunning penthouse with panoramic city views, modern architecture, and premium finishes throughout.',
      features: ['Smart Home Technology', 'Private Terrace', 'Concierge Service', 'Gym Access'],
      yearBuilt: 2020,
      squareFeet: 4500,
      propertyType: 'Penthouse',
      featured: true,
    }
  ],

  // All properties for grid display
  getAllProperties: () => [
    {
      id: 1,
      title: 'Modern Downtown Penthouse',
      price: '$2,500,000',
      location: 'New York, NY',
      beds: 4,
      baths: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f7001c5d?w=600&h=400&fit=crop&q=80',
      featured: true,
      squareFeet: 4500,
      yearBuilt: 2020,
    },
    {
      id: 2,
      title: 'Coastal Villa with Ocean View',
      price: '$1,800,000',
      location: 'Malibu, CA',
      beds: 5,
      baths: 4,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80',
      featured: false,
      squareFeet: 5200,
      yearBuilt: 2018,
    },
    {
      id: 3,
      title: 'Luxury Lakefront Estate',
      price: '$3,200,000',
      location: 'Lake Tahoe, NV',
      beds: 6,
      baths: 5,
      image: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=600&h=400&fit=crop&q=80',
      featured: true,
      squareFeet: 6800,
      yearBuilt: 2019,
    },
    {
      id: 4,
      title: 'Urban Loft in Historical District',
      price: '$1,200,000',
      location: 'Chicago, IL',
      beds: 3,
      baths: 2,
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop&q=80',
      featured: false,
      squareFeet: 2800,
      yearBuilt: 2015,
    },
  ],

  // Get property by ID
  getPropertyById: (id) => {
    const properties = propertyService.getAllProperties();
    return properties.find(p => p.id === id);
  },

  // Get featured properties only
  getFeaturedOnly: () => {
    return propertyService.getAllProperties().filter(p => p.featured);
  },

  // Search properties
  searchProperties: (query) => {
    const properties = propertyService.getAllProperties();
    return properties.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase())
    );
  },

  // Filter by price range
  filterByPrice: (min, max) => {
    return propertyService.getAllProperties().filter(p => {
      const price = parseInt(p.price.replace(/\D/g, ''));
      return price >= min && price <= max;
    });
  },

  // Filter by beds/baths
  filterByBedrooms: (beds) => {
    return propertyService.getAllProperties().filter(p => p.beds >= beds);
  },
};

export default propertyService;

// Projects data derived from work experience
export const projects = [
  {
    id: 1,
    title: 'Real-Time Communication Platform',
    description: 'Audio/video calling app with subscription system',
    longDescription:
      'Full-featured communication platform with real-time audio/video calls powered by Agora SDK. Includes secure subscription management with Stripe integration, push notifications, and user authentication.',
    image: '/images/projects/bhitech.jpg',
    technologies: ['Flutter', 'Agora SDK', 'Stripe', 'Firebase', 'Cloud Functions'],
    category: ['mobile', 'real-time', 'full-stack'],
    features: [
      'Real-time audio/video calls with high quality',
      'Secure subscription management and payment processing',
      'Push notifications for incoming calls',
      'User authentication and profile management',
      'Call history and analytics',
    ],
    company: 'B-Hitech',
  },
  {
    id: 2,
    title: 'Digital Advertising Platform',
    description: 'Campaign management dashboard with LED screen integration',
    longDescription:
      'Comprehensive digital advertising platform enabling businesses to create, manage, and monitor advertising campaigns. Features real-time updates to LED screens and integrated payment processing.',
    image: '/images/projects/byne.jpg',
    technologies: ['Next.js', 'Firebase', 'Stripe', 'REST APIs'],
    category: ['full-stack', 'saas'],
    features: [
      'Campaign creation and management dashboard',
      'Real-time LED screen content updates',
      'Payment gateway integration',
      'Analytics and reporting',
      'Multi-user access control',
    ],
    company: 'Byne Media',
  },
  {
    id: 3,
    title: 'No-Code Website Builder',
    description: 'Visual workflow automation and drag-and-drop UI builder',
    longDescription:
      'Innovative no-code platform allowing users to build websites and automate workflows without writing code. Features a visual drag-and-drop interface and powerful data management capabilities.',
    image: '/images/projects/xplicity.jpg',
    technologies: ['React', 'Python', 'PostgreSQL', 'REST APIs'],
    category: ['full-stack', 'saas'],
    features: [
      'Drag-and-drop website builder',
      'Visual workflow automation',
      'Data management module',
      'Template library',
      'Export and deployment options',
    ],
    company: 'Xplicity',
  },
  {
    id: 4,
    title: 'Smart Parking Management',
    description: 'Mobile app for real-time parking space availability',
    longDescription:
      'Smart parking management system helping users find and reserve parking spaces in real-time. Features live availability tracking and seamless booking experience.',
    image: '/images/projects/parking.jpg',
    technologies: ['Android Studio', 'Spring Boot', 'Java', 'REST APIs'],
    category: ['mobile'],
    features: [
      'Real-time parking space availability',
      'Interactive map interface',
      'Parking space reservation',
      'Payment integration',
      'Booking history',
    ],
    company: 'SUPMTI',
  },
];

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'full-stack', name: 'Full-Stack' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'real-time', name: 'Real-Time' },
  { id: 'saas', name: 'SaaS' },
];

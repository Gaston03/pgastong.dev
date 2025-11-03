// Projects data derived from work experience

export const projects = [
  {
    id: 1,
    title: "Real-Time Communication Platform",
    description: "Audio/video calling app with subscription system and real-time communication features",
    longDescription: "A comprehensive real-time communication platform featuring high-quality audio/video calls powered by Agora SDK. The application includes a secure subscription management system integrated with Stripe, enabling monetization strategies. Built with Flutter for cross-platform compatibility, the app provides seamless user experience with features like push notifications, user authentication, and cloud-based data synchronization through Firebase.",
    image: "/images/projects/bhitech.jpg",
    technologies: ["Flutter", "Agora SDK", "Stripe SDK", "Firebase", "Cloud Functions", "Dart"],
    category: ["mobile", "real-time", "full-stack"],
    features: [
      "Real-time audio/video calls with HD quality",
      "Secure subscription management with Stripe integration",
      "Push notifications for incoming calls and messages",
      "User authentication and profile management",
      "Cloud-based data synchronization",
      "Cross-platform support (iOS & Android)"
    ],
    company: "B-Hitech"
  },
  {
    id: 2,
    title: "Digital Advertising Platform",
    description: "Campaign management platform with payment integration and real-time LED screen updates",
    longDescription: "A sophisticated digital advertising platform that revolutionizes outdoor advertising management. The system features a comprehensive campaign management dashboard built with Next.js and React, allowing advertisers to create, monitor, and optimize their campaigns in real-time. The platform integrates Stripe for seamless payment processing and subscription management, while maintaining real-time communication with LED display screens for instant content updates. The responsive admin dashboard provides detailed analytics and monitoring capabilities for campaign performance.",
    image: "/images/projects/byne-media.jpg",
    technologies: ["Next.js", "React", "Firebase", "Stripe", "Tailwind CSS", "Node.js"],
    category: ["full-stack", "saas"],
    features: [
      "Campaign management dashboard with analytics",
      "Payment gateway integration with Stripe",
      "Real-time LED screen content updates",
      "Content management system for advertisements",
      "Responsive admin dashboard",
      "Campaign scheduling and automation",
      "Performance tracking and reporting"
    ],
    company: "Byne Media"
  },
  {
    id: 3,
    title: "No-Code Website Builder",
    description: "Visual workflow automation platform with drag-and-drop UI builder and data management",
    longDescription: "An innovative no-code platform that empowers non-technical users to build sophisticated websites and automate business workflows without writing code. The platform features a powerful drag-and-drop UI builder with real-time preview capabilities, allowing users to design and customize their websites visually. The visual workflow automation system enables users to create complex business processes through an intuitive interface. Built with React for the frontend and Python/Django for the backend, the platform includes a comprehensive data management module for handling dynamic content and API integrations.",
    image: "/images/projects/xplicity.jpg",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Redux", "Material-UI"],
    category: ["full-stack", "saas"],
    features: [
      "Drag-and-drop UI builder with real-time preview",
      "Visual workflow automation for business processes",
      "Comprehensive data management module",
      "API integration capabilities",
      "Template library for quick starts",
      "User-friendly interface for non-technical users",
      "Dynamic content management"
    ],
    company: "Xplicity"
  },
  {
    id: 4,
    title: "Smart Parking Management",
    description: "Mobile app for parking space management with real-time availability tracking",
    longDescription: "A smart parking management solution designed to simplify urban parking challenges. The Android mobile application provides real-time tracking of parking space availability, allowing users to find and reserve parking spots effortlessly. Built with Android Studio and Java, the app features an intuitive user interface for parking reservation and payment processing. The backend, powered by Spring Boot, manages parking operations and provides RESTful APIs for seamless communication. Integration with Google Maps API enables location-based services and navigation to reserved parking spots.",
    image: "/images/projects/smart-parking.jpg",
    technologies: ["Android Studio", "Java", "Spring Boot", "Firebase", "Google Maps API"],
    category: ["mobile", "full-stack"],
    features: [
      "Real-time parking space availability tracking",
      "Parking reservation system",
      "Integrated payment processing",
      "Location-based services with Google Maps",
      "Navigation to reserved parking spots",
      "User-friendly mobile interface",
      "Push notifications for reservations"
    ],
    company: "SUPMTI"
  }
];

// Filter categories for project filtering
export const projectCategories = [
  { id: "all", label: "filterAll" },
  { id: "full-stack", label: "filterFullStack" },
  { id: "mobile", label: "filterMobile" },
  { id: "real-time", label: "filterRealTime" },
  { id: "saas", label: "filterSaaS" }
];

export default projects;

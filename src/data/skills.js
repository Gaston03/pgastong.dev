// Skills data organized by category

export const skills = {
  frontend: [
    { 
      id: 1,
      name: "React", 
      icon: "/icons/react.svg", 
      proficiency: 90,
      experience: "2+ years"
    },
    { 
      id: 2,
      name: "Next.js", 
      icon: "/icons/nextjs.svg", 
      proficiency: 85,
      experience: "2+ years"
    },
    { 
      id: 3,
      name: "Flutter", 
      icon: "/icons/flutter.svg", 
      proficiency: 88,
      experience: "2+ years"
    },
    { 
      id: 4,
      name: "Tailwind CSS", 
      icon: "/icons/tailwind.svg", 
      proficiency: 92,
      experience: "2+ years"
    },
    { 
      id: 5,
      name: "JavaScript", 
      icon: "/icons/javascript.svg", 
      proficiency: 90,
      experience: "3+ years"
    },
    { 
      id: 6,
      name: "HTML/CSS", 
      icon: "/icons/html.svg", 
      proficiency: 95,
      experience: "3+ years"
    }
  ],
  backend: [
    { 
      id: 8,
      name: "Spring Boot", 
      icon: "/icons/spring.svg", 
      proficiency: 85,
      experience: "2+ years"
    },
    { 
      id: 9,
      name: "Python", 
      icon: "/icons/python.svg", 
      proficiency: 80,
      experience: "2+ years"
    },
    { 
      id: 12,
      name: "REST APIs", 
      icon: "/icons/api.svg", 
      proficiency: 88,
      experience: "2+ years"
    },
    { 
      id: 13,
      name: "GraphQL", 
      icon: "/icons/graphql.svg", 
      proficiency: 75,
      experience: "1+ years"
    }
  ],
  mobile: [
    { 
      id: 14,
      name: "Flutter", 
      icon: "/icons/flutter.svg", 
      proficiency: 88,
      experience: "2+ years"
    },
    { 
      id: 15,
      name: "Android Studio", 
      icon: "/icons/android.svg", 
      proficiency: 80,
      experience: "2+ years"
    },
    { 
      id: 16,
      name: "Java", 
      icon: "/icons/java.svg", 
      proficiency: 82,
      experience: "2+ years"
    },
    { 
      id: 17,
      name: "Dart", 
      icon: "/icons/dart.svg", 
      proficiency: 85,
      experience: "2+ years"
    }
  ],
  cloud: [
    { 
      id: 18,
      name: "Firebase", 
      icon: "/icons/firebase.svg", 
      proficiency: 90,
      experience: "2+ years"
    },
    { 
      id: 19,
      name: "Google Cloud", 
      icon: "/icons/gcp.svg", 
      proficiency: 75,
      experience: "1+ years"
    },
    { 
      id: 20,
      name: "PostgreSQL", 
      icon: "/icons/postgresql.svg", 
      proficiency: 82,
      experience: "2+ years"
    },
    { 
      id: 21,
      name: "Hasura", 
      icon: "/icons/hasura.svg", 
      proficiency: 70,
      experience: "1+ years"
    },
    { 
      id: 22,
      name: "Cloud Functions", 
      icon: "/icons/cloud-functions.svg", 
      proficiency: 80,
      experience: "2+ years"
    }
  ],
  tools: [
    { 
      id: 23,
      name: "Git", 
      icon: "/icons/git.svg", 
      proficiency: 90,
      experience: "3+ years"
    },
    { 
      id: 24,
      name: "Docker", 
      icon: "/icons/docker.svg", 
      proficiency: 75,
      experience: "1+ years"
    },
    { 
      id: 25,
      name: "Agora SDK", 
      icon: "/icons/agora.svg", 
      proficiency: 85,
      experience: "1+ years"
    },
    { 
      id: 26,
      name: "Stripe", 
      icon: "/icons/stripe.svg", 
      proficiency: 88,
      experience: "2+ years"
    },
    { 
      id: 27,
      name: "CI/CD", 
      icon: "/icons/cicd.svg", 
      proficiency: 78,
      experience: "2+ years"
    },
    { 
      id: 28,
      name: "Vite", 
      icon: "/icons/vite.svg", 
      proficiency: 85,
      experience: "2+ years"
    }
  ]
};

// Category metadata for display
export const categoryInfo = {
  frontend: {
    title: "Frontend Development",
    icon: "🎨",
    color: "#3B82F6",
    description: "Building responsive and interactive user interfaces"
  },
  backend: {
    title: "Backend Development",
    icon: "⚙️",
    color: "#8B5CF6",
    description: "Developing scalable server-side applications and APIs"
  },
  mobile: {
    title: "Mobile Development",
    icon: "📱",
    color: "#10B981",
    description: "Creating native and cross-platform mobile applications"
  },
  cloud: {
    title: "Cloud & Database",
    icon: "☁️",
    color: "#F59E0B",
    description: "Managing cloud infrastructure and data storage solutions"
  },
  tools: {
    title: "Tools & Technologies",
    icon: "🛠️",
    color: "#EF4444",
    description: "Development tools and integration platforms"
  }
};

export default skills;

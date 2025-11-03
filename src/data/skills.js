// Skills and technologies data
export const skills = {
  frontend: [
    { name: 'React', icon: '/icons/react.svg', level: 90 },
    { name: 'Next.js', icon: '/icons/nextjs.svg', level: 85 },
    { name: 'Flutter', icon: '/icons/flutter.svg', level: 88 },
    { name: 'HTML/CSS', icon: '/icons/html.svg', level: 92 },
    { name: 'JavaScript', icon: '/icons/javascript.svg', level: 90 },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', level: 92 },
  ],
  backend: [
    { name: 'Spring Boot', icon: '/icons/spring.svg', level: 85 },
    { name: 'Python', icon: '/icons/python.svg', level: 80 },
    { name: 'Node.js', icon: '/icons/nodejs.svg', level: 75 },
    { name: 'REST APIs', icon: '/icons/api.svg', level: 88 },
  ],
  mobile: [
    { name: 'Flutter', icon: '/icons/flutter.svg', level: 88 },
    { name: 'Android Studio', icon: '/icons/android.svg', level: 82 },
    { name: 'Firebase', icon: '/icons/firebase.svg', level: 85 },
  ],
  cloud: [
    { name: 'Firebase', icon: '/icons/firebase.svg', level: 85 },
    { name: 'Google Cloud', icon: '/icons/gcp.svg', level: 75 },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg', level: 80 },
    { name: 'Hasura', icon: '/icons/hasura.svg', level: 70 },
  ],
  tools: [
    { name: 'Git', icon: '/icons/git.svg', level: 90 },
    { name: 'Docker', icon: '/icons/docker.svg', level: 75 },
    { name: 'Agora SDK', icon: '/icons/agora.svg', level: 85 },
    { name: 'Stripe', icon: '/icons/stripe.svg', level: 80 },
    { name: 'CI/CD', icon: '/icons/cicd.svg', level: 75 },
  ],
};

export const skillCategories = [
  { id: 'frontend', name: 'Frontend Development', skills: skills.frontend },
  { id: 'backend', name: 'Backend Development', skills: skills.backend },
  { id: 'mobile', name: 'Mobile Development', skills: skills.mobile },
  { id: 'cloud', name: 'Cloud & Database', skills: skills.cloud },
  { id: 'tools', name: 'Tools & Others', skills: skills.tools },
];

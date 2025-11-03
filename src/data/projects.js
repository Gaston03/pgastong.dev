// Projects data derived from work experience

export const projects = [
  {
    id: 1,
    projectKey: "rtc",
    titleKey: "projects.items.rtc.title",
    descriptionKey: "projects.items.rtc.description",
    longDescriptionKey: "projects.items.rtc.longDescription",
    featuresKey: "projects.items.rtc.features",
    image: "/images/projects/bhitech.svg",
    technologies: ["Flutter", "Agora SDK", "Stripe SDK", "Firebase", "Cloud Functions"],
    category: ["mobile", "real-time", "full-stack"],
    company: "B-Hitech"
  },
  {
    id: 2,
    projectKey: "advertising",
    titleKey: "projects.items.advertising.title",
    descriptionKey: "projects.items.advertising.description",
    longDescriptionKey: "projects.items.advertising.longDescription",
    featuresKey: "projects.items.advertising.features",
    image: "/images/projects/byne-media.svg",
    technologies: ["Next.js", "React", "Firebase", "CinetPay", "Tailwind CSS"],
    category: ["full-stack", "saas"],
    company: "Byne Media"
  },
  {
    id: 3,
    projectKey: "nocode",
    titleKey: "projects.items.nocode.title",
    descriptionKey: "projects.items.nocode.description",
    longDescriptionKey: "projects.items.nocode.longDescription",
    featuresKey: "projects.items.nocode.features",
    image: "/images/projects/xplicity.svg",
    technologies: ["React", "Python", "Fast API", "Hasura", "PostgreSQL", "Material-UI", "Windmill", "Minio", "RekaJs", "Glide Data Grid"],
    category: ["full-stack", "saas"],
    company: "Xplicity"
  },
  {
    id: 4,
    projectKey: "parking",
    titleKey: "projects.items.parking.title",
    descriptionKey: "projects.items.parking.description",
    longDescriptionKey: "projects.items.parking.longDescription",
    featuresKey: "projects.items.parking.features",
    image: "/images/projects/smart-parking.svg",
    technologies: ["Android Studio", "Java", "Cloud Functions", "Firebase", "Google Maps API"],
    category: ["mobile", "full-stack"],
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

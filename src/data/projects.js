// Projects data derived from work experience

export const projects = [
  {
    id: 1,
    projectKey: "rtc",
    titleKey: "projects.items.rtc.title",
    descriptionKey: "projects.items.rtc.description",
    longDescriptionKey: "projects.items.rtc.longDescription",
    featuresKey: "projects.items.rtc.features",
    image: "/images/projects/urbn-caravan.png",
    technologies: ["Flutter", "Agora SDK", "Stripe SDK", "Firebase", "Cloud Functions"],
    category: ["mobile"],
    company: "B-Hitech",
    url: "https://www.urbncaravan.com/"
  },
  {
    id: 2,
    projectKey: "advertising",
    titleKey: "projects.items.advertising.title",
    descriptionKey: "projects.items.advertising.description",
    longDescriptionKey: "projects.items.advertising.longDescription",
    featuresKey: "projects.items.advertising.features",
    image: "/images/projects/byne-media.png",
    technologies: ["Next.js", "React", "Firebase", "CinetPay", "Tailwind CSS"],
    category: ["full-stack"],
    company: "Byne Media",
    url: "https://www.bynemedia.com/"
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
    category: ["full-stack"],
    company: "Xplicity",
    url: null
  },
  {
    id: 4,
    projectKey: "parking",
    titleKey: "projects.items.parking.title",
    descriptionKey: "projects.items.parking.description",
    longDescriptionKey: "projects.items.parking.longDescription",
    featuresKey: "projects.items.parking.features",
    image: "/images/projects/placedy.png",
    technologies: ["Android Studio", "Java", "Cloud Functions", "Firebase", "Google Maps API"],
    category: ["mobile", "full-stack"],
    company: "SUPMTI",
    url: "https://placedy--karz-60c8b.europe-west4.hosted.app"
  },
  {
    id: 5,
    projectKey: "minelogx",
    titleKey: "projects.items.minelogx.title",
    descriptionKey: "projects.items.minelogx.description",
    longDescriptionKey: "projects.items.minelogx.longDescription",
    featuresKey: "projects.items.minelogx.features",
    image: "/images/projects/minelogxai.png",
    technologies: ["ReactJs", "AWS EC2", "Email API"],
    category: ["full-stack"],
    company: "B-Hitech",
    url: "https://www.minelogxai.com"
  },
  {
    id: 6,
    projectKey: "spiderspace",
    titleKey: "projects.items.spiderspace.title",
    descriptionKey: "projects.items.spiderspace.description",
    longDescriptionKey: "projects.items.spiderspace.longDescription",
    featuresKey: "projects.items.spiderspace.features",
    image: "/images/projects/spider-space.png",
    technologies: ["ReactJs", "Stripe", "Firebase Hosting"],
    category: ["full-stack"],
    company: "B-Hitech",
    url: "https://www.spider-space.com/"
  }
];

// Filter categories for project filtering
export const projectCategories = [
  { id: "all", label: "filterAll" },
  { id: "full-stack", label: "filterFullStack" },
  { id: "mobile", label: "filterMobile" }
];

export default projects;

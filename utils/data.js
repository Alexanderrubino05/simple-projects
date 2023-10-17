// DnD Project
import DnDVideo from "../src/assets/dndSpellsWebsite/DnD-Website.mp4";
import dndImage1 from "../src/assets/dndSpellsWebsite/image1.webp";
import dndImage2 from "../src/assets/dndSpellsWebsite/image2.webp";

// Coffee App
import CoffeeAppVideo from "../src/assets/coffeeApp/Coffee-App.mp4";
import CoffeeAppImage1 from "../src/assets/coffeeApp/image1.webp";

// Job Portal Project
import JobPortalVideo from "../src/assets/jobPortal/Job-Portal.mp4";
import JobPortalImage1 from "../src/assets/jobPortal/image1.webp";
import JobPortalImage2 from "../src/assets/jobPortal/image2.webp";
import JobPortalImage3 from "../src/assets/jobPortal/image3.webp";
import JobPortalImage4 from "../src/assets/jobPortal/image4.webp";

export const Projects = [
  {
    title: "D&D Spells Website",
    description:
      "In this project I fetch D&d spells from a 100% public API, which I then showcase in a simple Next.js application, where you can sort, search and filter through the results.",
    tags: ["Next.js", "TailwindCSS"],
    images: [dndImage1, dndImage2],
    video: [DnDVideo],
    mediumLink:
      "https://medium.com/@alexrubino05/building-next-js-project-in-24-hours-d-d-spells-api-69947c1e374b#14c1-7004ec816eee",
    projectLink: "https://dnd-spells-ecru.vercel.app/?class=ranger",
    projectLinkText: "https://dnd-spells/",
    path: "dnd-spells-website",
    github: "https://github.com/Alexanderrubino05/dnd-spells-nextjs",
  },
  {
    title: "CRUD Coffee App",
    description:
      "I have created a fully functional CRUD application, where you can add different types of coffee to your cart, which then can be viewed, deleted or finally purchased.",
    tags: ["React Native", "Firebase", "TailwindCSS"],
    images: [CoffeeAppImage1],
    video: [CoffeeAppVideo],
    mediumLink:
      "https://medium.com/@alexrubino05/crud-coffee-app-with-firebase-react-native-81831be69076",
    path: "coffee-app",
    github: "https://github.com/Alexanderrubino05/coffee-app",
  },
  {
    title: "Job Portal Website",
    description:
      "I have created a job portal website with Laravel and MySQL. Which functions like a fully CRUD application, with Create, Read, Update and Delete features.",
    tags: ["Laravel", "MySQL", "TailwindCSS"],
    images: [
      JobPortalImage1,
      JobPortalImage2,
      JobPortalImage3,
      JobPortalImage4,
    ],
    video: [JobPortalVideo],
    mediumLink:
      "https://medium.com/@alexrubino05/job-portal-website-with-laravel-2b3b2f43db19",
    path: "job-portal",
    github: "https://github.com/Alexanderrubino05/job-portal-laravel/tree/main",
  },
];

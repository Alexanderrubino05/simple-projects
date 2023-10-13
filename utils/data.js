// DnD Project
import DnDVideo from "../src/assets/dndSpellsWebsite/DnD-Website.mp4";
import dndImage1 from "../src/assets/dndSpellsWebsite/image1.webp";
import dndImage2 from "../src/assets/dndSpellsWebsite/image2.webp";

// Coffee App
import CoffeeAppVideo from "../src/assets/coffeeApp/Coffee-App.mp4";
import CoffeeAppImage1 from "../src/assets/coffeeApp/image1.webp";

export const Projects = [
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
  },
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
  },
];

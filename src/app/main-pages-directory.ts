import { WorkCard, AboutBlurb} from "./main-pages";

export const CARDS: WorkCard[] = [
  { id: 1,
    title: 'GROUP SCHEDULING',
    description: 'UI / UX Designer',
    imgUrl: 'url(./assets/img/card-1.png)',
    routerLink: "/group-scheduling",
  },
  { id: 2,
    title: 'ROBOT NANNYS',
    description: 'Researcher, Visual Designer',
    imgUrl: 'url(./assets/img/card-3.png)',
    routerLink: "/critical-design"
  },
  { id: 3,
    title: 'APPRENTICESHIP LEARNING',
    description: 'UX Researcher, Writer',
    imgUrl: 'url(./assets/img/card-2.png)',
    routerLink: "/apprenticeship-learning",
  },
  { id: 4,
    title: 'PLAYGROUND',
    description: 'Side Projects',
    imgUrl: 'url(./assets/img/card-4.png)',
    routerLink: "/side-projects",
  },

];

export const BLURB: AboutBlurb[] = [
  { id: 1,
    title: "Tech for Social Good",
    description: "I get really excited thinking about radical ways technologies can transform our" +
      " world for the better. Nothing is too crazy. One of the most influential " +
      "forces of socially-grounded tech in my life is the Tech4Good Lab, where I’m a Fellow" +
      " and work as a UX Researcher and Designer.",
    imgUrl: '💻',
    imgAlt: 'computer',
  },
  { id: 2,
    title: "Wicked Problems in Design",
    description: "How do we design a world that allows every child access to " +
      "high-quality education? What do communities look like that center systems of care" +
      " rather than policing? These are some of many wicked problems I could think about for days on end." +
      " I don’t have the answers yet, but chatting about it together is a great start. ",
    imgUrl: '⁉️️',
    imgAlt: '?!',
  },
  { id: 3,
    title: "Slow Fashion & Sustainability ",
    description: "When I was little I wanted to be a fashion designer." +
      " My passions have aligned elsewhere since then, but I'm now fascinated by the" +
      " fashion industry's impact on our climate and social systems. To push against some " +
      "of its negative impacts I recently started an online-thrift shop as a passion" +
      " project.",
    imgUrl: '♻️',
    imgAlt: 'recycle',
  },
  {
    id: 4,
    title: "Photography and Empowerment",
    description: "",
    imgUrl: "📷",
    imgAlt: 'camera',
  },
  { id: 5,
    title: "Hawai‘i",
    description: "Hawai‘i is home for me, and I love talking about this special place. " +
      "Bonus points if you mention Sovereignty and the Hawaiian Kingdom.",
    imgUrl: '🏝️',
    imgAlt: 'beach',
  },
  { id: 6,
    title: "Dogs, Coffee & Croissants",
    description: "Preferably in that order. " +
      "When I’m not learning or working, I’m going on long, romantic walks on the beach" +
      " with my dog Dolly, ideally sipping Cat & Cloud Coffee with a croissant in hand.",
    imgUrl: '🐶',
    imgAlt: 'dog',
  },
];

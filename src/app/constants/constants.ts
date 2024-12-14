export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "University Management System",
    desc: "A feature-rich platform designed to efficiently manage university operations, including student profiles, course details, and grade analysis. It provides a seamless user experience for students, faculty, and administrators.",
    subdesc: 
      "Built using React, Node.js, SQL, and TypeScript, the system emphasizes scalability and usability. The backend handles complex queries, data migrations, and validations, while the frontend offers a responsive interface with detailed visuals, ensuring accessibility across devices. Key modules include academic information management, personalized profiles, course schedules, and performance dashboards. The app is rigorously tested for reliability and performance. Jest is used for unit testing to ensure individual components function correctly. End-to-End (E2E) testing validates complete workflows, ensuring smooth user experiences. Additionally, Cypress is employed for component-level testing, ensuring that frontend interactions are seamless across devices.",
    href: "https://university-swiatlons-projects.vercel.app/",
    logo: "/assets/icons/react.svg",
    logoStyle: {
      backgroundColor: "#010202",
      border: "0.2px solid #010202",
      boxShadow: "0px 0px 40px 0px #007acc",
    },
    spotlight: "/assets/images/spotlight4.png",
    texture: "/assets/images/projects/university.PNG",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/icons/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/icons/nodejs.svg",
      },
      {
        id: 3,
        name: "SQL",
        path: "/assets/icons/sql.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/icons/typescript.svg",
      },
      {
        id: 5,
        name: "Redux",
        path: "/assets/icons/redux.svg",
      },
      {
        id: 6,
        name: "Jest",
        path: "/assets/icons/jest.svg",
      },
      {
        id: 7,
        name: "Cypress",
        path: "/assets/icons/cypress.svg",
      },
    ],
  },
  {
    title: "Workout Website",
    desc: "An engaging landing page template is tailored to inspire fitness enthusiasts with motivational content and easy access to workout plans, enhancing their journey towards a healthier lifestyle. The responsive layout ensures that users have a seamless experience on any device, featuring vibrant visuals and clear navigation elements.",
    subdesc:
      "Built solely with Bootstrap, this project showcases the framework's powerful grid system and pre-built components for rapid development. The design includes a visually appealing hero section, informative content blocks, and interactive elements that highlight key features. The use of Bootstrap's utility classes ensures a polished look while maintaining code simplicity and efficiency.",
    href: "https://swiatlon.github.io/MySkillsMap/FrontEnd/CSS/Bootstrap/index.html",
    logo: "/assets/icons/bootstrap.svg",
    logoStyle: {
      backgroundColor: "#563d7c",
      border: "0.2px solid #563d7c",
      boxShadow: "0px 0px 60px 0px #563d7c",
    },
    spotlight: "/assets/images/spotlight5.png",
    texture: "/assets/images/projects/website.png",
    tags: [
      {
        id: 1,
        name: "Bootstrap",
        path: "/assets/icons/bootstrap.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "/assets/icons/javascript.svg",
      },
    ],
  },
];

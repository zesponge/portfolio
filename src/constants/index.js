import {LAVA, mdt, rogers,eon } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    react,
    tailwindcss,
    typescript,
    java,
    python,
    googleCloud,
    vscode,
    cplus,
    c,
    sql,
    post,
    game1,
    game2,
    house,
    money,
    dash,
    ML,
    Video
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: cplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: post,
        name: "Postgre SQL",
        type: "Database",
    },
    {
        imageUrl: googleCloud,
        name: "Google Cloud",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "MaterialUI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "IDE",
    }
];

export const experiences = [
    {
        title: "Full Stack Engineer",
        company_name: "Eon Media Corp",
        icon: eon,
        iconBg: "#accbe1",
        date: "Sept 2023 - Oct 2023",
        points: [
            "Developed an operational e-commerce storefront, featuring robust payment processing and order management functionality using React, TypeScript, MongoDB, and the Stripe API.",
            "Designed and implemented APIs to facilitate front-end and MongoDB communication."
        ],
        tech: "React, Typescript, MongoDB, Node.js",
    },
    {
        title: "Cloud Developer",
        company_name: "Mobile Data Technologies",
        icon: mdt,
        iconBg: "#ffffff",
        date: "Sept 2022 - Dec 2022",
        points: [
            "Created a Google Cloud powered portal display that displays data, enables configuration edits, and allows for equipment management of oil fracking equipment, optimizing fleet management by 50%, using Java and React.",
            "Implemented a Java backend service to process and visualize real time mining sensor data from the cloud PostgreSQL database.",
            "Leveraged microservice architecture to implement oil fracking sensor alert text message notification system."
        ],
        tech: "Java, React, Goolgle Cloud, PostgreSQL",
    },
    {
        title: "Developer",
        company_name: "Rogers Communications Inc. - University of Waterloo",
        icon: rogers,
        iconBg: "#ffcccb",
        date: "Jan 2022 - Apr 2022",
        points: [
            "Spearheaded the design and development of a React-based interface to remotely operate a 5G benchmarking tool and display resulting data, improving the benchmark turnaround time by 40%.",
            "Implemented JavaScript functions that enable and facilitate customizable REST API calls to handle benchmarking in a wide variety of configurations.",
            "Built versatile and reusable React components to digest and visualize test result data using Recharts.",
        ],
        tech: "React, Javascript, MaterialUI, APIs",
    },
    {
        title: "Webpage Developer",
        company_name: "LAVA Computers MFG Inc.",
        icon: LAVA,
        iconBg: "#ffdcd1",
        date: "May 2021 - Aug 2021",
        points: [
            "Developed responsive web pages to display real-time data read in from external IoT devices and control loading dock door systems using HTML, CSS, and JavaScript.",
            "Designed and wrote BASIC scripts to pipeline data from LAVA proprietary IoT devices to a web interface.",
        ],
        tech: "Javascript, HTML, CSS, BASIC",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: Video,
        theme: "btn-back-orange",
        name: "ScrobbleSearch",
        description: "Developed an application that allows users to semantically search through video content for clips that match simple queries using machine learning and video intelligence.",
        tech: "Flask, Google Cloud, ML, React, APIs, Pandas",
        link: '',
        live: false,
        repo: "",
        avail: false,

    },
    {
        iconUrl: ML,
        theme: "btn-back-pink",
        name: "SummarAIzeBot",
        description: "Implemented a web application that analyzes videos and generates a summary of the video using machine learning and natural language processing.",
        tech: "OpenAI API, ML, React, Node.js, Express, MongoDB",
        link: '',
        live: false,
        repo: "",
        avail: false,

    },
    {
        iconUrl: game2,
        theme: 'btn-back-green',
        name: 'Straights',
        description: 'Developed a C++ program that simulates the card game Straights. The game can be played against a computer or human player. The game is played over multiple rounds, and the goal of the game is to have the highest score at the end of the game.',
        link: '',
        tech: "C++, Object Oriented Programming",
        live: false,
        repo: "",
        avail: false,
    },
    {
        iconUrl: house,
        theme: 'btn-back-blue',
        name: 'Housing Buddy',
        description: 'Designed and built a web application that serves as a platform to streamline the housing search process for students. Leverages the the google maps api to display housing options on a map and allows users to view user-submitted reviews. Created by a group of three developers',
        link: "",
        tech: "Google Maps API, Firebase, Javascript, CSS",
        live: false,
        repo: "https://devpost.com/software/housing-buddy",
        avail: true,

    },
    {
        iconUrl: game1,
        theme: 'btn-back-red',
        name: 'Legends of the Math Ghost',
        description: 'Created a top-down interactive game involving defeating monsters using your math skills. The game had varyling levels of difficulty and was created for educational purposes. Created by a group of three developers.',
        link: '',
        tech: "Javascript, HTML, CSS",
        live: false,
        repo: "https://devpost.com/software/legends-of-the-math-ghost",
        avail: true,

    },
    {
        iconUrl: money,
        theme: 'btn-back-black',
        name: 'Time Is Money',
        description: 'Developed a web application to record, manage, and visualize personal and financial goals. Collaborated with two team members',
        link: '',
        tech: "Javascript, Node.js, Express, MongoDB",
        live: false,
        repo: "https://devpost.com/software/timeismoney-htn",
        avail: true,

    },
    {
        iconUrl: dash,
        theme: 'btn-back-yellow',
        name: 'My Hub',
        description: 'Built an interactive web application that allows users to create a personalized dashboard linked to their learning, professional, and recreational plaforms. Built for the NewHacks Hackathon with two other team members.',
        link: 'https://hitanshud123.github.io/MyHub/',
        tech: "Javascript, HTML, CSS",
        live: true,
        repo: "https://devpost.com/software/my-hub",
        avail: true,

    }
];
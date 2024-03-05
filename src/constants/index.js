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
    video,
    flask,
    pandas
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
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Data Analysis",
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
            "Designed and built API endpoints and database architecture to facilitate end-to-end communication."
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
            "Created a Google Cloud powered portal display that displays data, enables configuration edits, and allows for equipment management of oil fracking equipment, optimizing fleet management by 30%, using Java and React.",
            "Implemented a Java backend service to process and visualize real-time mining sensor data queried from the cloud PostgreSQL database.",
            "Leveraged microservice architecture to implement an oil fracking sensor alert text message notification system."
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
            "Spearheaded the design and development of a React-based interface to remotely operate a 5G benchmarking tool and display resulting data, improving the benchmark turnaround time by 25%.",
            "Implemented JavaScript functions that facilitate customizable REST API calls to handle benchmarking in a wide variety of configurations.",
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
        iconUrl: video,
        theme: "btn-back-orange",
        name: "ClipFindr",
        description: "Engineered a video content searching application that allows users to query for relevant video clips with simple text prompts using Flask, Google Cloud APIs, and the OpenAI API while leveraging Video Intelligence AI. Implemented visual and audio data analysis system to provide the closest matching video clip timestamps effectively eliminating the need to manually parse through video content.",
        tech: "OpenAI API, Google Cloud, ML, React, Flask",
        link: '',
        live: false,
        repo: "https://github.com/zesponge/clipFindr",
        avail: true,

    },
    {
        iconUrl: ML,
        theme: "btn-back-pink",
        name: "SummarAIzer",
        description: "Built a Full-Stack application and Google Chrome extension that leverages natural language processing to summarize video content using Flask, Python, React, and MongoDB. Designed and implemented a Flask REST API that facilitates video content summarization using video transcripts extracted from audio data and a Hugging Face model.",
        tech: "Hugging Face Model, REST APIs, ML, React, Node.js, Express, MongoDB",
        link: '',
        live: false,
        repo: "https://github.com/zesponge/summarAIzer",
        avail: true,

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
        description: 'Developed a Google Maps API powered web application that provides a platform for users to view and write reviews on user posted housing listings, streamlining the housing search process using Javascript and HTML/CSS. Implemented user review feature that reads and writes to the firebase database.',
        link: "https://hguo02.github.io/housing-buddy-HTN/",
        tech: "Google Maps API, Firebase, Javascript, CSS",
        live: true,
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

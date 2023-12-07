import {LAVA, mdt, rogers,eon } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python,
    googleCloud,
    vscode,
    cplus,
    c,
    sql,
    post
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
            "lebron james",
            "lebron james",
            "lebron james",
            "lebron james",
        ],
    },
    {
        title: "Cloud Developer",
        company_name: "Mobile Data Technologies",
        icon: mdt,
        iconBg: "#ffffff",
        date: "Sept 2022 - Dec 2022",
        points: [
            "Engineered a Google Cloud-based platform to view, edit, and manage oil fracking equipment using Java and React, optimizing the fleet management process by 75%.",
            "Implemented Java backend service to process and visualize mining sensor data pulled from the PostgreSQL database.",
            "Leveraged microservice architecture to implement text message alert notification system."
        ],
    },
    {
        title: "Developer",
        company_name: "Rogers Communications Inc. - University of Waterloo",
        icon: rogers,
        iconBg: "#ffcccb",
        date: "Jan 2022 - Apr 2022",
        points: [
            "Led the design and development of a React-based interface to remotely run a 5G benchmarking tool and display resulting data.",
            "Implemented JavaScript algorithms that make customizable API calls to start benchmarking process, creating a 40% speed up in benchmark turnaround time.",
            "Designed reusable React components to digest and visualize result data using Recharts",
        ],
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
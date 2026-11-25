import { mdt, rogers, eon, consalt } from "../assets/images";
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
    pandas,
    django,
    aws,
    prompt,
    fastapi,
    firebase,
    nextjs,
    docker,
    vercel,
    travel,
    accountabuddy,
    kotlin
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: vercel,
        name: "Vercel",
        type: "DevOps",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
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
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
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
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: aws,
        name: "AWS",
        details: "EC2, S3, RDS, ALB",
        type: "Backend",
    },
    {
        imageUrl: googleCloud,
        name: "Google Cloud",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material UI",
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
    },
    {
        name: "LLMs",
        type: "AI",
    },
    {
        name: "Jest",
        type: "Testing",
    },
    {
        name: "Azure Container Apps",
        type: "DevOps",
    },
    {
        name: "Azure SQL",
        type: "Database",
    },
    {
        name: "GitHub Actions",
        type: "DevOps",
    },
    {
        name: "Jira",
        type: "Dev Tools",
    },
    {
        name: "PowerShell",
        type: "Dev Tools",
    },
    {
        imageUrl: prompt,   
        name: "OpenAI API",
        type: "API",
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Facility Care Solutions Providers",
        location: "Toronto, ON",
        initials: "FC",
        iconBg: "#bfdbfe",
        date: "Oct 2025 - Present",
        points: [
            "Owned end-to-end engineering of Facilitate, a production winter-operations platform (Django, React, PostgreSQL) supporting $5M+ in snow removal operations across planning, dispatch, client requests, and communications.",
            "Managed staging and production infrastructure on AWS, deploying a Dockerized Django backend to EC2 with PostgreSQL on RDS and a React frontend to S3/CloudFront, with automated releases through GitHub Actions.",
            "Built an Azure SQL reporting platform with nightly Python ELT jobs on Azure Container Apps, incrementally ingesting QuickBooks, Facilitate, and BambooHR data to support finance and operations reporting and analysis.",
        ],
        tech: "Django, React, PostgreSQL, Docker, AWS, GitHub Actions, Python, Azure SQL, Azure Container Apps",
    },
    {
        title: "Software Engineer",
        company_name: "ConSalt (Consultant to Facility Care)",
        location: "Vancouver, BC",
        icon: consalt,
        iconBg: "#7087b5",
        date: "May 2024 - Sept 2025",
        points: [
            "Developed core resource-allocation workflows for a Django, React, and PostgreSQL operations platform, enabling planners to coordinate 80+ vehicles, 200+ staff, and 100+ sites across multiple snow-removal service types.",
            "Implemented real-time dispatch workflows that send operational instructions to field staff and track confirmations and responses, giving planning and operations teams live visibility into storm execution.",
            "Shipped a client request portal that allows customers to submit and track service requests with photo evidence, using presigned S3 URLs for direct file uploads.",
        ],
        tech: "Django, React, PostgreSQL, Amazon S3",
    },
    {
        title: "Full Stack Engineer",
        company_name: "Eon Media",
        location: "Toronto, ON",
        icon: eon,
        iconBg: "#accbe1",
        date: "Sept 2023 - Oct 2023",
        points: [
            "Built a digital media archive and e-commerce storefront using React, TypeScript, MongoDB, and Stripe, enabling customers to browse media, place orders, and complete secure online payments.",
        ],
        tech: "React, TypeScript, MongoDB, Stripe",
    },
    {
        title: "Cloud Developer",
        company_name: "Mobile Data Technologies",
        location: "Edmonton, AB",
        icon: mdt,
        iconBg: "#ffffff",
        date: "Sept 2022 - Dec 2022",
        points: [
            "Engineered a fleet management platform using Java, React, and Google Cloud to display oil fracking equipment and sensor data, enabling users to monitor and configure assets while improving operational efficiency by 20%.",
            "Implemented Java microservices that processed live sensor data from a cloud-hosted PostgreSQL database and triggered automated SMS alerts based on equipment conditions, reducing field incident response times.",
        ],
        tech: "Java, React, Google Cloud, PostgreSQL",
    },
    {
        title: "Developer",
        company_name: "Rogers Communications - University of Waterloo",
        location: "Waterloo, ON",
        icon: rogers,
        iconBg: "#ffcccb",
        date: "Jan 2022 - Apr 2022",
        points: [
            "Developed a React-based testing tool for a 5G internet assessment platform, enabling users to configure environments, launch external assessments, ingest results, and visualize performance data, cutting test turnaround time by 25%.",
            "Programmed reusable JavaScript modules for configurable REST API requests, enabling flexible test execution across varied benchmarking environments and configurations.",
        ],
        tech: "React, JavaScript, REST APIs",
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
        iconUrl: travel,
        theme: "btn-back-green",
        name: "Travel Buddy",
        description: "Built Jamjos, a group travel planner where groups of friends create trips by destination, invite members via email, set budgets and contributions, and collaboratively curate places (transport, stays, restaurants, activities) using an interactive like/neutral/dislike voting system with real-time tallies. Integrated Google Maps/Places search with persistent pins and rich place details, in-app chat for coordination, and email/password authentication across MVVM-backed screens for a responsive, reliable UX.",
        tech: "Android (Kotlin), Firebase Auth & Firestore, Google Maps & Places APIs",
        link: '',
        live: false,
        repo: "https://www.youtube.com/watch?v=-LpfDN9k65U",
        avail: true,

    },
    {
        iconUrl: video,
        theme: "btn-back-orange",
        name: "ClipFindr",
        description: "Engineered a Flask, GCP, and OpenAI video search application that enables users to retrieve relevant clips with simple text prompts by leveraging Video Intelligence AI for semantic video analysis. Implemented a visual and audio data analysis system to provide the closest matching video clip timestamps, eliminating the need to manually parse through video content.",
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
        description: "Built a full-stack video summarization app and Chrome extension using Flask, React, and MongoDB, cutting video review time by 30% with NLP-powered summaries. Designed a Flask REST API integrating a Hugging Face machine learning model to automate video transcript generation and summarization from audio data.",
        tech: "Hugging Face Model, REST APIs, ML, React, Node.js, Express, MongoDB",
        link: '',
        live: false,
        repo: "https://github.com/zesponge/summarAIzer",
        avail: true,

    },
    {
        iconUrl: accountabuddy,
        theme: "btn-back-black",
        name: "Accountabuddy",
        description: "Built AccountaBuddy, an Android (Kotlin) app where friends form accountability groups, set shared goals, and log daily activity. The app tracks both individual streaks and a collective group streak to keep everyone on pace, with simple check-ins and clear progress views, secured by Firebase Auth and backed by Firestore for group, log, and streak data.",
        tech: "Android (Kotlin), Firebase Auth & Firestore",
        link: '',
        live: false,
        repo: "",
        avail: false,

    },
    {
        iconUrl: house,
        theme: 'btn-back-blue',
        name: 'Housing Buddy',
        description: 'Built a Google Maps API based web application for viewing and reviewing user-posted student housing listings, improving housing search efficiency using JavaScript, HTML, and CSS.',
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

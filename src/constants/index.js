import {LAVA, mdt, rogers,eon, consalt } from "../assets/images";
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
        name: "Postgre SQL",
        type: "Database",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Backend",
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
    },
    {
        imageUrl: prompt,   
        name: "OpenAI API",
        type: "API",
    }
];

export const experiences = [
    {
        title: "Full Stack Engineer",
        company_name: "ConSalt",
        icon: consalt,
        iconBg: "#7087b5",
        date: "May 2024 - Sept 2025",
        points: [
            "Developed a full-stack snow removal resource allocation and operations management tool, boosting operational efficiency and enabling client resource organization with Django, React, and PostgreSQL.",
            "Streamlined end-to-end data integration by building REST API endpoints and designing database architecture for improved communication between various modularized Django and Python applications.",
            "Deployed web applications on AWS EC2/RDS with Docker, ensuring scalable infrastructure and automated, seamless deployments with CI/CD best practices."
        ],
        tech: "Django, React, AWS, PostgreSQL, Vercel, Docker",
    },
    {
        title: "Full Stack Engineer",
        company_name: "Eon Media Corp",
        icon: eon,
        iconBg: "#accbe1",
        date: "Sept 2023 - Oct 2023",
        points: [
            "Built a digital media archive and e-commerce storefront, driving seamless order fulfillment and payment processing with the Stripe API, React, TypeScript, and MongoDB.",
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
            "Developed a Google Cloud portal to visualize real-time oil fracking sensor data and manage equipment configurations, optimizing fleet operations by 20% using Java and React.",
            "Implemented a microservice-based Java backend to process live sensor data from a cloud PostgreSQL database and deliver automated text alerts, improving field incident response times by 25%.",
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
            "Spearheaded the design and development of a React UI for a 5G internet assessment tool, cutting execution turnaround time by 25% by enabling live data visualization and streamlined test queuing.",
            "Programmed reusable JavaScript modules to support customizable REST API calls, improving test coverage across diverse benchmarking configurations.",
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
            "Developed real-time IoT dashboards and loading door controls, enhancing monitoring and operational oversight.",
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

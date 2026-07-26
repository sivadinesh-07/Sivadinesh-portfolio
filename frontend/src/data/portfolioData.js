export const TECHNICAL_SKILLS = [
    {
        category: "Frontend",
        icon: "fab fa-html5 html-color",
        delay: 0,
        skills: [
            { name: "HTML / CSS", level: "95%" },
            { name: "JavaScript", level: "85%" },
            { name: "React", level: "80%" },
            { name: "Bootstrap", level: "85%" }
        ]
    },
    {
        category: "Backend & DB",
        icon: "fab fa-node-js node-color",
        delay: 100,
        skills: [
            { name: "Node.js / Express", level: "80%" },
            { name: "MongoDB", level: "75%" }
        ]
    },
    {
        category: "Tools & Cloud",
        icon: "fas fa-tools tools-color",
        delay: 200,
        skills: [
            { name: "Figma (UI/UX)", level: "90%" },
            { name: "WordPress", level: "85%" },
            { name: "Git / GitHub", level: "80%" },
            { name: "AWS Cloud", level: "70%" }
        ]
    },
    {
        category: "Programming",
        icon: "fas fa-code lang-color",
        delay: 300,
        skills: [
            { name: "Java", level: "75%" },
            { name: "C Language", level: "80%" }
        ]
    }
];

export const SOFT_SKILLS = [
    { name: "Communication", icon: "fas fa-comments" },
    { name: "Problem-Solving", icon: "fas fa-lightbulb" },
    { name: "Leadership", icon: "fas fa-crown" },
    { name: "Adaptability", icon: "fas fa-sync-alt" }
];

export const LANGUAGES = [
    { name: "Tamil", proficiency: "Native Proficiency", dots: 5, activeDots: 5 },
    { name: "English", proficiency: "Professional Working", dots: 5, activeDots: 4 }
];

export const JOURNEY_EXPERIENCE = [
    {
        org: "Webzenith Solutions — Chennai, India",
        logo: "WZ",
        isEdu: false,
        role: "UI/UX Designer & Lead",
        date: "01/2025 – 09/2025",
        details: [
            "Worked on client projects as a UI/UX Design Lead, creating intuitive and responsive UI designs using Figma, including wireframes and interactive prototypes.",
            "Collaborated with developers to deliver visually appealing, user-centered web applications while maintaining design consistency and usability.",
            "Awarded UI/UX Design Certification by Webzenith Solutions for demonstrated excellence in design."
        ],
        badges: ["Figma", "UI/UX", "Prototyping"]
    },
    {
        org: "TechnoHacks Solutions — Chennai, India",
        logo: "TH",
        isEdu: false,
        role: "Full-Stack Developer",
        date: "06/2026 – 07/2026",
        details: [
            "Developed responsive full-stack web applications using the MERN Stack (MongoDB, Express, React, Node.js), building and integrating frontend and backend features with RESTful APIs and database functionality.",
            "Leveraged AI-assisted development tools to improve productivity, debugging, and code optimization while collaborating on scalable, high-performance applications."
        ],
        badges: ["MongoDB", "Express", "React", "Node.js"]
    }
];

export const JOURNEY_EDUCATION = [
    {
        org: "S.A. Engineering College — Chennai, India",
        logo: "SA",
        isEdu: true,
        role: "BE in Computer Science Engineering",
        date: "2023 – Present",
        description: "Currently pursuing a Bachelor of Engineering in Computer Science. Focused on core software engineering principles, algorithms, and web development stacks.",
        badges: ["CGPA: 8.38 (up to 8th semester)", "Computer Science"],
        isSuccessBadgeIndex: 0
    },
    {
        org: "Dr. Vimala Convent Mat. Hr. Sec. School — Chennai, India",
        logo: "DV",
        isEdu: true,
        role: "HSC & SSLC",
        date: "06/2020 – 05/2023",
        description: "Completed Higher Secondary Course (HSC) and Secondary School Leaving Certificate (SSLC) with science and computer applications.",
        badges: ["HSC: 85.16%", "SSLC: Passed"],
        isSuccessBadgeIndex: 0
    }
];

export const PROJECTS = [
    {
        title: "Disaster Relief Coordination App",
        meta: "2025 | MERN STACK",
        desc: "A full-stack disaster management application designed to connect victims, volunteers, and rescue authorities. Features real-time coordination feeds and live status grids to optimize logistics during critical emergencies.",
        image: "/assets/images/disaster_relief_app.png",
        highlights: [
            "Improved communication coordination efficiency by 30%",
            "Built-in chat feeds and real-time status boards",
            "Scalable REST API with role-based routing"
        ],
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        github: "https://github.com/sivadinesh-07",
        demo: "#",
        delay: 0,
        fadeDirection: "fade-right",
        alternating: false
    },
    {
        title: "Campus Connect Hub",
        meta: "2026 | MERN STACK",
        desc: "A centralized campus management portal for seamless college administration, academic announcements, event scheduling, and resource coordination. Equipped with custom dashboards tailored to students, faculty, and administrators.",
        image: "/assets/images/campus_connect_hub.png",
        highlights: [
            "Role-based login dashboards (Student, Staff, Admin)",
            "Automated notification announcements feeds",
            "Responsive, glassmorphism interface controls"
        ],
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        github: "https://github.com/sivadinesh-07",
        demo: "#",
        delay: 200,
        fadeDirection: "fade-left",
        alternating: true
    }
];

export const CERTIFICATIONS = [
    {
        title: "Java Programming",
        issuer: "NPTEL Certification",
        tag: "Programming Algorithms",
        icon: "fab fa-java",
        link: "#",
        glowClass: "java-card",
        delay: 0
    },
    {
        title: "UI/UX Design Certification",
        issuer: "Webzenith Solutions",
        tag: "UI/UX & Prototyping",
        icon: "fab fa-figma",
        link: "#",
        glowClass: "figma-card",
        delay: 100
    },
    {
        title: "Software Testing",
        issuer: "NPTEL Certification",
        tag: "Quality Assurance",
        icon: "fas fa-bug",
        link: "#",
        glowClass: "test-card",
        delay: 200
    },
    {
        title: "AWS Academy Cloud Foundations",
        issuer: "AWS Academy",
        tag: "Cloud & Infrastructure",
        icon: "fab fa-aws",
        link: "#",
        glowClass: "aws-card",
        delay: 300
    },
    {
        title: "Frontend Development",
        issuer: "Infosys Springboard",
        tag: "Web Development",
        icon: "fas fa-laptop-code",
        link: "#",
        glowClass: "dev-card",
        delay: 400
    }
];

/**
 * portfolio-data.js
 * Contains the structured data and dynamic rendering logic for the portfolio.
 * Separates data from HTML mockup, reducing HTML lines and optimizing maintenance.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ─── 1. DATA DEFINITIONS ──────────────────────────────────────────────────
    
    const TECHNICAL_SKILLS = [
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

    const SOFT_SKILLS = [
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Problem-Solving", icon: "fas fa-lightbulb" },
        { name: "Leadership", icon: "fas fa-crown" },
        { name: "Adaptability", icon: "fas fa-sync-alt" }
    ];

    const LANGUAGES = [
        { name: "Tamil", proficiency: "Native Proficiency", dots: 5, activeDots: 5 },
        { name: "English", proficiency: "Professional Working", dots: 5, activeDots: 4 }
    ];

    const JOURNEY_EXPERIENCE = [
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
    

    const JOURNEY_EDUCATION = [
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

    const PROJECTS = [
        {
            title: "Disaster Relief Coordination App",
            meta: "2025 | MERN STACK",
            desc: "A full-stack disaster management application designed to connect victims, volunteers, and rescue authorities. Features real-time coordination feeds and live status grids to optimize logistics during critical emergencies.",
            image: "assets/images/disaster_relief_app.png",
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
            image: "assets/images/campus_connect_hub.png",
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

    const CERTIFICATIONS = [
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

    // ─── 2. DOM RENDERING FUNCTIONS ───────────────────────────────────────────
    
    // Technical Skills
    const techSkillsContainer = document.getElementById('techSkillsContainer');
    if (techSkillsContainer) {
        techSkillsContainer.innerHTML = TECHNICAL_SKILLS.map(cat => `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="tech-card h-100" data-aos="zoom-in" data-aos-delay="${cat.delay}">
                    <div class="tech-header">
                        <i class="${cat.icon}"></i>
                        <h4>${cat.category}</h4>
                    </div>
                    <div class="skill-list">
                        ${cat.skills.map(s => `
                            <div class="skill-item">
                                <div class="skill-info">
                                    <span>${s.name}</span>
                                    <span>${s.level}</span>
                                </div>
                                <div class="progress-line">
                                    <span style="width: ${s.level};"></span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Soft Skills
    const softSkillsContainer = document.getElementById('softSkillsContainer');
    if (softSkillsContainer) {
        softSkillsContainer.innerHTML = SOFT_SKILLS.map(s => `
            <div class="soft-card">
                <i class="${s.icon}"></i>
                <span>${s.name}</span>
            </div>
        `).join('');
    }

    // Languages Spoken
    const languagesContainer = document.getElementById('languagesContainer');
    if (languagesContainer) {
        languagesContainer.innerHTML = LANGUAGES.map(l => {
            let dotsHtml = '';
            for (let i = 1; i <= l.dots; i++) {
                dotsHtml += `<span class="dot ${i <= l.activeDots ? 'active' : ''}"></span>`;
            }
            return `
                <div class="lang-card">
                    <div class="lang-icon">
                        <i class="fas ${l.dots === l.activeDots ? 'fa-globe-asia' : 'fa-globe-americas'}"></i>
                    </div>
                    <div class="lang-details">
                        <h4>${l.name}</h4>
                        <span class="lang-prof">${l.proficiency}</span>
                        <div class="lang-dots">
                            ${dotsHtml}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Journey Timeline Helper
    const renderTimeline = (items) => {
        return `
            <div class="timeline-line"></div>
            ${items.map(item => `
                <div class="journey-card-wrapper">
                    <div class="timeline-node">
                        <i class="fas ${item.isEdu ? (item.logo === 'DV' ? 'fa-school' : 'fa-graduation-cap') : 'fa-briefcase'}"></i>
                    </div>
                    <div class="journey-card">
                        <div class="card-header-row">
                            <div class="org-logo ${item.isEdu ? 'edu-logo' : ''}">${item.logo}</div>
                            <div class="org-meta">
                                <span class="journey-date">${item.date}</span>
                                <h4>${item.role}</h4>
                                <span class="journey-org">${item.org}</span>
                            </div>
                        </div>
                        
                        ${item.details ? `
                            <ul class="journey-details">
                                ${item.details.map(d => `<li>${d}</li>`).join('')}
                            </ul>
                        ` : `
                            <p class="journey-details-text">${item.description}</p>
                        `}

                        <div class="journey-badges">
                            ${item.badges.map((b, idx) => `
                                <span class="badge ${idx === item.isSuccessBadgeIndex ? 'success-badge' : ''}">${b}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
    };

    // Tab switching logic for Journey Section
    const journeyTimeline = document.getElementById('journeyTimeline');
    const tabs = document.querySelectorAll('.journey-tab');
    const tabSlider = document.querySelector('.tab-slider');
    const tabsContainer = document.querySelector('.journey-tabs');
    const contentWrapper = document.querySelector('.journey-content-wrapper');

    function renderJourneyContent(target) {
        if (!journeyTimeline) return;
        
        // Add a smooth switching transition
        if (contentWrapper) {
            contentWrapper.classList.add('switching');
        }

        setTimeout(() => {
            if (target === 'experience') {
                journeyTimeline.innerHTML = renderTimeline(JOURNEY_EXPERIENCE);
                // Ensure proper theme coloring classes are set
                journeyTimeline.classList.remove('education-mode');
                journeyTimeline.classList.add('experience-mode');
            } else {
                journeyTimeline.innerHTML = renderTimeline(JOURNEY_EDUCATION);
                journeyTimeline.classList.remove('experience-mode');
                journeyTimeline.classList.add('education-mode');
            }
            
            // Re-trigger AOS animations inside timeline
            if (window.AOS) {
                window.AOS.refresh();
            }

            // Fade back in
            if (contentWrapper) {
                contentWrapper.classList.remove('switching');
            }
        }, 200);
    }

    function updateSliderPosition(tab) {
        if (!tabSlider || !tab) return;
        tabSlider.style.width = `${tab.offsetWidth}px`;
        tabSlider.style.left = `${tab.offsetLeft}px`;
        
        if (tab.dataset.target === 'education') {
            tabsContainer.classList.add('edu-active');
        } else {
            tabsContainer.classList.remove('edu-active');
        }
    }

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                updateSliderPosition(tab);
                renderJourneyContent(tab.dataset.target);
            });
        });

        // Initialize default tab
        const activeTab = document.querySelector('.journey-tab.active');
        if (activeTab) {
            // Slight delay to allow layouts to compute client widths
            setTimeout(() => {
                updateSliderPosition(activeTab);
                renderJourneyContent(activeTab.dataset.target);
            }, 100);
        }

        // Handle resize to keep slider matching correct dimensions
        window.addEventListener('resize', () => {
            const currentActiveTab = document.querySelector('.journey-tab.active');
            if (currentActiveTab) {
                updateSliderPosition(currentActiveTab);
            }
        });
    }

    // Projects Showcase
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer) {
        projectsContainer.innerHTML = PROJECTS.map(p => `
            <div class="project-showcase-card ${p.alternating ? 'alternating' : ''}" data-aos="${p.fadeDirection}" data-aos-delay="${p.delay}">
                <div class="project-showcase-image">
                    <div class="browser-mockup">
                        <div class="browser-header">
                            <span class="dot-btn red"></span>
                            <span class="dot-btn yellow"></span>
                            <span class="dot-btn green"></span>
                        </div>
                        <img src="${p.image}" alt="${p.title} UI Mockup">
                    </div>
                </div>
                <div class="project-showcase-details">
                    <span class="proj-meta">${p.meta}</span>
                    <h3>${p.title}</h3>
                    <p class="proj-desc">${p.desc}</p>
                    <ul class="proj-highlights">
                        ${p.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('')}
                    </ul>
                    <div class="proj-tech-stack">
                        ${p.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="proj-actions">
                        <a href="${p.github}" target="_blank" rel="noopener" class="proj-btn primary-btn">
                            <i class="fab fa-github"></i> Source Code
                        </a>
                        <a href="${p.demo}" class="proj-btn secondary-btn">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Certifications
    const certificatesContainer = document.getElementById('certificatesContainer');
    if (certificatesContainer) {
        certificatesContainer.innerHTML = CERTIFICATIONS.map(c => `
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="certificate-card ${c.glowClass} h-100" data-aos="zoom-in" data-aos-delay="${c.delay}">
                    <div class="cert-status"><i class="fas fa-check-circle"></i> Verified</div>
                    <div class="cert-icon"><i class="${c.icon}"></i></div>
                    <span class="cert-tag">${c.tag}</span>
                    <h3>${c.title}</h3>
                    <p class="cert-issuer">${c.issuer}</p>
                    <a href="${c.link}" class="cert-link">
                        View Credential <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }
});

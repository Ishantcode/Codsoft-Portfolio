const toggle = document.getElementById('menu-toggle');
if(toggle) {
    toggle.addEventListener("change",() => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

// HERO SECTION 
const words = ["Web Developer", "Fornt-End Dev", "Back-End Dev", "FullStack Dev",];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay  = 100;
let earsingDelay  = 100;
let nextWordDelay  = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if(!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        }

        else {
            setTimeout(type, typingDelay);
        }
    }

    else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if(charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }

        else {
            setTimeout(type, earsingDelay)
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (words?.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navlinks.forEach((l) => {
            if(l === link) {
                link.classList.add("active");
            }

            else {
                l.classList.remove("active")
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id === tabName) {
                tab.classList.add("active");
            }

            else {
                tab.classList.remove("active");
            }
        });
    });
});

// ABOUT SECTION
const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded",()=> {
    if(aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if(activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    date: "2025",
                    position: "Web Developer Intern",
                    company: "Codesoft",
                    details: "Worked on web development using the Front-End . Gained hands-on experience and In-depth knowledge of HTML,CSS,JS.",
                },
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                <div class="experience-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.position}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.company}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                `;
            })
            .join("");

            if(experiences) {
                experiences.innerHTML = experienceContent;
            }
        }

        else if(activeTab === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "2024 - 2028",
                    degree: "Bachelor of Technology in Computer Science (B.Tech)",
                    institution: "QU University, Roorkee",
                    details: "Studing core subjects like C, Web Development, WDA, and C++.",
                },
                {
                    id: 2,
                    date: "2021 - 2023",
                    degree: "Higher Secondary Education (HSC - Science)",
                    institution: "Sunrise Dwarika Academy",
                    details: "Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in logical thinking and problem-solving.",
                },
                {
                    id: 3,
                    date: "2019 - 2021",
                    degree: "Secondary School Certificate",
                    institution: "ST.Xavier's High School ",
                    details: "Completed basic schooling with distinction. Primarly focus on my basics and foundation",
                },
            ];

            const educationContent = educationList.map((ele) => {
                return `
                    <div class="experience-box" key="${ele?.id}">
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.degree}</h3>

                    <div class="company-name">
                        <span></span>
                        <p>${ele?.institution}</p>
                    </div>

                    <p>${ele?.details}</p>
                    </div>
                `;
            })
            .join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        }

        else if (tab.dataset.section === "skills") {
            const skills = document.querySelector(".skill-list");

            const skillList = [
                {
                id: 1,
                name: "HTML - Hyper Text Markup Language",
                icon: "assets/html.png",
                },
                {
                id: 2,
                name: "CSS - Cascading Style Sheet",
                icon: "assets/css.png",
                },
                {
                id: 3,
                name: "JavaScript",
                icon: "assets/js.png",
                },
            ];

            const skillContent = skillList.map((ele) => {
                return `
                    <div class="skill-box" key=${ele?.id}>
                    <img 
                    src=${ele?.icon}
                    alt="${ele?.name}"
                    title="${ele?.name}"
                    loading="lazy"/>
                    </div>
                `;
            })
            .join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        } 
            
        else if (tab.dataset.section === "about-me") {
            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                id: 1,
                key: "Name : ",
                value: "Ishant Kumar",
                },
                {
                id: 2,
                key: "Country : ",
                value: "India",
                },
                {
                id: 3,
                key: "College : ",
                value: "Quantum University",
                },
                {
                id: 4,
                key: "Year : ",
                value: "2nd years",
                },
            ];

            const infoContent = infoList.map((ele) => {
                return `
                    <div class="info-box" key=${ele?.id}>
                    <span>${ele?.key}</span>
                    <span>${ele?.value}</span>
                    </div>
                `;
            })
            .join("");

            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }
    });
})

// PROJECT SECTION
const projectList = [ 
  {
    id: 1,
    number: "01",
    title: "Fanta Landing Page",
    description:
      "This is a vibrant and interactive landing page designed for the iconic beverage brand Fanta. The page showcases a modern, colorful UI that reflects Fanta's energetic and youthful brand identity.",
    techStack: ["HTML", "CSS", "JS"],
    image: "/Assets/project1.png",
    liveLink: "https://ishantcode.github.io/Codsoft-Landing_Page/",
    githubLink: "https://github.com/Ishantcode/Codsoft-Landing_Page.git",
  },
  {
    id: 2,
    number: "02",
    title: "Basic Calculator",
    description:
      "A clean and responsive Basic Calculator built using HTML, CSS, and JavaScript. This project performs essential arithmetic operations like addition, subtraction, multiplication, and division.",
    techStack: ["HTML", "CSS", "JS"],
    image: "/Assets/project2.png",
    liveLink: "https://ishantcode.github.io/Codsoft-Calculator/",
    githubLink: "https://github.com/Ishantcode/Codsoft-Calculator.git",
  },
];

const project = document.querySelector(".project");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    project.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>${projectContent?.description}</p>
            <div class="tech-stack">
                ${projectContent?.techStack?.map((tech, i) => {
                    return `
                        <span key=${i}>${tech}</span>
                    `;
                })
                .join(",")}
            </div>
            <hr>
            <div class="links">
                <a href="${projectContent?.liveLink}"><i class="ph ph-arrow-right"></i></a>
                <a href="${projectContent?.githubLink}"><i class="ph ph-github-logo"></i></a>
            </div>
        </div>

        <div class="carousel">
            <img src="${projectContent?.image}" alt="${projectContent?.title}">
            <div class="arrows">
                <a href="#" id="previous" class='${previousDisabled? "disabled-btn" : ""}'><i class="ph ph-caret-left"></i></a>
                <a href="#" id="next" class='${nextDisabled ? "disabled-btn" : ""}'><i class="ph ph-caret-right"></i></a>
            </div>
        </div>
    `;

    document.getElementById("previous").addEventListener("click",(e) => {
        e.preventDefault();

        if(currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });
    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);

// CONTACT SECTION
const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "ph ph-phone-call",
    name: "Phone",
    value: "+91 8409XXXXXX",
    href: "tel:+918409XXXXXX",
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "E-Mail",
    value: "ishantkr852@gmail.com",
    href: "mailto:ishantkr852@gmail.com",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "Country",
    value: "India",
    href: "#",
  },
];

const contactContent = contactList.map((ele) => {
    return `
        <div class="media" key="${ele?.id}">
            <span>
                <i class="${ele?.icon}"></i>
            </span>

            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href="${ele?.href}">${ele?.value}</a>
            </div>
        </div>
    `;
})
.join("");

if (media) media.innerHTML = contactContent;
import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shariq Nadeem Malik",
  initials: "SNM",
  location: "Abu Dhabi, UAE",
  locationLink: "https://en.wikipedia.org/wiki/Abu_Dhabi",
  about:
    "Exploring the world of Tech",
  summary:
    "Currently exploring the world of data, tinkering around with NextJS and trying to cook up applications that utlizie LLMs to wow people and give them a bit of happpiness and enjoyment :)",
  avatarUrl: "../images/photo.jpeg",
  personalWebsiteUrl: "",
  contact: {
    email: "shariqnadeem21@hotmail.com",
    tel: "+971543791278",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shariqmalik10",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shariq-malik10/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Monash University",
      degree: "Bachelor of Computer Science in Data Science",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Karage",
      link: "https://karage.co/en/home",
      badges: ["On-Site", "Saudi Arabia"],
      title: "Data Analyst",
      start: "Aug 2024",
      end: "Present",
      description:
        "Spearheaded data utilization initiatives for a company serving over 300 clients in KSA, transforming unused data into actionable insights. \nDesigned and implemented a Tableau dashboard, automating data extraction, cleaning, and updating processes using Tableau Prep.",
    },
    {
      company: "Senang Insurance",
      link: "https://senang.io",
      badges: ["Remote", "Malaysia"],
      title: "Software Developer",
      start: "May 2024",
      end: "Oct 2024",
      description:
        "Developed a pet registration system using FastAPI and ResNet50 model for generating unique pet nose fingerprints, enabling accurate pet identification for insurance claims. \nBuilt a full-stack application with Streamlit frontend and FastAPI backend. \nDeveloped a complete frontend application for a Philippines-based insurance company using SvelteKit, handling the design implementation for the entire flow.",
    },
    {
      company: "Senang Insurance",
      link: "https://senang.io",
      badges: ["On-Site", "Malaysia"],
      title: "Software Developer Intern",
      start: "Nov 2022",
      end: "Feb 2023",
      description:
        "Collaborated with developers to resolve bugs and issues according to a test plan. \nPrepared test plans to cover vulnerabilities and key features, resulting in identifying and resolving over 50 critical bugs and issues. \nWorked on data entry in MS Excel and software development process. \nDeveloped a prototype employee management system using AngularJS and documented the in-house backend PHP application.",
    },
    {
      company: "Monash University",
      link: "https://www.monash.edu.my",
      badges: ["On-Site", "Malaysia"],
      title: "Research Assistant",
      start: "Sep 2023",
      end: "Feb 2024",
      description:
        "Researched Neural Networks under Dr. Lim's supervision and experimented with NeRF models for view synthesis. Proposed features for implementation.",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "ExpressJS",
    "REST API",
    "Python",
    "TensorFlow",
    "scikit-learn",
    "ETL",
    "Tableau"
  ],
  projects: [
    {
      title: "Describing CCTV Crime Footage using deep learning",
      techStack: [
        "Final Year Project",
        "TensorFlow",
        "Streamlit",
        "scikit-learn",
        "YoloV7",
        "Places365CNN"
      ],
      description: "Led a team on a deep learning project to describe CCTV crime footage, including scene settings and individuals/weapons used. Investigated and created a scene detection model with TensorFlow and transfer learning. Thoroughly evaluated super resolution models. Developed a frontend using Streamlit.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/shariqmalik10/Crime_Annotation",
      },
    },
    {
      title: "Data Analysis on Loan Application ",
      techStack: ["Side Project", "Python", "scikit-learn", "LightGBM"],
      description:
        "Carried out data analysis and built a machine learning model to predict loan repayment. Achieved 92% accuracy. Automated model retraining with a pipeline.",
      link: {
        label: "",
        href: "https://github.com/shariqmalik10/Loan-Risks",
      },
    },
    {
      title: "Manga Website",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript", "NodeJS", "REST API"],
      description:
        "Created a website making API calls to retrieve information based on user searches.",
      logo: JarockiMeLogo,
      link: {
        label: "",
        href: "https://github.com/shariqmalik10/Manga-Website",
      },
    },
    {
      title: "Covid-19 Data Visualization",
      techStack: ["Course Work", "HTML", "CSS", "JavaScript", "VegaLite"],
      description:
        "Created charts using VegaLite to display COVID-19 statistics and how countries fared against it",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://shariqmalik10.github.io/Covid-19-Visualization/",
      },
    },
  ],
} as const;

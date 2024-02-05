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
    "Aspiring Data Scientist",
  summary:
    "Recently graduated from Monash University with a Bachelor's degree in Computer Science and seeking opportunities to advance my learning in data analysis.I am very enthusiastic about data science as well as working on the development and research in new technologies in specific fields such as computer vision. I have worked with R, Tableau, Python and JavaScript frameworks such as NodeJS and AngularJS. Open to positions in software or data science !",
  avatarUrl: "../images/photo.jpeg",
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
        url: "https://twitter.com/eliteplayzXD",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Monash University",
      degree: "Bachelors of Computer Science in Data Science",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Senang Insurance",
      link: "https://senang.io",
      badges: ["On-Site"],
      title: "Software Developer Intern",
      start: "Nov 2022",
      end: "Feb 2023",
      description:
        "Collaborated with developers to resolve bugs and issues according to a test plan. Prepared test plans to cover vulnerabilities and key features, resulting in identifying and resolving over 50 critical bugs and issues. Worked on data entry in MS Excel and software development process. Developed a prototype employee management system using AngularJS and documented the in-house backend PHP application.",
    },
    {
      company: "Monash University",
      badges: ["On-Site"],
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
    "scikit-learn"
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
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;

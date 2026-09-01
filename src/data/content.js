import profileImage from '../assets/profile.jpg';
import habitImg from '../assets/abb.jpg';
import image from '../assets/image.png';
import vit from '../assets/vit.jpg';
import hp from '../assets/hp.jpg';
import yukta from '../assets/yukta.jpg';
import cert from '../assets/cert.jpg';
import chatbot from '../assets/chatbot.jpg';
import summ from '../assets/summ.jpg';
import info from '../assets/info.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBook, FaPenNib, FaPlane, FaMusic, FaCamera, FaDatabase, FaMobileScreenButton } from 'react-icons/fa6';
import { SiCplusplus, SiTailwindcss, SiExpress, SiStreamlit, SiC, SiCanva, SiMongodb, SiMysql, SiSqlite, SiPostman, SiAndroidstudio } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const personalInfo = {
  name: 'Dharshini B',
  fullName: 'Dharshini B',
  title: 'Software Developer & Computer Science Student',
  dob: '25 May 2007',
  location: 'Attayampatti, Salem, Tamil Nadu',
  phone: '+91 96295 62900',
  college: 'K.S.R. College of Engineering, Thiruchengode',
  degree: 'B.E. Computer Science and Engineering',
  cgpa: '8.15 (till 4th semester)',
  hsc: '83.5% (Sri Vidya Mandir Matric HR.Sec)',
  sslc: '83.4% (Vivekananda Balamandir Matric School)',
  email: 'dharshinibala001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dharshini-balasubramaniam-62193632a',
  github: 'https://github.com/dharshinibala025',
  objective:
    'A highly motivated student with a strong interest in Machine Learning, Generative AI, and Prompt Engineering, seeking an opportunity to apply my technical skills and creativity to build intelligent, real-world solutions while continuously learning and growing in a challenging environment.',
  description:
    'A highly motivated Computer Science student specializing in Backend Development, Machine Learning, Generative AI, and Prompt Engineering. Passionate about building intelligent, real-world solutions.',
  technologies: ['C', 'Java', 'Python', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Generative AI'],
  profileImage,
};

export const heroStats = [
  { label: 'Internship', value: '01' },
  { label: 'Projects Shipped', value: '04' },
  { label: 'CGPA (till 4th sem)', value: '8.15' },
];

export const internship = {
  role: 'Backend Developer Intern',
  company: 'Touchmark Descience Pvt. Ltd.',
  duration: 'Recent Industry Experience',
  description:
    'Gained practical experience in backend development using Node.js, Express.js, and MongoDB through a real-world Hostel Management System project. Improved API development, database management, authentication, and teamwork skills while working in an industry environment.',
  highlights: [
    'RESTful Backend Development with Node.js & Express.js',
    'Database Schema & Data Management with MongoDB & Mongoose',
    'Role-based Access & Secure JWT Authentication',
    'Real-time Data Processing & API Integration',
  ],
};

export const projects = [
  {
    id: 1,
    title: 'AI Based ChatBot',
    description:
      'Intelligent conversational chatbot application built with AI APIs and NLP for smart query resolution.',
    image: chatbot,
    github: 'https://github.com/dharshinibala025',
    link: 'https://github.com/dharshinibala025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'SQLite', 'AI APIs', 'NLP'],
  },
  {
    id: 2,
    title: 'Health and Fitness Tracker',
    description:
      'Full-stack web application featuring BMI calculation, workout planning, calorie tracking, hydration monitoring, meditation, sleep analysis, and step tracking.',
    image: image,
    github: 'https://github.com/dharshinibala025/fitness_tracker.git',
    link: 'https://fitness-tracker-nine-kohl.vercel.app',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
  },
  {
    id: 3,
    title: 'HostelHub Management System',
    description:
      'RESTful backend services with Node.js, Express.js, MongoDB, JWT, and Mongoose for a role-based Hostel Management System with student, warden, and admin modules.',
    image: habitImg,
    github: 'https://github.com/dharshinibala025',
    link: 'https://github.com/dharshinibala025',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose', 'REST APIs'],
  },
  {
    id: 4,
    title: 'Habit Tracker',
    description:
      'Java application to help users create, manage, and track daily habits efficiently with streak monitoring and OOP principles.',
    image: summ,
    github: 'https://github.com/dharshinibala025/habit-tracker',
    link: 'https://habit-tracker-ten-navy.vercel.app',
    tags: ['Java', 'OOP', 'Progress Tracking', 'Data Management'],
  },
];

export const certificates = [
  {
    id: 'cert-AICTE',
    title: 'AICTE EduSkills – Gen AI Virtual Internship',
    issuedBy: 'AICTE EduSkills',
    year: 'Jan-Mar 2026',
    description: 'Hands-on experience in prompt engineering, LLMs, and AI-powered application development.',
    image: info,
  },
  {
    id: 'cert-NPTEL',
    title: 'Elite+Silver NPTEL Online Certification (IoT)',
    issuedBy: 'NPTEL (IIT)',
    year: 'Jan-Apr 2025',
    description: 'Internet of Things (IoT) - Secured 79% in Elite+Silver category.',
    image: yukta,
  },
  {
    id: 'cert-Infosys',
    title: 'Infosys Springboard – Generative AI for All',
    issuedBy: 'Infosys Springboard',
    year: 'May 2025',
    description: 'Covering AI fundamentals, prompt engineering, responsible AI, and real-world AI applications.',
    image: vit,
  },
  {
    id: 'cert-IECD',
    title: 'Programming in C and C++',
    issuedBy: 'Bharathidasan University (IECD)',
    year: 'Feb 2020',
    description: 'Entrepreneurship and Career Development (SUITS) - Secured First Class.',
    image: cert,
  },
];

export const journeyMoments = [
  {
    year: '2020',
    title: 'SSLC (10th Standard)',
    description: 'Vivekananda Balamandir Matric School, Attayampatti',
    highlight: 'Scored 83.4% (8.34)',
  },
  {
    year: '2022 - 2024',
    title: 'HSC (12th Standard)',
    description: 'Sri Vidya Mandir Matric HR.Sec, Gurusamipalayam',
    highlight: 'Scored 83.5% (8.35)',
  },
  {
    year: '2024 - 2028',
    title: 'B.E. Computer Science & Engineering',
    description: 'K.S.R. College of Engineering, Thiruchengode',
    highlight: 'Current CGPA: 8.15 (till 4th semester)',
  },
];

export const socials = [
  { label: 'GitHub', url: 'https://github.com/dharshinibala025', icon: FaGithub },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dharshini-balasubramaniam-62193632a', icon: FaLinkedin },
  { label: 'Twitter', url: 'https://x.com/Dharshiniibala?t=WixAss77mnxtDvBJIz5PFg&s=09', icon: FaTwitter },
];

export const skills = [
  { name: 'C', icon: SiC },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
];

export const frameworks = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'React.js', icon: FaReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'REST APIs', icon: FaNodeJs },
];

export const databases = [
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'SQLite', icon: SiSqlite },
];

export const tools = [
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'Android Studio', icon: SiAndroidstudio },
  { name: 'Canva', icon: SiCanva },
  { name: 'VS Code', icon: VscVscode },
];

export const aiSkills = [
  { name: 'Generative AI' },
  { name: 'Prompt Engineering' },
  { name: 'Large Language Models (LLMs)' },
];

export const hobbies = [
  { name: 'Reading', icon: FaBook, description: 'Quotes & Inspiring books' },
  { name: 'Writing', icon: FaPenNib, description: 'Technical notes & thoughts' },
  { name: 'Traveling', icon: FaPlane, description: 'Exploring new places' },
  { name: 'Music', icon: FaMusic, description: 'All genres' },
  { name: 'Photography', icon: FaCamera, description: 'Capturing moments' },
];

export const funFacts = [
  "Passion for building AI-powered web applications and smart chatbots.",
  "Hands-on experience in full-stack REST API development and MongoDB.",
  "Secured Elite+Silver category (79%) in NPTEL Internet of Things certification.",
  "Completed AICTE EduSkills Gen AI Virtual Internship in prompt engineering & LLMs.",
];
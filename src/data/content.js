import profileImage from '../assets/profile.jpg';
import image from '../assets/image.png';
import vit from '../assets/vit.jpg';
import hp from '../assets/hp.jpg';
import yukta from '../assets/yukta.jpg';
import cert from '../assets/cert.jpg';
import chatbot from '../assets/chatbot.jpg';
import summ from '../assets/summ.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa6';
import { SiCplusplus, SiTailwindcss, SiExpress, SiStreamlit, SiPostman, SiMongodb, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const personalInfo = {
  name: 'Dharshini B',
  fullName: 'Dharshini Balasubramaniam',
  title: 'Generative AI Explorer & Full-Stack Developer',
  dob: '25 May 2007',
  location: 'Salem, Tamil Nadu',
  college: 'K.S.R. College of Engineering, Thiruchengode',
  email: 'dharshinibala001@gmail.com',
  description:
    'I am Dharshini Balasubramaniam, a second-year student at KSR College of Engineering. I explore Generative AI and build full-stack solutions.',
  technologies: ['Python', 'Java', 'C', 'HTML', 'c++'],
  profileImage,
};

export const heroStats = [
  { label: 'Internship', value: '01' },
  { label: 'Projects Shipped', value: '03' },
  { label: 'Tech Stacks', value: '06' },
  { label: 'Certifications', value: '05' },
];

export const projects = [
  {
    id: 1,
    title: 'AI Chatbot',
    description:
      'A stylish AI-powered chatbot for real-time conversations.',
    image: chatbot,
    link: 'https://github.com/dharshinibala025/ai-study-companion',
    tags: ['Javascript', 'OpenAI', 'Node.js', 'SQlite3', 'Express'],
  },
  {
    id: 2,
    title: 'Krishi Sakthi',
    description:
      'Streamlit app for Kerala Farmers Queries.',
    image: summ,
    link: 'https://krishi-sakhi-innovix-yp7whczthex5zaachik6gu.streamlit.app/',
    tags: ['Python', 'Streamlit'],
  },
  {
    id: 3,
    title: 'Health Fitness Tracker',
    description:
      'Smart health tracking app for monitoring workouts and progress.',
    image: image,
    link: 'https://github.com/username/pulse-portfolio',
    tags: ['HTML', 'CSS', 'Javascript'],
  },
];

export const certificates = [
  {
    id: 'cert-Workshop',
    title: 'Large Language Model in GenAI ',
    issuedBy: 'VIT,Vellore',
    year: '2024',
    image: vit,
  },
  {
    id: 'cert-Online Course',
    title: 'AI for Beginners',
    issuedBy: 'HP life & HP foundation',
    year: '2025',
    image: hp,
  },
  {
    id: 'cert-sympo',
    title: 'Yuktha Paper presentation',
    issuedBy: 'PSGItech',
    year: '2024',
    image: yukta,
  },
  {
    id: 'cert-Career Development',
    title: 'Programming on C & C++',
    issuedBy: 'Bharathidasan University',
    year: '2020',
    image: cert,
  },
];

export const journeyMoments = [
  {
    year: '2020-21',
    title: 'Secondary School Leaving',
    description: 'VBMMS,Attayampatti-637501',
    highlight: 'First milestone achieved.',
  },
  {
    year: '2023-24',
    title: 'Higher Secondary Leaving',
    description: 'SVM Hr.Sec School,Gurusamipalayam-',
    highlight: 'Leveling up skills.',
  },
  {
    year: '2024-28',
    title: 'Bachelor Degree-B.E(CSE)',
    description: 'Targeting research internships, building human-centered AI Skill developing cgpa-8.19 till 3rd semester',
    highlight: 'Targeting research and AI skills.',
  },
];

export const socials = [
  { label: 'GitHub', url: 'https://github.com/dharshinibala025', icon: FaGithub },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dharshini-bala-62193632a?', icon: FaLinkedin },
  { label: 'Twitter', url: 'https://x.com/Dharshiniibala?t=WixAss77mnxtDvBJIz5PFg&s=09', icon: FaTwitter },
];

export const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'Java', icon: FaJava },
  { name: 'C++', icon: SiCplusplus },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
];

export const frameworks = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Streamlit', icon: SiStreamlit },
];

export const tools = [
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'VS Code', icon: VscVscode },
  { name: 'Postman', icon: SiPostman },
  { name: 'Figma', icon: FaFigma },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
];
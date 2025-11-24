import profileImage from '../assets/profile.jpg';
import image from '../assets/image.png';
import vit from '../assets/vit.jpg';
import hp from '../assets/hp.jpg';
import yukta from '../assets/yukta.jpg';
import cert from '../assets/cert.jpg';
import chatbot from '../assets/chatbot.jpg';
import summ from '../assets/summ.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiCplusplus } from 'react-icons/si';

export const personalInfo = {
  name: 'Dharshini B',
  fullName: 'Dharshini Balasubramaniam',
  title: 'Generative AI Explorer & Full-Stack Developer',
  dob: '25 May 2007',
  location: 'Salem, Tamil Nadu',
  college: 'K.S.R. College of Engineering, Thiruchengode',
  email: 'dharshinibala001@gmail.com',
  about:
    'I’m Dharshini Balasubramaniam, a highly curious and driven second-year student at KSR College of Engineering. With a profound fascination for the transformative potential of Artificial Intelligence, particularly Generative AI, I actively experiment with cutting-edge tools and methodologies. My technical foundation is complemented by ongoing development in Full-Stack capabilities, driven by an unwavering commitment to innovation, growth, and building impactful solutions in the technology sector.',
  description:
    'I am Dharshini Balasubramaniam, a highly curious and driven second-year student at KSR College of Engineering. With a profound fascination for the transformative potential of AI—especially Generative AI—I experiment with the latest tools while sharpening full-stack fundamentals to craft meaningful, innovative solutions.',
  technologies: ['Python', 'Java', 'C', 'HTML', 'c++'],
  profileImage,
};

export const heroStats = [
  { label: 'Internship', value: '01' },
  { label: 'Projects Shipped', value: '03' },
  { label: 'Tech Stacks', value: '04' },
  { label: 'Certifications', value: '05' },
];

export const projects = [
  {
    id: 1,
    title: 'AI Chatbot',
    description:
      'A stylish AI-powered chatbot built to create smooth,real-time conversational experiences.',
    image: chatbot,
    link: 'https://github.com/dharshinibala025/ai-study-companion',
    tags: ['Javascript', 'OpenAI', 'Node.js', 'SQlite3', 'Express'],
  },
  {
    id: 2,
    title: 'Krishi Sakthi',
    description:
      'An Website for Kerala Farmers Queries Deployed on Streamlit',
    image: summ,
    link: 'https://krishi-sakhi-innovix-yp7whczthex5zaachik6gu.streamlit.app/',
    tags: ['Python', 'Streamlit'],
  },
  {
    id: 3,
    title: 'Health Fitness Tracker',
    description:
      'A smart health and fitness tracking application that monitors activities,workouts,and progrss to promote a healthier lifestyle.',
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
    highlight: 'Girl toy explores the first milestone with spark trails.',
  },
  {
    year: '2023-24',
    title: 'Higher Secondary Leaving',
    description: 'SVM Hr.Sec School,Gurusamipalayam-',
    highlight: 'Toy levels up with neon backpack LED pulses.',
  },
  {
    year: '2024-28',
    title: 'Bachelor Degree-B.E(CSE)',
    description: 'Targeting research internships, building human-centered AI Skill developing cgpa-8.19 till 3rd semester',
    highlight: 'Toy rides a magenta comet toward future goals.',
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
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
];
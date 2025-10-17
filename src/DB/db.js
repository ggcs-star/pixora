// Navbar
import FramistyLogo from "../assets/Courses_Digital_Media_Icons/Framisty-Logo.svg";

// About-2 Navbar
import AspiringIcon from "../assets/Courses_Digital_Media_Icons/Aspiring Icon-1.svg";
import Graduates from "../assets/Courses_Digital_Media_Icons/Graduates-icon-2.svg";
import Freelancer from "../assets/Courses_Digital_Media_Icons/Freelancer-icon-3.svg";
import Mission from "../assets/Courses_Digital_Media_Icons/MIssion.svg";
import Vision from "../assets/Courses_Digital_Media_Icons/Vision.svg";
import Right from "../assets/Courses_Digital_Media_Icons/Right.svg";
import DigitalMediaDesign from "../assets/Videos/Digital Media & Design.mp4";
import DesignVideoEditing from "../assets/Videos/Design & Video Editing.mp4";
import UiUx from "../assets/Videos/UIUX.mp4";

// Why-Choose-Us-2 Navbar
import Startup from "../assets/Courses_Digital_Media_Icons/start-up.svg";
import Flexible from "../assets/Courses_Digital_Media_Icons/Flexible.svg";
import CertificateImage from "../assets/Courses_Digital_Media_Icons/Course_Completion_Certificate.png";

// Contact_Add Navbar section
import Dial from "../assets/Courses_Digital_Media_Icons/Dial SVG.svg";

// hero section
import LeftEmoji from "../assets/Courses_Digital_Media_Icons/Hero_Bulb-Img.svg";
import RightEmoji from "../assets/Courses_Digital_Media_Icons/Hero_Plan-Img.svg";
import HeroVideo from "../assets/Videos/Hero sectio-Video.mp4";

// Mission Landing page section
import AboutCard1 from "../assets/About/About_Card-1.png";
import AboutCard2 from "../assets/About/About_Card-2.png";
import AboutCard3 from "../assets/About/About_Card-3.png";
import AboutCard4 from "../assets/About/About_Card-4.png";

// Contact Landing Page section
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";



// Navbar Section
export const navbarData = {
  logo: {
    src: FramistyLogo,
    alt: "Framisty_Logo",
  },
  menuLinks: [
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Contact", path: "/contactadd" },
  ],
  ctaButton: {
    text: "Inquiry Now",
    bgColor: "#F5614C",
    hoverColor: "#e64a36",
    link: "https://forms.gle/2e3p3YF5Fqqa4KiD7",
  },
};

// About-2 Section Navbar
export const aboutData = {
  heroSection: {
    title1: "We don't teach keyboard buttons.",
    title2Prefix: "We teach",
    title2Highlight: "design brains.",
    description1: "Pixora you train like an industry pro",
    description2: "Managing briefs, revisions, deadlines and teamwork.",
    buttonText: "Start Learning",
    backgroundGradient: {
      from: "#24143C",
      via: "#2B124C",
      to: "#000000",
    },
    borderGradient:
      "linear-gradient(to right, #442485, #8A1367, #FB2F5C, #F08540)",
  },

  infoCards: [
    {
      id: 1,
      icon: AspiringIcon,
      text: "Aspiring graphic designers who want a fast, job-ready portfolio.",
    },
    {
      id: 2,
      icon: Graduates,
      text: "Graduates seeking practical skills that matter to employers.",
    },
    {
      id: 3,
      icon: Freelancer,
      text: "Freelancers who want professional workflows & handovers.",
    },
  ],

  storySection: {
    heading: "Our Story",
    paragraphs: [
      "GG Pixohype was founded to fix a common gap: institutes teach tools; we teach the process. Led by a working professional with 10+ years across IT, graphic design and animation, Pixora turns students into hireable creatives who know how to solve real problems, not just run software.",
      "We believe small batches, live client-style projects, and honest feedback are the fastest path to mastery. Our mission is to make you job-ready, with a portfolio that proves it.",
    ],
  },

  missionVision: [
    {
      title: "Mission",
      icon: Mission,
      text: "Make designers who are ready for the real world, confident, collaborative, and deadline-driven.",
    },
    {
      title: "Vision",
      icon: Vision,
      text: "To be the go-to mentor-led studio-school for creatives in India.",
    },
  ],

  coreValues: [
    {
      title: "Practicality:",
      desc: "We teach what works in client projects",
    },
    {
      title: "Craftsmanship:",
      desc: "Quality + speed",
    },
    {
      title: "Accountability:",
      desc: "Real revision cycles, real feedback.",
    },
    {
      title: "Career-First:",
      desc: "Portfolio and placements come first.",
    },
  ],

  courses: [
    {
      id: 1,
      title: "Diploma in",
      highlight: "Digital Media & Design",
      description:
        "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#FB2F5C",
      gradientTo: "#F08540",
      color: "#F5B041",
      video: DigitalMediaDesign,
      slug: "diploma-in-digital-media-design",
      btnColor: "#F5614C",
    },
    {
      id: 2,
      title: "Diploma in",
      highlight: "Design & Video Editing",
      description:
        "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#F9F97F",
      gradientTo: "#81D246",
      color: "#8FE671",
      video: DesignVideoEditing,
      slug: "diploma-in-design-and-video-editing",
      btnColor: "#94D84F",
    },
    {
      id: 3,
      title: "Advance Program in",
      highlight: "Digital Media Creation",
      description:
        "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#E04FFF",
      gradientVia: "#FF6D8D",
      gradientTo: "#FFA26B",
      color: "#E564D8",
      video: UiUx,
      slug: "advance-program-in-digital-media-creation",
      btnColor: "#E958DD",
    },
  ],

  rightIcon: Right,
};

// Course Data
export const coursesData = [
  {
    id: 1,
    title: "Diploma in",
    highlight: "Digital Media & Design",
    description:
      "Intensive studio-style training for branding, print & digital creatives",
    gradientFrom: "#FB2F5C",
    gradientTo: "#F08540",
    color: "#F5B041",
    video: DigitalMediaDesign,
    slug: "diploma-in-digital-media-design",
    btnColor: "#F5614C",
  },
  {
    id: 2,
    title: "Diploma in",
    highlight: "Design & Video Editing",
    description:
      "Intensive studio-style training for branding, print & digital creatives",
    gradientFrom: "#F9F97F",
    gradientTo: "#81D246",
    color: "#8FE671",
    video: DesignVideoEditing,
    slug: "diploma-in-design-and-video-editing",
    btnColor: "#94D84F",
  },
  {
    id: 3,
    title: "Advance Program in",
    highlight: "Digital Media Creation",
    description:
      "Intensive studio-style training for branding, print & digital creatives",
    gradientFrom: "#E04FFF",
    gradientVia: "#FF6D8D",
    gradientTo: "#FFA26B",
    color: "#E564D8",
    video: UiUx,
    slug: "advance-program-in-digital-media-creation",
    btnColor: "#E958DD",
  },
];


// Why-Choose-Us - 2 Navbar
export const coreValuesData = [
  {
    title:
      "Portfolio with 8–10 polished case studies instead of scattered practice pieces.",
  },
  {
    title: "Industry-standard file handovers ready for print, web, and apps.",
  },
  {
    title: "Experience with client briefs, feedback loops, and version control.",
  },
  {
    title:
      "Interview & freelance-ready soft skills: pitching, pricing, and client communication.",
  },
];

// Features Table Data
export const featuresData = [
  {
    feature: "Trainer Experience",
    other: "Mostly academic",
    pixora: "10+ years industry experience",
  },
  {
    feature: "Batch Size",
    other: "20–30 students",
    pixora: "Max 8–12 students",
  },
  {
    feature: "Teaching Style",
    other: "Software tutorials",
    pixora: "Real project-based training",
  },
  {
    feature: "Industry Workflow",
    other: "Rarely covered",
    pixora: "Fully integrated",
  },
  {
    feature: "Feedback Process",
    other: "Generic",
    pixora: "Real-world revision cycles",
  },
  {
    feature: "Portfolio",
    other: "Random practice work",
    pixora: "Client-style case studies",
  },
  {
    feature: "Job Skills",
    other: "Basic",
    pixora: "Communication, deadlines, teamwork",
  },
  {
    feature: "Tools Taught",
    other: "Standard",
    pixora: "Standard + AI + 3D basics",
  },
];

// Info Cards for "Years, Batch, Job Skills"
export const infoCardsData = [
  {
    title: "10+",
    subtitle: "Years working designer",
    gradient: "from-[#F988AE] to-[#F7BB97]",
  },
  {
    title: "8–12",
    subtitle: "Batch Size & Flexible weekday batches",
    textColor: "text-sky-400",
  },
  {
    title: "Communication, deadlines, teamwork",
    subtitle: "Job Skills",
    textColor: "text-white",
  },
];

// Small Cards (Client Projects + Flexible Batches)
export const smallCardsData = [
  {
    img: Startup,
    text: "Client-style projects & workflows",
  },
  {
    img: Flexible,
    text: "Flexible weekday batches",
  },
];

// Certificate Section
export const certificateData = {
  text: "Earn the Framisty certificate upon course completion.",
  img: CertificateImage,
};

// Video Section
export const videosData = [DigitalMediaDesign, DesignVideoEditing, UiUx];

// Icons
export const icons = {
  right: Right,
};


// Contact_Add Navbar section
export const contactHeroData = {
  title: "Contact",
  bgGradient: "from-[#24143C] via-[#2B124C] to-black",
};

export const locationData = {
  heading: "Location",
  address:
    "5th Floor, Grand Emporio, Shiv Habitat B-Block, Motera Stadium Rd, opp. S Mall, Motera, Ahmedabad, Gujarat 380005",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.157203862217!2d72.5901953!3d23.1022824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cf69e1e7bb%3A0xa792826ac19c8f62!2sMotera%2C%20Ahmedabad%2C%20Gujarat%20380005!5e0!3m2!1sen!2sin!4v1698823849741!5m2!1sen!2sin",
};

export const hoursData = {
  heading: "Hours",
  timings: "Monday to Friday 08:00 AM — 06:00 PM",
};

export const dialData = {
  img: Dial,
  phone: "+91 88845 18448",
  rotate: "-rotate-12", 
};

export const formFields = {
  inputs: [
    { label: "Name *", type: "text", placeholder: "Enter your name" },
    { label: "Mobile Number *", type: "tel", placeholder: "Enter your mobile number" },
    { label: "Email *", type: "email", placeholder: "Enter your email address" },
  ],
  select: {
    label: "Course of Interest",
    options: [
      { value: "", text: "Select" },
      { value: "UI/UX", text: "UI/UX" },
      { value: "Graphic Design", text: "Graphic Design" },
    ],
  },
  textarea: { label: "Message", placeholder: "Write here..." },
  submitBtn: { text: "Submit" },
};

export const whatsappData = {
  link: "https://wa.me/919999999999",
};



// Hero Section
export const heroData = {
  heading: [
    "Learn from a ",
    { text: "Designer", gradient: "from-[#F7BB97] to-[#F988AE]" },
    " Not Just a ",
    { text: "Trainer", gradient: "from-[#F7BB97] to-[#F988AE]" },
  ],
  subText:
    "Learn to design the way it’s done in the real world. Not just tools, but the entire process - from client brief to final delivery.",
  buttons: [
    {
      text: "Start Learning",
      type: "primary",
      onClickLink: "/courses",
      bgColor: "#F5614C",
      hoverColor: "#e54b34",
    },
    {
      text: "Inquiry Now",
      type: "secondary",
      onClickLink: "https://forms.gle/2e3p3YF5Fqqa4KiD7",
      border: "border-white",
      hoverBg: "white",
      hoverText: "black",
    },
  ],
  whatsapp: {
    link: "https://wa.me/919999999999",
    bgColor: "#00FF6F",
    hoverBg: "green-600",
  },
  emojis: {
    left: LeftEmoji,
    right: RightEmoji,
  },
  video: HeroVideo,
};


// About Section Landing Page
export const aboutData2 = {
  aboutText: {
    heading: "About",
    paragraph1:
      "Framisty, we train students to work like real designers handling client briefs, revisions, deadlines, and teamwork.",
    paragraph2:
      "Most institutes train you in software, but fail to prepare you for the real challenges of the design industry.",
  },
  infoCards: [
    {
      title: "10+",
      subtitle: "Years working designer",
      gradient: "from-[#F988AE] to-[#F7BB97]",
      textColor: "text-transparent bg-clip-text",
    },
    {
      title: "8-12",
      subtitle: "Batch Size & Flexible weekday batches",
      textColor: "text-sky-400",
    },
    {
      subtitle: "Job Skills",
      title: "Communication, deadlines, teamwork",
      textColor: "text-white",
    },
  ],
  smallCards: [
    {
      img: Startup,
      text: "Client-style projects & workflows",
      flex: "1.2",
    },
    {
      img: Flexible,
      text: "Flexible weekday batches",
      flex: "1.1",
    },
  ],
};


// Mission Section Landing Page
export const missionData = {
  heading: "Our Mission is Simple",
  subheading: "To make you a designer who’s ready for real-world jobs, not just classroom exercises.",
  cards: [
    {
      id: 1,
      bgColor: "#F9C6CF",
      img: AboutCard1,
      title: "Industry Mentor",
      description: "Not a YouTube tutorial guy, A real hustler.",
    },
    {
      id: 2,
      bgColor: "#67C3A5",
      img: AboutCard2,
      title: "Batch Size",
      description: "No hiding at the back, we see you.",
    },
    {
      id: 3,
      bgColor: "#FAD0C4",
      img: AboutCard3,
      title: "Portfolio Power",
      description: "Your Behance gonna glow up.",
    },
    {
      id: 4,
      bgColor: "#B0E3F4",
      img: AboutCard4,
      title: "Placement Support",
      description: "We don’t ghost you after class.",
    },
  ],
};


// SuperPower Section Landing Page
export const superpowerData = {
  heading: "Pick Your Superpower.",
  subheading: "We'll Train You to Use It.",
  cards: [
    {
      id: 1,
      title: "Diploma in",
      highlight: "Digital Media & Design",
      description: "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#FB2F5C",
      gradientTo: "#F08540",
      btnColor: "#F5614C",
      video: DigitalMediaDesign,
      slug: "diploma-in-digital-media-design",
    },
    {
      id: 2,
      title: "Diploma in",
      highlight: "Design & Video Editing",
      description: "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#F9F97F",
      gradientTo: "#81D246",
      btnColor: "#94D84F",
      video: DesignVideoEditing,
      slug: "diploma-in-design-and-video-editing",
    },
    {
      id: 3,
      title: "Advance Program in",
      highlight: "Digital Media Creation",
      description: "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#E04FFF",
      gradientTo: "#FFA26B",
      btnColor: "#E958DD",
      video: UiUx,
      slug: "advance-program-in-digital-media-creation",
    },
  ],
  certificate: {
    title: "Certificate & Internship letter Awaits!",
    text: "Get certified and unlock a Free Internship Letter - proof of your skills and real-world experience.",
    img: CertificateImage,
  },
};


// Contact Section Landing Page
export const contactData = {
  form: {
    heading: "Send a Message",
    fields: [
      { label: "Name", type: "text", name: "name", placeholder: "Enter your name" },
      { label: "Mobile", type: "text", name: "mobile", placeholder: "Enter your mobile number" },
      { label: "Email", type: "email", name: "email", placeholder: "Enter your email address" },
      { 
        label: "Course of Interest", 
        type: "select", 
        name: "course", 
        options: ["Select", "UI/UX", "Graphic Design"] 
      },
      { label: "Message", type: "textarea", name: "message", placeholder: "Write here..." },
    ],
    submitButton: {
      text: "Submit",
      bgColor: "#F5614C",
      hoverBgColor: "#00cc6b",
      textColor: "text-white",
    },
  },
  contactInfo: {
    heading: "Get in touch with us",
    paragraph: "Your future in design is just one form away. \nDon’t ghost us.",
    email: "info@framisty.com",
    whatsapp: "+91 88845 18448"
  },
  socialLinks: [
    { icon: FaFacebookF, url: "https://facebook.com", bgColor: "bg-blue-600", hoverBg: "hover:bg-blue-700" },
    { icon: FaInstagram, url: "https://instagram.com", bgColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600", hoverBg: "hover:opacity-90" },
    { icon: FaYoutube, url: "https://youtube.com", bgColor: "bg-red-600", hoverBg: "hover:bg-red-700" },
    { icon: FaLinkedinIn, url: "https://linkedin.com", bgColor: "bg-blue-700", hoverBg: "hover:bg-blue-800" },
  ]
};

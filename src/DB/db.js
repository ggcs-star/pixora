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
import DesignVideoEditing1 from "../assets/Videos/Motion_Graphics.mp4"

// Why-Choose-Us-2 Navbar
import Startup from "../assets/Courses_Digital_Media_Icons/start-up.svg";
import Flexible from "../assets/Courses_Digital_Media_Icons/Flexible.svg";
import CertificateImage from "../assets/Courses_Digital_Media_Icons/Course_Completion_Certificate.png";
import CertificateImage1 from "../assets/Courses_Digital_Media_Icons/Offcial_certificate.png";

// Contact_Add Navbar section
import Dial from "../assets/Courses_Digital_Media_Icons/Dial SVG.svg";

// hero section
import LeftEmoji from "../assets/Courses_Digital_Media_Icons/Hero_Bulb-Img.svg";
import RightEmoji from "../assets/Courses_Digital_Media_Icons/Hero_Plan-Img.svg";
import HeroVideo from "../assets/Videos/Hero sectio-Video.mp4";

// Mission Landing page section
import RealProject from "../assets/Mission/Real-Project.png";
import CreativeConfidence from "../assets/Mission/Creative-Confidence.png";
import Be from "../assets/Mission/Be.png";
import PlacementSupport from "../assets/Mission/Placement-Support.png";

// Contact Landing Page section
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";


// Mentor Image 
import MentorImage from "../assets/Meet_Your_Mentor_Img/Kavan_Img.png";
import Ai from "../assets/Meet_Your_Mentor_Img/AI.svg";
import Ps from "../assets/Meet_Your_Mentor_Img/PS.svg";
import Ae from "../assets/Meet_Your_Mentor_Img/Ae.svg";
import Xd from "../assets/Meet_Your_Mentor_Img/Xd.svg";
import Pr from "../assets/Meet_Your_Mentor_Img/Pr.svg";



// Navbar Section
export const navbarData = {
  logo: {
    src: FramistyLogo,
    alt: "Framisty_Logo",
  },
  menuLinks: [
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Contact", path: "/contactadd" },
  ],
  ctaButton: {
    text: "Enquire Now",
    bgColor: "#F5614C",
    hoverColor: "#e64a36",
    link: "https://forms.gle/odQmgVp3aCMPTfPH7",
  },
};

// About-2 Section Navbar
export const aboutData = {
  heroSection: {
    title1: "We don't teach keyboard buttons.",
    title2Prefix: "We teach",
    title2Highlight: "design brains.",
    description1:
      "At Framisty, we don’t just train designers we shape creative thinkers.",
    buttonText: "Start Learning",
    onClickLink: "/courses",
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
      text: "Framisty Design Institute is a creative learning space built for tomorrow’s designers.",
    },
    {
      id: 2,
      icon: Graduates,
      text: "We blend professional training with real-world projects to help students master both design tools and creative thinking.",
    },
    {
      id: 3,
      icon: Freelancer,
      text: "Our goal is to shape confident, industry-ready professionals who can turn imagination into impactful design.",
    },
  ],

  storySection: {
    heading: "Our Story",
    paragraphs: [
      "Framisty was created to bridge a crucial gap in design education — while most institutes teach software, we teach how to think, create, and solve like a designer.Founded by an industry professional with over a decade of experience in IT, graphic design, and animation, Framisty focuses on transforming learners into job-ready creatives who can handle real-world challenges with confidence.",

      "We believe true design mastery comes from small batches, hands-on projects, real client briefs, and honest mentorship.",
      "Our goal is simple — to shape bold, skilled, and industry-ready professionals with a strong portfolio that speaks for itself.",
    ],
  },

  missions: [
    {
      title: "Mission",
      icon: Mission,
      text: "To craft confident designers who think beyond software — creative minds who are industry-ready, adaptable, and thrive under real-world challenges and deadlines.",
    },
  ],

  visions: [
    {
      title: "Vision",
      icon: Vision,
      text: "To build India’s most inspiring mentor-driven design institute, where creativity meets strategy and every learner becomes a professional creator.",
    },
  ],

  courses: [
    {
      id: 1,
      title: "Diploma in",
      highlight: "Graphic Design (PixalCraft)",
      description:
        "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#FB2F5C",
      gradientTo: "#F08540",
      color: "#F5B041",
      video: DigitalMediaDesign,
      slug: "diploma-in-digital-media-design",
      btnColor: "#F5614C",
      inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
    },
    {
      id: 2,
      title: "Diploma in",
      highlight: "Video Editing (FrameStory)",
      description:
        "Advanced design meets dynamic motion — craft, edit & animate like a pro.",
      gradientFrom: "#F9F97F",
      gradientTo: "#81D246",
      color: "#8FE671",
      video: DesignVideoEditing,
      slug: "diploma-in-design-and-video-editing",
      btnColor: "#94D84F",
      inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
    },
    {
      id: 3,
      title: "Diploma in UI/UX ",
      highlight: "Design (Human Interface Lab)",
      description: "Build beautiful and easy-to-use app & web interfaces.",
      gradientFrom: "#E04FFF",
      gradientVia: "#FF6D8D",
      gradientTo: "#FFA26B",
      color: "#E564D8",
      video: UiUx,
      slug: "advance-program-in-digital-media-creation",
      btnColor: "#E958DD",
      inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
    },
    {
      id: 4,
      title: "Advanced Diploma in Design &",
      highlight: "Video Editing (MotionVerse)",
      description: "Build beautiful and easy-to-use app & web interfaces.",
      gradientFrom: "#E04FFF",
      gradientTo: "#FFA26B",
      btnColor: "#E958DD",
      video: DesignVideoEditing1,
      slug: "Advanced-Diploma-in-Design-Video-Editing-MotionVerse",
      inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
  },
  ],

  rightIcon: Right,
};

// Course Data - Navbar Section
export const coursesData = [
  {
    id: 1,
    title: "Diploma in",
    highlight: "Graphic Design (Pixelcraft)",
    description:
      "Intensive studio-style training for branding, print & digital creatives",
    gradientFrom: "#FB2F5C",
    gradientTo: "#F08540",
    color: "#F5B041",
    video: DigitalMediaDesign,
    slug: "diploma-in-digital-media-design",
    btnColor: "#F5614C",
    inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
  },
  {
    id: 2,
    title: "Diploma in",
    highlight: "Video Editing (FrameStory)",
    description:
      "Advanced design meets dynamic motion — craft, edit & animate like a pro.",
    gradientFrom: "#F9F97F",
    gradientTo: "#81D246",
    color: "#8FE671",
    video: DesignVideoEditing,
    slug: "diploma-in-design-and-video-editing",
    btnColor: "#94D84F",
    inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
  },
  {
    id: 3,
    title: "Diploma in UI/UX ",
    highlight: "Design (Human Interface Lab)",
    description: "Build beautiful and easy-to-use app & web interfaces.",
    gradientFrom: "#E04FFF",
    gradientVia: "#FF6D8D",
    gradientTo: "#FFA26B",
    color: "#E564D8",
    video: UiUx,
    slug: "advance-program-in-digital-media-creation",
    btnColor: "#E958DD",
    inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
  },
  {
    id: 4,
    title: "Advanced Diploma in Design &",
    highlight: "Video Editing (MotionVerse)",
    description: "Build beautiful and easy-to-use app & web interfaces.",
    gradientFrom: "#2a3486",
    gradientTo: "#6cc7bc",
    btnColor: "#6cc7bc",
    video: DesignVideoEditing1,
    slug: "Advanced-Diploma-in-Design-Video-Editing-MotionVerse",
    inquiryLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
  },
];

// Why-Choose-Us - 2 Navbar Section
export const coreValuesData = [
  {
    title:
      "Build a professional portfolio featuring 8–10 complete, real-world projects.",
  },
  {
    title:
      "Learn how to create industry-ready files for print, web, and digital platforms.",
  },
  {
    title:
      "Work on client-style briefs, manage feedback, and maintain version control.",
  },
  {
    title:
      "Develop communication and presentation skills for interviews and freelance work.",
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
    pixora: "Standard + AI",
  },
];

// Info Cards for "Years, Batch, Job Skills"
export const infoCardsData = [
  {
    title: "10+",
    subtitle: "Trainers with 10+ years of Experience",
    gradient: "from-[#F988AE] to-[#F7BB97]",
  },
  {
    title: "8–12",
    subtitle: "Flexible batch size of 8 to 12 students",
    textColor: "text-sky-400",
  },
  {
    title: "Master communication, teamwork, and time management",
    subtitle: "Job Skills",
    textColor: "text-white",
  },
];

// Small Cards
export const smallCardsData = [
  {
    img: Startup,
    text: "Portfolio That Stands Out",
  },
  {
    img: Flexible,
    text: "Convenient Weekday Timings",
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
    "5th Floor, Grand Emporio, Above Blinkit Warehouse, Motera Stadium Road, Motera, Ahmedabad, Gujarat-380005",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.157203862217!2d72.5901953!3d23.1022824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cf69e1e7bb%3A0xa792826ac19c8f62!2sMotera%2C%20Ahmedabad%2C%20Gujarat%20380005!5e0!3m2!1sen!2sin!4v1698823849741!5m2!1sen!2sin",
};

// export const hoursData = {
//   heading: "Hours",
//   timings: "Monday to Saturday 08:00 AM to 07:00 PM",
// };

export const hoursData = {
  // heading: "Hours",
  days: "Monday to Saturday",
  timings: "08:00 AM to 07:00 PM",
};


export const dialData = {
  img: Dial,
  phone: "+91 9723235129",
  rotate: "-rotate-12",
};

export const formFields = {
  inputs: [
    { label: "Name *", type: "text", placeholder: "Enter your name" },
    {
      label: "Mobile Number *",
      type: "tel",
      placeholder: "Enter your mobile number",
    },
    {
      label: "Email *",
      type: "email",
      placeholder: "Enter your email address",
    },
  ],
  select: {
    label: "Course of Interest",
    options: [
      { value: "", text: "Select" },
      { value: "UI/UX", text: "UI/UX" },
      { value: "Graphic Design", text: "Graphic Design" },
      { value: "Video Editing", text: "Video Editing" },
      { value: "Motion Graphics", text: "Motion Graphics" },
    ],
  },
  textarea: { label: "Message (Optional)", placeholder: "Write here..." },
  submitBtn: { text: "Submit" },
};

export const whatsappData = {
  link: "https://wa.me/+916352305842",
};

// Hero Section
export const heroData = {
  heading: [
    "Learn from a ",
    { text: "Designer", gradient: "from-[#F7BB97] to-[#F988AE]" },
    " Build a Career, ",
    { text: "Not Just Skills", gradient: "from-[#F7BB97] to-[#F988AE]" },
  ],
  subText:
    "Learn the complete design process from client brief to final delivery, get certified, and earn your Internship Letter that proves your real-world experience.",
  buttons: [
    {
      text: "Start Learning",
      type: "primary",
      onClickLink: "/courses",
      bgColor: "#F5614C",
      hoverColor: "#e54b34",
    },
    {
      text: "Enquire Now",
      type: "secondary",
      onClickLink: "https://forms.gle/odQmgVp3aCMPTfPH7",
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
      "At Framisty, we go beyond software training — we prepare students to think, work, and deliver like real designers. From handling client briefs to managing revisions, deadlines, and teamwork, we train you in real corporate environment.",
  },
  infoCards: [
    {
      title: "10+",
      subtitle: "Trainers with 10+ years of Experience",
      gradient: "from-[#F988AE] to-[#F7BB97]",
      textColor: "text-transparent bg-clip-text",
    },
    {
      title: "8-12",
      subtitle: "Flexible batch size of 8 to 12 students",
      textColor: "text-sky-400",
    },
    {
      subtitle: "Job Skills",
      title: "Master communication, teamwork, and time management",
      textColor: "text-white",
    },
  ],
  smallCards: [
    {
      img: Startup,
      text: "Portfolio That Stands Out",
      flex: "1.2",
    },
    {
      img: Flexible,
      text: "Convenient Weekday Timings",
      flex: "1.1",
    },
  ],
};


// Meet My Mentor - Landing Page Section
// export const mentorData = {
//   title: "Meet Your Mentor",
//   description: [
//     "He has spent over a decade inside the world he teaches.",
//     "His journey began in classrooms, helping students unlock creative tools and curious minds. For three years, he worked as an educational trainer. Then his path moved into the IT industry, where he spent more than ten years working on real client projects, tight deadlines, feedback loops, revisions, and everything in between. ",
//     "Through those years, he noticed something important: many students finish courses knowing the software, but not creative decision making. "
//   ],
//   title1:[
//     "They know the tools, yet still struggle with questions like:",
//   ],
//   highlights: [
    
//     "When should I use this technique?",
//     "How do I build strong concepts, not just designs?",
//     "How do I talk to clients and deliver work with confidence?",
//   ],
//   description1: [
//     "This gap inspired Framisty Design Institute.",
//     "Here, learning is practical and industry-focused. Students work with real workflows, real challenges, and internships that prepare them for real-life projects.",
//     "His promise as a mentor is simple:  ",
//     "Guide students honestly, share what truly happens in the industry, and help them grow into confident creative professionals who are ready for the world outside the classroom."
//   ],
//   image: MentorImage 
// };

export const mentorData = {
  title: "Meet Your Mentor",
  image: MentorImage,

  description: [
    "He has spent over a decade inside the world he teaches.",
    "His journey began in classrooms, helping students unlock creative tools and curious minds. For 3 years, he worked as an educational trainer.",
    "Then his path moved into the IT industry, where he spent more than 10 years working on real client projects, tight deadlines, feedback loops, revisions, and everything in between.",
    "Through those years, he noticed something important: many students finish courses knowing the software, but not creative decision making."
  ],

  promise:
    "Guide students honestly, share what truly happens in the industry, and help them grow into confident creative professionals who are ready for the world outside the classroom.",

  floatingIcons: [
  {
    id: "ai",
    img: Ai,
    alt: "AI",
    position: "top-[18%] left-[12%]",
    size: "w-14 sm:w-18",
    animation: "normal",
  },
  {
    id: "ps",
    img: Ps,
    alt: "Photoshop",
    position: "top-[20%] right-[14%]",
    size: "w-14 sm:w-18",
    animation: "slow",
  },
  {
    id: "ae",
    img: Ae,
    alt: "After Effects",
    position: "bottom-[32%] left-[4%]",
    size: "w-14 sm:w-20",
    animation: "reverse",
  },
  {
    id: "xd",
    img: Xd,
    alt: "XD",
    position: "bottom-[29%] right-[2%]",
    size: "w-12 sm:w-16",
    animation: "normal",
  },
  {
    id: "pr",
    img: Pr,
    alt: "Premiere Pro",
    position: "bottom-[12%] right-[26%]",
    size: "w-14 sm:w-16",
    animation: "slow",
  },
],

};






// Mission Section Landing Page
export const missionData = {
  heading: "Our Mission is Simple",
  subheading:
    "To make you a designer who’s ready for real-world jobs, not just classroom.",
  cards: [
    {
      id: 1,
      bgColor: "#F9C6CF",
      img: RealProject,
      title: "Real Projects",
      description: "Mock-ups don’t get you hired.",
    },
    {
      id: 2,
      bgColor: "#67C3A5",
      img: CreativeConfidence,
      title: "Creative Confidence",
      description: "No copying Pinterest boards.",
    },
    {
      id: 3,
      bgColor: "#FAD0C4",
      img: Be,
      title: "Portfolio Power",
      description: "Knowing tools isn’t enough.",
    },
    {
      id: 4,
      bgColor: "#B0E3F4",
      img: PlacementSupport,
      title: "Placement Support",
      description: "From class to career",
    },
  ],
};

// SuperPower Section Landing Page
export const superpowerData = {
  heading: "Pick Your Passion",
  subheading: "We’ll Turn It into a Superpower",
  cards: [
    {
      id: 1,
      title: "Diploma In ",
      highlight: "Graphic Design (Pixelcraft)",
      description:
        "Intensive studio-style training for branding, print & digital creatives",
      gradientFrom: "#FB2F5C",
      gradientTo: "#F08540",
      btnColor: "#F5614C",
      video: DigitalMediaDesign,
      slug: "diploma-in-digital-media-design",
    },
    {
      id: 2,
      title: "Diploma In",
      highlight: "Video Editing (Framestory)",
      description:
        "Advanced design meets dynamic motion — craft, edit & animate like a pro.",
      gradientFrom: "#F9F97F",
      gradientTo: "#81D246",
      btnColor: "#94D84F",
      video: DesignVideoEditing,
      slug: "diploma-in-design-and-video-editing",
    },
    {
      id: 3,
      title: "Diploma in UI/UX  ",
      highlight: "Design (Human Interface Lab)",
      description: "Build beautiful and easy-to-use app & web interfaces.",
      gradientFrom: "#E04FFF",
      gradientTo: "#FFA26B",
      btnColor: "#E958DD",
      video: UiUx,
      slug: "advance-program-in-digital-media-creation",
    },
    {
      id: 4,
      title: "Advanced Diploma in Design & ",
      highlight: "Video Editing (MotionVerse)",
      description: "Build beautiful and easy-to-use app & web interfaces.",
      gradientFrom: "#2a3486",
      gradientTo: "#6cc7bc",
      btnColor: "#6cc7bc",
      video: DesignVideoEditing1,
      slug: "Advanced-Diploma-in-Design-Video-Editing-MotionVerse",
    },
  ],
  certificate: {
    title: "Once You Complete the Course",
    points: [
      "You’ll also receive a Internship Letter, showcasing your hands-on experience and real-world design skills - a great addition to your professional portfolio or résumé.",
    ],
    img: CertificateImage,
  },
  certificate1: {
    title: "Once You Complete the Course",
    points: [
      "Get an official Certificate on Completion to recognize your learning and achievements, showcase your skills with confidence, and add real value to your professional portfolio.",
    ],
    img: CertificateImage1,
  },
};

// Contact Section Landing Page
export const contactData = {
  form: {
    heading: "Send a Message",
    fields: [
      {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "Enter your name",
      },
      {
        label: "Mobile",
        type: "text",
        name: "mobile",
        placeholder: "Enter your mobile number",
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Enter your email address",
      },
      {
        label: "Course of Interest",
        type: "select",
        name: "course",
        options: ["Select", "UI/UX", "Graphic Design", "Video Editing"],
      },
      {
        label: "Message (Optional)",
        type: "textarea",
        name: "message",
        placeholder: "Write here...",
      },
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
    whatsapp: "+91 6352305842",
  },
  socialLinks: [
    {
      icon: FaFacebookF,
      // Facebook URL
      url: "https://www.facebook.com/profile.php?id=61583060914485",
      bgColor: "bg-blue-600",
      hoverBg: "hover:bg-blue-700",
    },
    {
      icon: FaInstagram,
      // Instragram URL
      url: "https://www.instagram.com/framisty_institute/",
      bgColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      hoverBg: "hover:opacity-90",
    },
    // { icon: FaYoutube, url: "https://youtube.com", bgColor: "bg-red-600", hoverBg: "hover:bg-red-700" },
    // { icon: FaLinkedinIn, url: "https://linkedin.com", bgColor: "bg-blue-700", hoverBg: "hover:bg-blue-800" },
  ],
};

// Contact Landing Page Whatsapp Link
export const whatsappData2 = {
  // Whatsapp URL
  link: "https://wa.me/916352305842",
};

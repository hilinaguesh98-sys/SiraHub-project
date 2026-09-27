// SiraHub Data Store - Realistic Ethiopian Student, Company & Opportunity Data

export const CURRENT_STUDENT = {
  id: "student-1",
  name: "Hilina Guesh",
  headline: "Computer Science & Engineering Student",
  university: "Mekelle University",
  campus: "Militia / Main Campus",
  department: "Computer Science and Engineering",
  year: "2nd Year",
  graduationYear: 2027,
  location: "Mekelle, Tigray, Ethiopia",
  hometown: "Mekelle, Ethiopia",
  email: "hilina.guesh@mu.edu.et",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  bio: "Passionate 2nd-year Computer Science and Engineering student at Mekelle University. Dedicated to frontend engineering with modern React, JavaScript, and accessible web standards. Eager to solve real-world problems in Ethiopia through high-performance software.",
  availability: "Open to Internship",
  portfolioStrength: 78,
  metrics: {
    verifiedSkillsCount: 4,
    completedChallengesCount: 3,
    activeApplicationsCount: 5,
    matchedOpportunitiesCount: 4,
    totalPoints: 1240,
    rank: "Top 8% in Ethiopia"
  },
  skills: [
    { name: "React", category: "Frontend", status: "verified", score: 92, verifiedDate: "Sep 2026", evidence: "React Responsive Product Card Challenge" },
    { name: "JavaScript", category: "Programming", status: "verified", score: 88, verifiedDate: "Aug 2026", evidence: "ES6+ Modern JavaScript Assessment" },
    { name: "Git & GitHub", category: "Tools", status: "verified", score: 95, verifiedDate: "Jul 2026", evidence: "Collaborative Git Branching Challenge" },
    { name: "HTML & CSS", category: "Web Design", status: "verified", score: 96, verifiedDate: "Jun 2026", evidence: "Semantic Responsive Layout Challenge" },
    { name: "Data Structures", category: "Computer Science", status: "in-progress", progress: 65, challengeId: "chal-ds-1" },
    { name: "UI/UX Design", category: "Design", status: "in-progress", progress: 40, challengeId: "chal-ui-1" },
    { name: "Next.js", category: "Full-Stack", status: "in-progress", progress: 30, challengeId: "chal-next-1" },
    { name: "Python", category: "Backend", status: "added", progress: 15 },
    { name: "SQL & PostgreSQL", category: "Database", status: "added", progress: 20 },
    { name: "Tailwind CSS", category: "Styling", status: "verified", score: 90, verifiedDate: "Sep 2026", evidence: "Mobile-First SaaS Challenge" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Ethiopian E-Commerce Marketplace UI",
      description: "A fast, mobile-optimized digital storefront designed for Ethiopian SMEs. Features Birr currency pricing, local item categories, and cart state management.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Context API"],
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/hilina-guesh/ethio-shop-ui",
      liveDemoUrl: "https://ethio-shop-demo.vercel.app",
      verified: true,
      verifiedBy: "SiraHub Engineering Review",
      likes: 42,
      date: "August 2026"
    },
    {
      id: "proj-2",
      title: "Mekelle University Student Portal Dashboard",
      description: "Interactive student course registration and grade auditing interface with real-time GPA calculations and notification schedules.",
      technologies: ["React", "JavaScript", "CSS Modules", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/hilina-guesh/mu-portal-redesign",
      liveDemoUrl: "https://mu-portal.demo.et",
      verified: true,
      verifiedBy: "Mekelle University Tech Club",
      likes: 67,
      date: "July 2026"
    },
    {
      id: "proj-3",
      title: "Telemedicine Appointment Booker",
      description: "Bilingual (Amharic & English) triage questionnaire and doctor scheduling interface for clinics across regional healthcare hubs.",
      technologies: ["JavaScript", "HTML5", "Tailwind CSS", "REST API"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/hilina-guesh/telemed-ethio",
      liveDemoUrl: "https://telemed-ethio.netlify.app",
      verified: true,
      verifiedBy: "HealthTech Ethiopia Challenge",
      likes: 38,
      date: "May 2026"
    }
  ],
  education: [
    {
      institution: "Mekelle University",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2023 - 2027 (Expected)",
      location: "Mekelle, Ethiopia",
      gpa: "3.84 / 4.00",
      highlights: "Dean's Honor List, Lead Organizer at MU Google Developer Student Club"
    },
    {
      institution: "Kallamino Special High School",
      degree: "Ethiopian University Entrance Certificate",
      period: "2019 - 2023",
      location: "Mekelle, Ethiopia",
      gpa: "Top 1% National Exam",
      highlights: "President of Science & Robotics Club"
    }
  ],
  certificates: [
    {
      title: "SiraHub Verified React Developer (Level 2)",
      issuer: "SiraHub Ethiopia",
      issueDate: "September 2026",
      credentialId: "SH-VER-2026-9042",
      badgeUrl: "/badges/react-cert.svg"
    },
    {
      title: "Modern JavaScript Algorithms & DOM Mastery",
      issuer: "Ethiopian Tech Council",
      issueDate: "August 2026",
      credentialId: "ETC-JS-7712",
      badgeUrl: "/badges/js-cert.svg"
    }
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Amharic", level: "Native / Bilingual" },
    { name: "Tigrigna", level: "Native / Bilingual" },
    { name: "Afaan Oromo", level: "Elementary Proficiency" }
  ],
  completedChallenges: [
    {
      id: "chal-1",
      title: "React Responsive Product Card",
      score: 85,
      maxScore: 100,
      completedDate: "Sep 18, 2026",
      status: "Verified",
      skillsGained: ["React", "Responsive Design", "Component Architecture"],
      feedback: "Exceptional visual styling and clean component decoupling. Good responsiveness across mobile and desktop breakpoints."
    },
    {
      id: "chal-2",
      title: "Modern Git Collaborative Workflow",
      score: 95,
      maxScore: 100,
      completedDate: "Aug 29, 2026",
      status: "Verified",
      skillsGained: ["Git", "GitHub Pull Requests", "Merge Conflict Resolution"],
      feedback: "Flawless branch management, meaningful semantic commit messages, and clean pull request summary."
    },
    {
      id: "chal-3",
      title: "Accessible Semantic Web Page (HTML/CSS)",
      score: 91,
      maxScore: 100,
      completedDate: "Jul 14, 2026",
      status: "Verified",
      skillsGained: ["HTML5", "CSS3", "WCAG 2.1 Accessibility"],
      feedback: "High accessibility score with proper ARIA attributes, semantic landmarks, and high contrast styling."
    }
  ],
  currentChallenge: {
    id: "chal-1",
    title: "React Responsive Product Card",
    category: "Frontend Development",
    progress: 65,
    dueDate: "Tomorrow, 6:00 PM",
    timeLeft: "18 hours left",
    skillsTested: ["React", "CSS Grid", "Responsive Design"],
    description: "Implement an interactive, accessible product card featuring price badges, discount calculation, image gallery preview, and add-to-cart state."
  }
};

export const OTHER_STUDENTS = [
  {
    id: "student-2",
    name: "Abiy Tadesse",
    headline: "Full-Stack Developer & Cloud Enthusiast",
    university: "Addis Ababa University",
    department: "Software Engineering (AAiT)",
    year: "4th Year",
    location: "Addis Ababa, Ethiopia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    availability: "Available for Junior Role",
    verifiedSkills: ["Node.js", "Python", "Docker", "SQL", "React"],
    projectsCount: 5,
    completedChallengesCount: 8,
    skillMatchPercentage: 94
  },
  {
    id: "student-3",
    name: "Hana Bekele",
    headline: "Frontend & UI/UX Product Designer",
    university: "Addis Ababa University",
    department: "Computer Science",
    year: "3rd Year",
    location: "Addis Ababa, Ethiopia",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    availability: "Open to Internship",
    verifiedSkills: ["Figma", "UI Design", "React", "CSS", "Wireframing"],
    projectsCount: 4,
    completedChallengesCount: 6,
    skillMatchPercentage: 88
  },
  {
    id: "student-4",
    name: "Dawit Alemayehu",
    headline: "Mobile Application Developer (Flutter & React Native)",
    university: "Bahir Dar University",
    department: "Information Technology",
    year: "4th Year",
    location: "Bahir Dar, Ethiopia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    availability: "Open to Internship",
    verifiedSkills: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
    projectsCount: 4,
    completedChallengesCount: 5,
    skillMatchPercentage: 82
  },
  {
    id: "student-5",
    name: "Bethlehem Tilahun",
    headline: "Backend Engineer & Systems Programmer",
    university: "Adama Science and Technology University (ASTU)",
    department: "Computer Science",
    year: "3rd Year",
    location: "Adama, Oromia, Ethiopia",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    availability: "Open to Internship",
    verifiedSkills: ["Python", "Django", "PostgreSQL", "Linux", "Git"],
    projectsCount: 3,
    completedChallengesCount: 4,
    skillMatchPercentage: 86
  },
  {
    id: "student-6",
    name: "Yohannes Haile",
    headline: "Data Analyst & Machine Learning Trainee",
    university: "Hawassa University",
    department: "Computer Science & Informatics",
    year: "4th Year",
    location: "Hawassa, Sidama, Ethiopia",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    availability: "Graduating Soon",
    verifiedSkills: ["Python", "Pandas", "SQL", "PowerBI", "NumPy"],
    projectsCount: 3,
    completedChallengesCount: 5,
    skillMatchPercentage: 79
  }
];

export const OPPORTUNITIES = [
  {
    id: "opp-1",
    title: "Frontend Development Intern",
    company: "Safaricom Ethiopia",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=160&q=80",
    location: "Addis Ababa, Ethiopia",
    workArrangement: "Hybrid",
    type: "Internship",
    duration: "3 months",
    stipend: "12,000 - 16,000 ETB / month",
    deadline: "October 15, 2026",
    postedDate: "2 days ago",
    applicantsCount: 38,
    requiredSkills: ["React", "JavaScript", "Git"],
    niceToHaveSkills: ["Tailwind CSS", "REST API Integration", "Next.js"],
    matchScore: 85,
    matchBreakdown: [
      { skill: "React", required: true, verified: true, matched: true },
      { skill: "JavaScript", required: true, verified: true, matched: true },
      { skill: "Git", required: true, verified: true, matched: true },
      { skill: "Tailwind CSS", required: false, verified: true, matched: true },
      { skill: "Next.js", required: false, verified: false, matched: false }
    ],
    description: "Join Safaricom Ethiopia's Digital Customer Solutions squad in Addis Ababa. You will collaborate with senior frontend engineers to build responsive web interfaces for our enterprise self-care applications, M-Pesa merchant dashboards, and partner management systems.",
    responsibilities: [
      "Develop reusable, high-performance UI components using modern React and JavaScript.",
      "Work closely with UI/UX designers to translate Figma design systems into pixel-perfect web pages.",
      "Collaborate with backend engineers to integrate REST APIs and WebSocket endpoints.",
      "Conduct cross-browser testing and optimize for low-bandwidth mobile connections across Ethiopian telecom networks."
    ],
    requirements: [
      "Current university student or recent graduate in Computer Science, Software Engineering, or related discipline.",
      "Demonstrated proof of React & JavaScript skills through verified SiraHub challenges or GitHub repositories.",
      "Proficiency with Git version control and pull request workflows.",
      "Strong problem-solving mindset and eagerness to learn inside an agile scrum team."
    ],
    whatYouWillLearn: [
      "Enterprise-scale React architecture and micro-frontend design patterns.",
      "Production CI/CD deployment pipelines using GitHub Actions.",
      "FinTech security standards and telecommunication billing user flows."
    ],
    applicationProcess: "1. Verified Skill Review on SiraHub -> 2. 30-min Technical Discovery Call -> 3. Final Offer"
  },
  {
    id: "opp-2",
    title: "Backend Developer Intern",
    company: "Gebeya Inc.",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=160&q=80",
    location: "Addis Ababa, Ethiopia",
    workArrangement: "Remote",
    type: "Internship",
    duration: "3 months",
    stipend: "14,000 - 18,000 ETB / month",
    deadline: "October 22, 2026",
    postedDate: "4 days ago",
    applicantsCount: 52,
    requiredSkills: ["Python", "SQL", "Git"],
    niceToHaveSkills: ["FastAPI", "Docker", "PostgreSQL"],
    matchScore: 68,
    matchBreakdown: [
      { skill: "Python", required: true, verified: false, matched: false },
      { skill: "SQL", required: true, verified: false, matched: false },
      { skill: "Git", required: true, verified: true, matched: true },
      { skill: "Docker", required: false, verified: false, matched: false }
    ],
    description: "Gebeya is looking for ambitious backend engineering interns across Ethiopian universities to work on our talent matching and EdTech microservices.",
    responsibilities: [
      "Write modular backend endpoints using Python and relational databases.",
      "Design database schemas and write optimized SQL queries.",
      "Implement authentication mechanisms and API rate limiters.",
      "Contribute to unit test suites and documentation."
    ],
    requirements: [
      "Fundamental understanding of data structures, algorithms, and relational databases.",
      "Basic experience with Python or Node.js.",
      "Proven Git knowledge."
    ],
    whatYouWillLearn: [
      "Microservice orchestration, API gateway design, and cloud database optimization.",
      "Agile sprint delivery in a Pan-African tech company."
    ],
    applicationProcess: "1. SiraHub Challenge Verification -> 2. Take-home code challenge -> 3. Culture interview"
  },
  {
    id: "opp-3",
    title: "UI/UX Design Intern",
    company: "ArifPay Financial Technologies",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=160&q=80",
    location: "Addis Ababa, Ethiopia",
    workArrangement: "On-site",
    type: "Internship",
    duration: "3 months",
    stipend: "11,000 - 15,000 ETB / month",
    deadline: "November 1, 2026",
    postedDate: "1 week ago",
    applicantsCount: 29,
    requiredSkills: ["UI Design", "Figma", "HTML/CSS"],
    niceToHaveSkills: ["Design Systems", "User Research", "Prototyping"],
    matchScore: 72,
    matchBreakdown: [
      { skill: "UI Design", required: true, verified: false, inProgress: true, matched: true },
      { skill: "HTML/CSS", required: true, verified: true, matched: true },
      { skill: "Figma", required: true, verified: false, matched: false }
    ],
    description: "ArifPay is building Ethiopia's premier point-of-sale and digital payment infrastructure. Join our product design lab to craft intuitive mobile POS interfaces and merchant web applications.",
    responsibilities: [
      "Create high-fidelity mockups and interactive wireframes in Figma.",
      "Conduct usability tests with local merchants in Merkato, Bole, and Piazza.",
      "Maintain the ArifPay design system token repository."
    ],
    requirements: [
      "Portfolio showcasing digital user interfaces or completed SiraHub design challenges.",
      "Understanding of typography, color harmony, and accessibility.",
      "Strong communication skills in Amharic and English."
    ],
    whatYouWillLearn: [
      "FinTech UX paradigms, merchant terminal design constraints, and biometric onboarding flows."
    ],
    applicationProcess: "1. Portfolio review on SiraHub -> 2. Design critique session -> 3. Offer"
  },
  {
    id: "opp-4",
    title: "Junior React Native / Mobile Developer",
    company: "Chapa Financial Technologies",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=160&q=80",
    location: "Addis Ababa, Ethiopia",
    workArrangement: "Hybrid",
    type: "Junior Job",
    duration: "Full-Time (Permanent)",
    stipend: "28,000 - 38,000 ETB / month",
    deadline: "October 30, 2026",
    postedDate: "3 days ago",
    applicantsCount: 44,
    requiredSkills: ["JavaScript", "React", "Git"],
    niceToHaveSkills: ["React Native", "TypeScript", "Mobile Deployment"],
    matchScore: 82,
    matchBreakdown: [
      { skill: "JavaScript", required: true, verified: true, matched: true },
      { skill: "React", required: true, verified: true, matched: true },
      { skill: "Git", required: true, verified: true, matched: true }
    ],
    description: "Help Chapa scale our merchant checkout and wallet applications across East Africa.",
    responsibilities: [
      "Build fluid iOS and Android experiences using React Native.",
      "Optimize animations and offline caching mechanisms for Ethiopian cellular conditions.",
      "Collaborate with security engineers on PCI-DSS payment compliance."
    ],
    requirements: [
      "Strong command of modern JavaScript (ES6+) and React principles.",
      "Demonstrated ability to build and deploy interactive mobile or web apps.",
      "Commitment to clean code, tests, and component reusability."
    ],
    whatYouWillLearn: [
      "High-volume payment gateway integration and financial cryptographic token handling."
    ],
    applicationProcess: "1. SiraHub portfolio evaluation -> 2. Technical pair programming -> 3. Offer"
  },
  {
    id: "opp-5",
    title: "Software Engineering Trainee",
    company: "Awash Bank",
    logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=160&q=80",
    location: "Addis Ababa (Headquarters)",
    workArrangement: "On-site",
    type: "Junior Job",
    duration: "12-Month Graduate Program",
    stipend: "22,000 - 26,000 ETB / month",
    deadline: "November 15, 2026",
    postedDate: "Just now",
    applicantsCount: 71,
    requiredSkills: ["JavaScript", "SQL", "Data Structures"],
    niceToHaveSkills: ["Java", "Spring Boot", "Git"],
    matchScore: 65,
    matchBreakdown: [
      { skill: "JavaScript", required: true, verified: true, matched: true },
      { skill: "Data Structures", required: true, verified: false, inProgress: true, matched: true },
      { skill: "SQL", required: true, verified: false, matched: false }
    ],
    description: "The Awash Bank Tech Graduate Accelerator provides intensive hands-on rotational training across core banking, omnichannel mobile apps, and IT infrastructure.",
    responsibilities: [
      "Participate in core banking modernization projects.",
      "Build internal automation scripts and audit dashboards.",
      "Shadow lead architects on enterprise cloud migrations."
    ],
    requirements: [
      "B.Sc. graduate or final year student in CS, SE, IT, or Electrical Engineering from recognized Ethiopian universities.",
      "Strong foundational algorithmic and database skills."
    ],
    whatYouWillLearn: [
      "Enterprise banking protocols, ISO 20022 standards, and high-availability clustered architectures."
    ],
    applicationProcess: "1. SiraHub Skill Screening -> 2. Aptitude & Code Exam -> 3. Panel Interview"
  },
  {
    id: "opp-6",
    title: "Frontend Web Developer (Remote Trainee)",
    company: "Ethio Telecom",
    logo: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=160&q=80",
    location: "Mekelle / Remote",
    workArrangement: "Remote",
    type: "Internship",
    duration: "4 months",
    stipend: "13,500 ETB / month",
    deadline: "October 18, 2026",
    postedDate: "5 days ago",
    applicantsCount: 62,
    requiredSkills: ["React", "HTML/CSS", "JavaScript"],
    niceToHaveSkills: ["REST API", "Git"],
    matchScore: 92,
    matchBreakdown: [
      { skill: "React", required: true, verified: true, matched: true },
      { skill: "HTML/CSS", required: true, verified: true, matched: true },
      { skill: "JavaScript", required: true, verified: true, matched: true },
      { skill: "Git", required: false, verified: true, matched: true }
    ],
    description: "Support regional portal modernization for Telebirr partner integrations and customer dashboard features.",
    responsibilities: [
      "Implement user interfaces matching official Telebirr design guidelines.",
      "Optimize assets and client bundles for edge network latency."
    ],
    requirements: [
      "Verified React proficiency and portfolio proof on SiraHub.",
      "Available for 20 hours/week minimum during university semester."
    ],
    whatYouWillLearn: [
      "Massive scale web app performance and Telebirr merchant APIs."
    ],
    applicationProcess: "1. Verified profile match -> 2. Interview"
  }
];

export const SKILL_CHALLENGES = [
  {
    id: "chal-1",
    title: "React Responsive Product Card",
    category: "Frontend Development",
    difficulty: "Intermediate",
    estimatedTime: "2 hours",
    studentsAttempted: 432,
    successRate: "78%",
    skillsTested: ["React", "CSS Grid & Flexbox", "Responsive Design", "State Management"],
    shortDescription: "Build a responsive, interactive product card component using React and clean modern styling.",
    longDescription: "In this challenge, you will construct a production-ready product card modeled after Ethiopian digital marketplaces. Your component must seamlessly adapt between desktop grid layouts and single-column mobile viewports, handle interactive image carousels, show discounted ETB pricing, and manage cart increment actions.",
    requirements: [
      "Responsive layout that adapts cleanly from 320px mobile screens to wide desktop monitors.",
      "Reusable, modular React component architecture with clean prop delegation.",
      "Display item title, category, seller badge, price in Ethiopian Birr (ETB), and discount tag.",
      "Include interactive states: hover elevation, image thumbnail switching, and 'Add to Cart' button with loading and success feedback.",
      "Clean CSS or Tailwind styling without horizontal overflows.",
      "Semantic HTML tags and keyboard accessibility."
    ],
    deliverables: [
      "GitHub Repository URL with clear README and code structure.",
      "Working Live Demo URL (e.g. Vercel, Netlify, or GitHub Pages).",
      "Screenshots of desktop and mobile views.",
      "Brief written explanation of architecture choices."
    ],
    sampleCode: `// Example Component Shell
export function ProductCard({ product, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="product-card group relative bg-white rounded-2xl shadow-sm border border-slate-200">
      {/* Implement responsive media, badge, and Birr price */}
    </div>
  );
}`
  },
  {
    id: "chal-2",
    title: "Node.js REST API with JWT Authentication",
    category: "Backend Development",
    difficulty: "Intermediate",
    estimatedTime: "3 hours",
    studentsAttempted: 298,
    successRate: "69%",
    skillsTested: ["Node.js", "Express", "JWT Auth", "Password Hashing", "Input Validation"],
    shortDescription: "Implement a secure authentication microservice featuring registration, login, and protected routes.",
    longDescription: "Construct a robust Node.js and Express RESTful authentication service. The service must hash passwords with bcrypt, issue JSON Web Tokens with expiry, enforce authorization middleware on protected student profile endpoints, and return standard RFC-compliant error payloads.",
    requirements: [
      "Endpoints: POST /api/auth/register, POST /api/auth/login, GET /api/auth/me (protected).",
      "Secure password hashing using bcrypt with salt rounds >= 10.",
      "JWT generation with configurable expiration and Bearer token extraction middleware.",
      "Comprehensive request payload validation and sanitized responses."
    ],
    deliverables: ["GitHub Repository URL", "Postman / Thunder Client collection or live demo", "Technical notes"]
  },
  {
    id: "chal-3",
    title: "Basic Portfolio Page (HTML/CSS)",
    category: "Web Fundamentals",
    difficulty: "Beginner",
    estimatedTime: "1.5 hours",
    studentsAttempted: 840,
    successRate: "92%",
    skillsTested: ["HTML5", "CSS3", "Flexbox", "Typography"],
    shortDescription: "Craft an elegant, semantic personal portfolio page with zero JavaScript dependencies.",
    longDescription: "Demonstrate foundational web development fluency by building a clean, responsive single-page personal resume and showcase using semantic HTML5 tags and pure CSS.",
    requirements: [
      "Semantic tags: <header>, <main>, <section>, <article>, <footer>.",
      "Responsive typography and navigation menu.",
      "Contact form markup with proper input types and label bindings.",
      "High WCAG color contrast."
    ],
    deliverables: ["GitHub Repository URL", "Live GitHub Pages link"]
  },
  {
    id: "chal-4",
    title: "Ethiopian Mobile Banking UI with Tailwind",
    category: "Mobile & UI Design",
    difficulty: "Intermediate",
    estimatedTime: "2.5 hours",
    studentsAttempted: 310,
    successRate: "74%",
    skillsTested: ["Tailwind CSS", "Mobile UI", "Component Design", "FinTech Patterns"],
    shortDescription: "Design a high-fidelity mobile banking dashboard supporting Telebirr & CBE Birr transfers.",
    longDescription: "Create a modern smartphone layout featuring account balances, quick transfer shortcuts, recent transaction receipts, and biometric authorization modal states.",
    requirements: [
      "Strict mobile-first viewport layout with bottom navigation.",
      "Quick actions for: Send Money, Airtime Top-Up, Pay Merchant, Scan QR.",
      "Recent transactions ledger with formatted ETB amounts and status indicators."
    ],
    deliverables: ["GitHub Repository URL", "Live Demo URL", "Figma link (optional)"]
  },
  {
    id: "chal-5",
    title: "SQL Query Optimization & University Schema",
    category: "Databases & Systems",
    difficulty: "Advanced",
    estimatedTime: "3.5 hours",
    studentsAttempted: 185,
    successRate: "61%",
    skillsTested: ["SQL", "Schema Normalization", "Indexing", "Aggregations"],
    shortDescription: "Design and optimize a multi-table database schema for university student course registration.",
    longDescription: "Model relational tables for students, departments, course prerequisites, and exam transcripts. Write advanced analytical queries computing semester GPA distributions, identifying students at risk of probation, and creating indexes to accelerate high-volume queries.",
    requirements: [
      "DDL scripts normalizing entities to 3rd Normal Form (3NF).",
      "Complex JOINs, window functions (RANK, ROW_NUMBER), and GROUP BY aggregations.",
      "EXPLAIN ANALYZE query plans demonstrating index performance gains."
    ],
    deliverables: ["SQL file on GitHub", "Query benchmark report"]
  }
];

export const APPLICATIONS = [
  {
    id: "app-1",
    company: "Safaricom Ethiopia",
    position: "Frontend Development Intern",
    appliedDate: "Sep 20, 2026",
    status: "Under Review",
    currentStage: 2, // 1: Applied, 2: Under Review, 3: Shortlisted, 4: Interview, 5: Decision
    nextStep: "Technical team reviewing your SiraHub verified React challenge and portfolio.",
    location: "Addis Ababa",
    type: "Internship",
    stipend: "14,000 ETB / mo",
    timeline: [
      { step: "Applied", date: "Sep 20, 2026", status: "completed" },
      { step: "Under Review", date: "Sep 22, 2026", status: "current" },
      { step: "Shortlisted", date: "Pending", status: "upcoming" },
      { step: "Interview", date: "Pending", status: "upcoming" },
      { step: "Decision", date: "Pending", status: "upcoming" }
    ]
  },
  {
    id: "app-2",
    company: "Gebeya Inc.",
    position: "React Developer Trainee",
    appliedDate: "Sep 15, 2026",
    status: "Interview",
    currentStage: 4,
    nextStep: "Technical video interview scheduled with Senior Lead Engineer on Zoom (Oct 2, 2:00 PM EAT).",
    location: "Remote",
    type: "Internship",
    stipend: "16,000 ETB / mo",
    timeline: [
      { step: "Applied", date: "Sep 15, 2026", status: "completed" },
      { step: "Under Review", date: "Sep 18, 2026", status: "completed" },
      { step: "Shortlisted", date: "Sep 21, 2026", status: "completed" },
      { step: "Interview", date: "Oct 2, 2026", status: "current" },
      { step: "Decision", date: "Pending", status: "upcoming" }
    ]
  },
  {
    id: "app-3",
    company: "Awash Bank",
    position: "Software Engineer Trainee",
    appliedDate: "Sep 10, 2026",
    status: "Shortlisted",
    currentStage: 3,
    nextStep: "Passed automated skill verification screening. Invited to complete cognitive & SQL assessment.",
    location: "Addis Ababa",
    type: "Junior Job",
    stipend: "24,000 ETB / mo",
    timeline: [
      { step: "Applied", date: "Sep 10, 2026", status: "completed" },
      { step: "Under Review", date: "Sep 14, 2026", status: "completed" },
      { step: "Shortlisted", date: "Sep 24, 2026", status: "current" },
      { step: "Interview", date: "Pending", status: "upcoming" },
      { step: "Decision", date: "Pending", status: "upcoming" }
    ]
  },
  {
    id: "app-4",
    company: "ArifPay Financial Technologies",
    position: "UI/UX Design Intern",
    appliedDate: "Aug 28, 2026",
    status: "Accepted",
    currentStage: 5,
    nextStep: "Offer Letter Sent! Congratulations Hilina. Onboarding commences November 3, 2026.",
    location: "Addis Ababa",
    type: "Internship",
    stipend: "15,000 ETB / mo",
    timeline: [
      { step: "Applied", date: "Aug 28, 2026", status: "completed" },
      { step: "Under Review", date: "Sep 02, 2026", status: "completed" },
      { step: "Shortlisted", date: "Sep 08, 2026", status: "completed" },
      { step: "Interview", date: "Sep 14, 2026", status: "completed" },
      { step: "Accepted", date: "Sep 22, 2026", status: "completed" }
    ]
  },
  {
    id: "app-5",
    company: "Ethio Telecom",
    position: "Frontend Web Developer (Trainee)",
    appliedDate: "Sep 23, 2026",
    status: "Submitted",
    currentStage: 1,
    nextStep: "Application submitted successfully. Awaiting recruiter review.",
    location: "Mekelle / Remote",
    type: "Internship",
    stipend: "13,500 ETB / mo",
    timeline: [
      { step: "Applied", date: "Sep 23, 2026", status: "completed" },
      { step: "Under Review", date: "Pending", status: "upcoming" },
      { step: "Shortlisted", date: "Pending", status: "upcoming" },
      { step: "Interview", date: "Pending", status: "upcoming" },
      { step: "Decision", date: "Pending", status: "upcoming" }
    ]
  }
];

export const NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "Challenge Verified: React Product Card",
    message: "Your submission for 'React Responsive Product Card' was evaluated. Score: 85/100! 'React' and 'Responsive Design' are now officially verified on your profile.",
    timestamp: "2 hours ago",
    read: false,
    type: "challenge",
    link: "/profile"
  },
  {
    id: "notif-2",
    title: "Interview Invitation from Gebeya Inc.",
    message: "Gebeya Inc. has invited you for a Technical Interview for the React Developer Trainee position on Oct 2, 2:00 PM EAT.",
    timestamp: "5 hours ago",
    read: false,
    type: "interview",
    link: "/applications"
  },
  {
    id: "notif-3",
    title: "New Matched Opportunity: Safaricom Ethiopia",
    message: "Safaricom Ethiopia posted 'Frontend Development Intern' with an 85% match to your verified skills.",
    timestamp: "1 day ago",
    read: true,
    type: "opportunity",
    link: "/opportunities/opp-1"
  },
  {
    id: "notif-4",
    title: "Offer Received: ArifPay",
    message: "ArifPay Financial Technologies has issued an official internship offer letter for you.",
    timestamp: "3 days ago",
    read: true,
    type: "offer",
    link: "/applications"
  }
];

export const UNIVERSITIES = [
  { name: "Mekelle University", location: "Mekelle, Tigray", studentsCount: "32,000+", verifiedTalent: 840 },
  { name: "Addis Ababa University", location: "Addis Ababa", studentsCount: "48,000+", verifiedTalent: 1420 },
  { name: "Bahir Dar University", location: "Bahir Dar, Amhara", studentsCount: "35,000+", verifiedTalent: 690 },
  { name: "Hawassa University", location: "Hawassa, Sidama", studentsCount: "28,000+", verifiedTalent: 520 },
  { name: "Adama Science and Technology University", location: "Adama, Oromia", studentsCount: "12,000+", verifiedTalent: 760 },
  { name: "University of Gondar", location: "Gondar, Amhara", studentsCount: "25,000+", verifiedTalent: 410 },
  { name: "Jimma University", location: "Jimma, Oromia", studentsCount: "30,000+", verifiedTalent: 580 }
];

export const TRUSTED_COMPANIES = [
  { name: "Safaricom Ethiopia", sector: "Telecommunications & FinTech", verifiedHires: 64 },
  { name: "Ethio Telecom", sector: "Telecommunications & Telebirr", verifiedHires: 112 },
  { name: "Gebeya Inc.", sector: "Pan-African Tech Marketplace", verifiedHires: 85 },
  { name: "ArifPay", sector: "Digital Payments & POS", verifiedHires: 32 },
  { name: "Chapa", sector: "Payment Gateway", verifiedHires: 28 },
  { name: "Awash Bank", sector: "Banking & Financial Services", verifiedHires: 47 },
  { name: "Dashen Bank", sector: "Banking & Amole Services", verifiedHires: 39 },
  { name: "Kifiya Financial", sector: "Digital Infrastructure & Agri-Tech", verifiedHires: 24 }
];

export const UNIVERSITY_ANALYTICS = {
  universityName: "Mekelle University",
  careerOffice: "Institute of Technology Career & Placement Center",
  stats: {
    totalStudents: 4820,
    seekingOpportunities: 1240,
    activeInternships: 420,
    applicationsSubmitted: 3150,
    studentsPlaced: 380,
    placementRate: "79.2%",
    topSkill: "React & Modern Web"
  },
  popularSkills: [
    { name: "React", studentsCount: 420, verifiedRatio: 72 },
    { name: "Python", studentsCount: 510, verifiedRatio: 58 },
    { name: "JavaScript", studentsCount: 680, verifiedRatio: 84 },
    { name: "Data Structures", studentsCount: 390, verifiedRatio: 45 },
    { name: "Git & GitHub", studentsCount: 710, verifiedRatio: 88 },
    { name: "SQL", studentsCount: 340, verifiedRatio: 51 }
  ],
  skillGaps: [
    { skill: "Docker & Cloud Deployments", companyDemand: "High (68%)", studentReadiness: "Low (22%)", action: "Launch SiraHub Cloud Challenge Cohort" },
    { skill: "PostgreSQL & Database Indexing", companyDemand: "High (62%)", studentReadiness: "Medium (41%)", action: "Host Hands-on DB Workshop" },
    { skill: "Mobile Development (Flutter/React Native)", companyDemand: "Medium (54%)", studentReadiness: "Low (19%)", action: "Partner with regional software firms" }
  ]
};

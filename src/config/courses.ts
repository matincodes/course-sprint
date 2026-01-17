export interface CourseData {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  monthlyPrice: string;
  startDate: string;
  duration: string;
  maxStudents: number;
  whyThisCourse: {
    title: string;
    description: string;
    icon: string;
  }[];
  curriculum: {
    week: number;
    title: string;
    topics: string[];
  }[];
  instructor: {
    name: string;
    title: string;
    image: string;
    bio: string;
  };
  outcomes: string[];
  salaryRange: {
    min: string;
    max: string;
  };
}

export const courses: Record<string, CourseData> = {
  'backend-sprint': {
    slug: 'backend-sprint',
    title: 'Junior Backend Developer Sprint',
    subtitle: '12 Weeks. Real Projects. Job Ready.',
    price: 'N60,000',
    monthlyPrice: 'N20,000',
    startDate: 'Feb 21, 2026',
    duration: '12 Weeks',
    maxStudents: 20,
    whyThisCourse: [
      {
        title: 'Workplace Simulation',
        description: 'JIRA & Standups, not just Homework. Experience real-world development workflows from day one.',
        icon: 'briefcase',
      },
      {
        title: 'Fintech Focus',
        description: 'Build a Digital Wallet API. Create production-ready financial infrastructure that powers Africa.',
        icon: 'wallet',
      },
      {
        title: 'Internship Opportunity',
        description: 'Top 3 Grads get ThynkCity Internship. Prove your skills and join our team.',
        icon: 'trophy',
      },
    ],
    curriculum: [
      {
        week: 1,
        title: 'Python Fundamentals',
        topics: [
          'Variables, Data Types & Control Flow',
          'Functions & Modules',
          'Object-Oriented Programming Basics',
          'Error Handling & Debugging',
        ],
      },
      {
        week: 2,
        title: 'Web Development Basics',
        topics: [
          'HTTP Protocol & REST APIs',
          'Introduction to Flask',
          'Request/Response Handling',
          'JSON & Data Serialization',
        ],
      },
      {
        week: 3,
        title: 'Database Design',
        topics: [
          'SQL Fundamentals',
          'Database Modeling & ERDs',
          'PostgreSQL Setup & Configuration',
          'CRUD Operations & Queries',
        ],
      },
      {
        week: 4,
        title: 'API Development I',
        topics: [
          'Building RESTful Endpoints',
          'Authentication & Authorization',
          'JWT Tokens & Sessions',
          'API Documentation with Swagger',
        ],
      },
      {
        week: 5,
        title: 'Testing & Quality',
        topics: [
          'Unit Testing with Pytest',
          'Integration Testing',
          'Test-Driven Development (TDD)',
          'Code Quality & Linting',
        ],
      },
      {
        week: 6,
        title: 'Fintech Project Kickoff',
        topics: [
          'Digital Wallet Architecture',
          'Payment Processing Concepts',
          'Security Best Practices',
          'Project Planning & Sprint Setup',
        ],
      },
      {
        week: 7,
        title: 'User Management System',
        topics: [
          'User Registration & Login',
          'Password Hashing & Security',
          'Email Verification',
          'Profile Management',
        ],
      },
      {
        week: 8,
        title: 'Wallet Core Features',
        topics: [
          'Account Creation & Management',
          'Balance Tracking',
          'Transaction Recording',
          'Ledger System Design',
        ],
      },
      {
        week: 9,
        title: 'Payment Integration',
        topics: [
          'Third-party API Integration',
          'Webhook Handling',
          'Paystack Integration',
          'Transaction Verification',
        ],
      },
      {
        week: 10,
        title: 'Advanced Features',
        topics: [
          'Transfer Between Wallets',
          'Transaction History',
          'Notifications System',
          'Rate Limiting & Throttling',
        ],
      },
      {
        week: 11,
        title: 'Deployment & DevOps',
        topics: [
          'Environment Configuration',
          'Docker Containerization',
          'CI/CD Pipelines',
          'Monitoring & Logging',
        ],
      },
      {
        week: 12,
        title: 'Production & Scale',
        topics: [
          'Performance Optimization',
          'Security Audit',
          'Load Testing',
          'Final Presentation & Demo',
        ],
      },
    ],
    instructor: {
      name: 'Thynkcity Developers',
      title: 'Lead Instructors',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Industry veterans with 5+ years of experience building fintech solutions for African markets.',
    },
    outcomes: [
      'Build and deploy a production-ready Digital Wallet API',
      'Master backend development with Python, Flask, and PostgreSQL',
      'Implement secure authentication and payment processing',
      'Write clean, tested, and documented code',
      'Work with Git, JIRA, and agile methodologies',
      'Pass technical interviews at Nigerian tech companies',
    ],
    salaryRange: {
      min: 'N250k',
      max: 'N400k',
    },
  },
};

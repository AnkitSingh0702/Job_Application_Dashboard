import type { Job } from "../types"
import { v4 as uuidv4 } from "uuid"

export const jobs: Job[] = [
  {
    id: uuidv4(),
    company: {
      name: "Google",
      logo: "FcGoogle",
    },
    title: "Software Engineer",
    rating: 4.5,
    reviews: 120,
    location: "Mountain View, CA",
    tags: ["Software Engineering", "Full-time", "Remote"],
    salary: {
      amount: 120,
      period: "year",
    },
    description:
      "We're looking for a Software Engineer to join our team and help build the next generation of Google products.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in software development",
      "Strong knowledge of JavaScript, TypeScript, and React",
      "Experience with cloud platforms (GCP preferred)",
    ],
    responsibilities: [
      "Design and implement new features",
      "Write clean, maintainable code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
    ],
  },
  {
    id: uuidv4(),
    company: {
      name: "Facebook",
      logo: "FaFacebook",
    },
    title: "Data Scientist",
    rating: 4.2,
    reviews: 80,
    location: "Menlo Park, CA",
    tags: ["Data Science", "Full-time", "On-site"],
    salary: {
      amount: 150,
      period: "year",
    },
    description:
      "Join our Data Science team to help analyze and interpret complex data sets to drive business decisions.",
    requirements: [
      "Master's or PhD in Statistics, Mathematics, or related field",
      "3+ years of experience in data science",
      "Proficiency in Python and SQL",
      "Experience with machine learning frameworks",
    ],
    responsibilities: [
      "Develop and implement statistical models",
      "Analyze large datasets",
      "Create data visualizations",
      "Present findings to stakeholders",
    ],
  },
  {
    id: uuidv4(),
    company: {
      name: "Amazon",
      logo: "FaAmazon",
    },
    title: "Product Manager",
    rating: 4,
    reviews: 60,
    location: "Seattle, WA",
    tags: ["Product Management", "Full-time", "Hybrid"],
    salary: {
      amount: 180,
      period: "year",
    },
    description: "We're seeking a Product Manager to drive the strategy and execution of key Amazon products.",
    requirements: [
      "Bachelor's degree in Business, Computer Science, or related field",
      "4+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
    ],
    responsibilities: [
      "Define product strategy and roadmap",
      "Work with engineering teams to deliver features",
      "Analyze market trends and competition",
      "Gather and prioritize product requirements",
    ],
  },
  {
    id: uuidv4(),
    company: {
      name: "Spotify",
      logo: "FaSpotify",
    },
    title: "QA Engineer",
    rating: 4,
    reviews: 42,
    location: "Rome, It",
    tags: ["QA Engineer", "Full-time", "Hybrid"],
    salary: {
      amount: 180,
      period: "year",
    },
    description: "We're seeking a QA Engineer to drive the strategy .",
    requirements: [
      "Bachelor's degree in Business, Computer Science, or related field",
      "4+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
    ],
    responsibilities: [
      "Define product strategy and roadmap",
      "Work with engineering teams to deliver features",
      "Analyze market trends and competition",
      "Gather and prioritize product requirements",
    ],
  },
]


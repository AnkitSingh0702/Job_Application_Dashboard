export interface Job {
    id: string
    company: {
      name: string
      logo: string
    }
    title: string
    rating: number
    reviews: number
    location: string
    tags: string[]
    salary: {
      amount: number
      period: string
    }
    description: string
    requirements: string[]
    responsibilities: string[]
  }
  
  export interface JobApplication {
    jobId: string
    fullName: string
    email: string
    phone: string
    resume: File | null
    coverLetter: string
    status: "pending" | "reviewed" | "accepted" | "rejected"
    appliedAt: Date
  }
  
  export interface FilterState {
    role: string
    location: string
    experience: string
    salaryType: string
    salaryRange: number[]
    employmentType: string[]
  }
  
  
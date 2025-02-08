"use client"

import { useJobs } from "@/context/JobContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function JobDetails() {
  const { state } = useJobs()
  const params = useParams()
  const job = state.jobs.find((j) => j.id === params.id)

  if (!job) return <div>Job not found</div>

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-2xl font-bold">Job Details</h1>
      <Button variant="outline" className="mb-4" asChild>
        <Link href="/">Back to Jobs</Link>
      </Button>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <Button asChild>
                <Link href={`/jobs/${job.id}/apply`}>Apply Now</Link>
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < job.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                  />
                ))}
                <span className="ml-1 text-sm text-muted-foreground">({job.reviews} Reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Job Description</h2>
            <p className="mt-4 text-muted-foreground">{job.description}</p>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Requirements</h2>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Responsibilities</h2>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Job Overview</h2>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Salary</dt>
                <dd className="mt-1 text-lg font-semibold">
                  ${job.salary.amount}k/{job.salary.period}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Company</dt>
                <dd className="mt-1">{job.company.name}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}


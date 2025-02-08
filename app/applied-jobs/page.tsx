"use client"

import { useJobs } from "@/context/JobContext"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AppliedJobs() {
  const { state } = useJobs()

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-2xl font-bold">Applied Jobs</h1>
      <Button variant="outline" className="mb-4" asChild>
        <Link href="/">Back to Jobs</Link>
      </Button>
      
      <div className="grid gap-6">
        {state.appliedJobs.map((application) => {
          const job = state.jobs.find((j) => j.id === application.jobId)
          if (!job) return null

          return (
            <Card key={application.jobId}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-sm text-muted-foreground">{job.company.name}</p>
                  </div>
                  <Badge>{application.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Applied On</dt>
                    <dd>{format(new Date(application.appliedAt), "MMM dd, yyyy")}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                    <dd>{job.location}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          )
        })}
        {state.appliedJobs.length === 0 && (
          <div className="text-center text-muted-foreground">You haven't applied to any jobs yet.</div>
        )}
      </div>
    </div>
  )
}


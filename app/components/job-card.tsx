import type { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, BookmarkIcon, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook, FaAmazon } from "react-icons/fa"
import type { Job } from "../types"

const iconMap: { [key: string]: JSX.Element } = {
  FcGoogle: <FcGoogle className="h-12 w-12" />,
  FaFacebook: <FaFacebook className="h-12 w-12 text-blue-600" />,
  FaAmazon: <FaAmazon className="h-12 w-12 text-yellow-500" />,
}

export function JobCard(job: Job) {
  return (
    <Card className="group relative overflow-hidden transition-colors hover:border-primary">
      <Button variant="ghost" size="icon" className="absolute right-4 top-4">
        <BookmarkIcon className="h-4 w-4" />
      </Button>
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <div className="h-12 w-12 overflow-hidden rounded-lg flex items-center justify-center bg-white">
          {iconMap[job.company.logo] ? (
            iconMap[job.company.logo]
          ) : (
            <Image
              src={job.company.logo || "/placeholder.svg"}
              alt={job.company.name}
              width={48}
              height={48}
              className="h-full w-full"
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{job.title}</h3>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < job.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({job.reviews} Reviews)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {job.location}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div>
          <span className="text-lg font-bold">${job.salary.amount}k</span>
          <span className="text-sm text-muted-foreground">/{job.salary.period}</span>
        </div>
        <Button asChild>
          <Link href={`/jobs/${job.id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


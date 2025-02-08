"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, DollarSign } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export function SearchFilters() {
  const [salaryRange, setSalaryRange] = useState([600, 1200])
  const commonSelectClasses = "flex-1 min-w-[160px]"
  const commonTriggerClasses =
    "h-full w-full border-0 bg-transparent hover:bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"

  return (
    <div className="w-full border-b border-border/40">
      <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1.2fr] gap-0 px-4">
        {/* Role Selection */}
        <div className={cn("flex h-16 items-center gap-2 border-r pr-6 px-4", commonSelectClasses)}>
          <Search className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className={commonTriggerClasses}>
              <SelectValue placeholder="Designer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Work Location */}
        <div className={cn("flex h-16 items-center gap-2 border-r pr-6 px-4", commonSelectClasses)}>
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className={commonTriggerClasses}>
              <SelectValue placeholder="Work Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="onsite">On-site</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Experience */}
        <div className={cn("flex h-16 items-center gap-2 border-r pr-6 px-4", commonSelectClasses)}>
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className={commonTriggerClasses}>
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entry">Entry Level</SelectItem>
              <SelectItem value="mid">Mid Level</SelectItem>
              <SelectItem value="senior">Senior Level</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Salary Type */}
        <div className={cn("flex h-16 items-center gap-2 border-r pr-6 px-4", commonSelectClasses)}>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className={commonTriggerClasses}>
              <SelectValue placeholder="Per month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Per month</SelectItem>
              <SelectItem value="yearly">Per year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Salary Range */}
        <div className="flex h-16  px-4 ">
          <div className="w-full">
            <div className=" text-sm text-muted-foreground">Salary Range</div>
            <div className="relative pt-2">
              <Slider
                value={salaryRange}
                onValueChange={setSalaryRange}
                min={600}
                max={1200}
                step={100}
                className="w-full"
              />
              <div className="absolute -bottom-6 flex w-full justify-between text-xs text-muted-foreground">
                <span>${salaryRange[0]}</span>
                <span>${salaryRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface FilterGroupProps {
  title: string
  options: {
    id: string
    label: string
  }[]
}

function FilterGroup({ title, options }: FilterGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm text-muted-foreground">{title}</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox id={option.id} />
            <Label htmlFor={option.id} className="text-sm font-normal">
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Sidebar() {
  const workingSchedule = [
    { id: "full-time", label: "Full Time" },
    { id: "internship", label: "Internship" },
    { id: "freelance", label: "Freelance" },
    { id: "contractual", label: "Contractual" },
  ]

  const employmentType = [
    { id: "full-day", label: "Full day" },
    { id: "flexible", label: "Flexible schedule" },
    { id: "remote", label: "Distant work" },
  ]

  return (
    <div className="w-full max-w-[250px] space-y-6 ml-9 mt-9">
      <Card className="bg-card/50">
        <CardHeader className="space-y-1 pb-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Fingerprint className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-center text-lg font-semibold">Update your data!</h2>
          <p className="text-center text-sm text-muted-foreground">Update your data and find the best opportunities</p>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-[#40E6D2] text-black hover:bg-[#40E6D2]/90">Update your data</Button>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Filters</h2>
        <FilterGroup title="Working schedule" options={workingSchedule} />
        <FilterGroup title="Employment type" options={employmentType} />
      </div>
    </div>
  )
}


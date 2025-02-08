"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, DollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function SearchFilters() {
  const [salaryRange, setSalaryRange] = useState([600, 1200]);

  return (
    <div className="w-full border-b border-border/40 px-4 py-4">
      {/* Responsive Grid: Adjusts for mobile and desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Role Selection */}
        <div className="flex items-center gap-2 border border-border rounded-md p-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className="w-full bg-transparent border-none focus:ring-0">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Work Location */}
        <div className="flex items-center gap-2 border border-border rounded-md p-3">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className="w-full bg-transparent border-none focus:ring-0">
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
        <div className="flex items-center gap-2 border border-border rounded-md p-3">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className="w-full bg-transparent border-none focus:ring-0">
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
        <div className="flex items-center gap-2 border border-border rounded-md p-3">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className="w-full bg-transparent border-none focus:ring-0">
              <SelectValue placeholder="Salary Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Per month</SelectItem>
              <SelectItem value="yearly">Per year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Salary Range */}
        <div className="flex flex-col border border-border rounded-md p-3">
          <span className="text-sm text-muted-foreground">Salary Range</span>
          <Slider
            value={salaryRange}
            onValueChange={setSalaryRange}
            min={600}
            max={1200}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>${salaryRange[0]}</span>
            <span>${salaryRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

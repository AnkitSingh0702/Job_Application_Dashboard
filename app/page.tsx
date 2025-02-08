"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import { SearchFilters } from "./components/search-filter";
import { Sidebar } from "./components/sidebar";
import { JobCard } from "./components/job-card";
import { useJobs } from "@/context/JobContext"


export default function Home() {
  const { state } = useJobs()
  return (
    <><Navbar /> 
    <SearchFilters />
    <main className="flex-1 py-8">
      <div className="flex gap-8 px-4">
        <Sidebar />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Recommended Jobs <span className="ml-2 text-sm text-muted-foreground">{state.jobs.length}</span>
            </h2>
            <select className="text-sm text-muted-foreground">
              <option>Last updated</option>
              <option>Most relevant</option>
              <option>Highest salary</option>
            </select>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {state.jobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </main>
    
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { SearchFilters } from "./components/search-filter";
import { Sidebar } from "./components/sidebar";
import { JobCard } from "./components/job-card";
import { useJobs } from "@/context/JobContext";

export default function Home() {
  const { state } = useJobs();
  const [jobs, setJobs] = useState(state.jobs); 

  useEffect(() => {
    setJobs(state.jobs);
  }, [state.jobs]); 

  return (
    <>
      <Navbar />
      <SearchFilters />
      <main className="flex-1 py-8 px-4">
  <div className="flex flex-col md:flex-row gap-6">
    {/* Sidebar - Stacks on small screens */}
    <Sidebar  />

    {/* Job Listings Section */}
    <div className="flex-1">
      {/* Header Section: Responsive title & dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold">
          Recommended Jobs <span className="ml-2 text-sm text-muted-foreground">{jobs.length}</span>
        </h2>
        <select className="text-sm text-muted-foreground p-2 border rounded-md">
          <option>Last updated</option>
          <option>Most relevant</option>
          <option>Highest salary</option>
        </select>
      </div>

      {/* Job Cards Grid - Adjusts columns based on screen size */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  </div>
</main>

    </>
  );
}

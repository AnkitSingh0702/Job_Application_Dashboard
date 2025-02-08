"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { SearchFilters } from "./components/search-filter";
import { Sidebar } from "./components/sidebar";
import { JobCard } from "./components/job-card";
import { useJobs } from "@/context/JobContext";

export default function Home() {
  const { state } = useJobs();
  const [jobs, setJobs] = useState(state.jobs); // Local state to avoid SSR mismatch

  useEffect(() => {
    setJobs(state.jobs);
  }, [state.jobs]); // Sync when state updates

  return (
    <>
      <Navbar />
      <SearchFilters />
      <main className="flex-1 py-8">
        <div className="flex gap-8 px-4">
          <Sidebar />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Recommended Jobs <span className="ml-2 text-sm text-muted-foreground">{jobs.length}</span>
              </h2>
              <select className="text-sm text-muted-foreground">
                <option>Last updated</option>
                <option>Most relevant</option>
                <option>Highest salary</option>
              </select>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

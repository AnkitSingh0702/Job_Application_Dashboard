"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"
import type { Job, JobApplication, FilterState } from "../app/types"
import { jobs } from "../app/data/job" // Updated import path

interface State {
  jobs: Job[]
  appliedJobs: JobApplication[]
  filters: FilterState
}

type Action =
  | { type: "SET_FILTER"; payload: Partial<FilterState> }
  | { type: "APPLY_TO_JOB"; payload: JobApplication }
  | { type: "RESET_FILTERS" }

const initialState: State = {
  jobs: jobs,
  appliedJobs: [],
  filters: {
    role: "",
    location: "",
    experience: "",
    salaryType: "month",
    salaryRange: [600, 1200],
    employmentType: [],
  },
}

const JobContext = createContext<{
  state: State
  dispatch: React.Dispatch<Action>
} | null>(null)

function jobReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      }
    case "APPLY_TO_JOB":
      return {
        ...state,
        appliedJobs: [...state.appliedJobs, action.payload],
      }
    case "RESET_FILTERS":
      return {
        ...state,
        filters: initialState.filters,
      }
    default:
      return state
  }
}

export function JobProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(jobReducer, initialState)

  return <JobContext.Provider value={{ state, dispatch }}>{children}</JobContext.Provider>
}

export function useJobs() {
  const context = useContext(JobContext)
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider")
  }
  return context
}


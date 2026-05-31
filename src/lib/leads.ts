export type LeadStatus = 'new' | 'contacted' | 'in_progress' | 'completed' | 'archived'

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  projectType: string
  budget?: string
  message?: string
  status: LeadStatus
  createdAt: string
  updatedAt: string
  notes?: string
}

export const LEADS_LIST_KEY = 'rm:leads:list'
export const leadKey = (id: string) => `rm:lead:${id}`

export function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  in_progress: 'In Progress',
  completed: 'Completed',
  archived: 'Archived',
}

export const STATUS_COLORS: Record<LeadStatus, string> = {
  new: '#c9a96e',
  contacted: '#6e9ec9',
  in_progress: '#9e6ec9',
  completed: '#6ec98a',
  archived: '#888',
}

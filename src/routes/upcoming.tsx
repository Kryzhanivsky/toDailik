import { createFileRoute } from '@tanstack/react-router'
import { UpcomingPage } from '@/pages'

export const Route = createFileRoute('/upcoming')({
  component: UpcomingPage,
})

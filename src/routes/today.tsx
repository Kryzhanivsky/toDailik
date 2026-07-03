import { createFileRoute } from '@tanstack/react-router'
import { TodayPage } from '@/pages'

export const Route = createFileRoute('/today')({
  component: TodayPage,
})

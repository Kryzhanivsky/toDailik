import { createFileRoute } from '@tanstack/react-router'
import { StickyWallPage } from '@/pages'

export const Route = createFileRoute('/sticky-wall')({
  component: StickyWallPage,
})

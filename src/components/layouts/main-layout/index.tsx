import React from 'react'
import { Outlet } from '@tanstack/react-router'
import { Sidebar } from '@/components'

export const MainLayout: React.FC = () => {
  return (
    <main className="w-full min-h-screen p-4 flex gap-4 font-semibold text-gray-700">
      <Sidebar />
      <Outlet />
    </main>
  )
}

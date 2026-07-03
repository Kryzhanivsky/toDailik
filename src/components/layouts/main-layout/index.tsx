import React from 'react'
import { Link, Outlet } from '@tanstack/react-router'

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/today" className="[&.active]:font-bold">
          today
        </Link>
        <Link to="/upcoming" className="[&.active]:font-bold">
          upcoming
        </Link>
        <Link to="/sticky-wall" className="[&.active]:font-bold">
          sticky-wall
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}

import React from 'react'
import { Link, type LinkProps } from '@tanstack/react-router'

interface ISideLinkProps extends Omit<LinkProps, 'children'> {
  counter: number
  children: React.ReactNode
  iconComponent?: React.ReactNode
}

export const SideLink: React.FC<ISideLinkProps> = ({
  children,
  iconComponent,
  counter,
  ...other
}) => {
  return (
    <Link {...other}>
      {() => (
        <div className="p-2 flex justify-between items-center gap-2 rounded-md hover:bg-gray-200 transition-all">
          {iconComponent}
          <div className="flex-1">{children}</div>
          {counter > 0 && (
            <div className="min-w-6 rounded-full bg-white text-center">{counter}</div>
          )}
        </div>
      )}
    </Link>
  )
}

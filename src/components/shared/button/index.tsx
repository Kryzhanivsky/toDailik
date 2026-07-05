import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, children, ...props }) => {
  return (
    <button
      className={twMerge(
        'p-2 w-full text-left flex items-center gap-2 rounded-md transition-all hover:bg-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

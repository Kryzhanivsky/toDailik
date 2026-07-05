import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ITagBtnProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  bgColor: string
}

export const TagBtn: React.FC<ITagBtnProps> = (props) => {
  const { bgColor, className, style, children, ...other } = props
  return (
    <button
      className={twMerge('py-2 px-4 rounded-md cursor-pointer', className)}
      style={{ ...style, backgroundColor: bgColor }}
      {...other}
    >
      {children}
    </button>
  )
}

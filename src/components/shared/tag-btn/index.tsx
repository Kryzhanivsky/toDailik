import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ITagBtnProps extends React.ComponentPropsWithoutRef<'button'> {
  bgColor: HEXColor
}

export const TagBtn: React.FC<ITagBtnProps> = (props) => {
  const { bgColor, className, style, children, ...other } = props
  return (
    <button
      className={twMerge(
        'py-2 px-4 flex items-center gap-2 rounded-md cursor-pointer',
        className
      )}
      style={{ ...style, backgroundColor: bgColor }}
      {...other}
    >
      {children}
    </button>
  )
}

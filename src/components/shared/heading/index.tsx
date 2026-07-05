import React from 'react'
import { twMerge } from 'tailwind-merge'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

const headingSizeStyles = {
  1: 'text-2xl',
  2: 'text-xl',
  3: 'text-lg',
  4: 'text-base',
  5: 'text-sm',
  6: 'text-xs',
}

interface IHeadingProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> {
  level?: HeadingLevel
}

export const Heading: React.FC<IHeadingProps> = (props) => {
  const { level = 4, children, className, ...other } = props
  const Tag = `h${level}` as const

  return (
    <Tag
      className={twMerge(
        'font-black text-sm uppercase',
        headingSizeStyles[level],
        className
      )}
      {...other}
    >
      {children}
    </Tag>
  )
}

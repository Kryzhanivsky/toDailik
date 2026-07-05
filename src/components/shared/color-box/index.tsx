import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IColorBoxProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  color: string
}

export const ColorBox: React.FC<IColorBoxProps> = ({
  color,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={twMerge('size-5 rounded-sm', className)}
      style={{ ...style, backgroundColor: color }}
      {...props}
    />
  )
}

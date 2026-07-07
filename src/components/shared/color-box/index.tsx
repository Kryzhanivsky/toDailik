import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IColorBoxProps extends React.ComponentPropsWithoutRef<'div'> {
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

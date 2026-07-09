import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export interface IDateCounterProps extends Omit<
  React.ComponentPropsWithoutRef<'p'>,
  'children'
> {
  date: Date
}

export const DateCounter: React.FC<IDateCounterProps> = ({
  date,
  className,
  ...other
}) => {
  const children = useMemo(() => date.getDate(), [date])

  return (
    <p
      className={twMerge(
        'p-2 rounded-md shadow-lg flex items-center justify-center text-4xl',
        className
      )}
      {...other}
    >
      {children}
    </p>
  )
}

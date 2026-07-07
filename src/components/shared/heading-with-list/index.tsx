import React from 'react'
import { Heading } from '@/components'
import { twMerge } from 'tailwind-merge'
import type { IHeadingProps } from '@/components/shared/heading'

interface IHeadingWithListProps<T> extends Omit<
  React.ComponentPropsWithoutRef<'section'>,
  'children'
> {
  heading: string
  items: T[]
  children: React.ReactNode | ((items: T[]) => React.ReactNode)
  headingProps?: IHeadingProps
  containerProps?: React.ComponentPropsWithoutRef<'div'>
}

export function HeadingWithList<T>(props: IHeadingWithListProps<T>) {
  const { heading, items, children, headingProps, containerProps, className, ...other } =
    props
  const { className: containerClassName, ...restContainerProps } = containerProps || {}

  const finalChildren = typeof children === 'function' ? children(items) : children

  return (
    <section className={twMerge('flex flex-col gap-2', className)} {...other}>
      <Heading {...headingProps}>{heading}</Heading>
      <div
        className={twMerge('flex flex-col gap-2', containerClassName)}
        {...restContainerProps}
      >
        {finalChildren}
      </div>
    </section>
  )
}

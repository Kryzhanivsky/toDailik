import * as Icons from '@heroicons/react/24/outline'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const iconRegistry = {
  ChevronDoubleRightIcon: Icons.ChevronDoubleRightIcon,
  ListBulletIcon: Icons.ListBulletIcon,
  DocumentIcon: Icons.DocumentIcon,
  PlusIcon: Icons.PlusIcon,
  MagnifyingGlassIcon: Icons.MagnifyingGlassIcon,
  Cog6ToothIcon: Icons.Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon: Icons.ArrowRightStartOnRectangleIcon,
  ChevronRightIcon: Icons.ChevronRightIcon,
  CalendarDaysIcon: Icons.CalendarDaysIcon,
}

export type IconName = keyof typeof iconRegistry

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: IconName
}

export const Icon = ({ name, className, ...other }: IconProps) => {
  const IconComponent = iconRegistry[name]

  if (!IconComponent) return null

  return <IconComponent className={twMerge('size-5', className)} {...other} />
}

import type { IconName } from '@/utils'
import type { ToOptions } from '@tanstack/react-router'

export interface SidebarViewsDataType {
  id: number
  iconName: IconName
  counter: number
  to: ToOptions['to']
  label: string
}

export interface SidebarListsDataType {
  id: number
  color: string
  counter: number
  to: ToOptions['to']
  label: string
}

export interface SidebarTagsDataType {
  id: number
  bgColor: HEXColor
  label: string
}

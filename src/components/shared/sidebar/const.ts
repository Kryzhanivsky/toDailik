import type {
  SidebarListsDataType,
  SidebarTagsDataType,
  SidebarViewsDataType,
} from '@/components/shared/sidebar/types.ts'

export const tempViewsList: SidebarViewsDataType[] = [
  {
    id: 1,
    iconName: 'ChevronDoubleRightIcon',
    counter: 3,
    to: '/upcoming',
    label: 'Upcoming',
  },
  {
    id: 2,
    iconName: 'ListBulletIcon',
    counter: 12,
    to: '/today',
    label: 'Today',
  },
  {
    id: 3,
    iconName: 'DocumentIcon',
    counter: 6,
    to: '/sticky-wall',
    label: 'Sticky Wall',
  },
]

export const tempListsList: SidebarListsDataType[] = [
  {
    id: 1,
    color: '#cd3939',
    counter: 13,
    to: '/upcoming',
    label: 'Personal',
  },
  {
    id: 2,
    color: '#582574',
    counter: 1,
    to: '/today',
    label: 'Work',
  },
  {
    id: 3,
    color: '#149275',
    counter: 7,
    to: '/sticky-wall',
    label: 'List 1',
  },
]

export const tempTagsList: SidebarTagsDataType[] = [
  {
    id: 1,
    bgColor: '#ff5979',
    label: 'Tag 1',
  },
  {
    id: 2,
    bgColor: '#75ff96',
    label: 'Tag 2',
  },
  {
    id: 3,
    bgColor: '#7574ff',
    label: 'Tag 3',
  },
  {
    id: 4,
    bgColor: '#f8f165',
    label: 'Tag 4',
  },
]

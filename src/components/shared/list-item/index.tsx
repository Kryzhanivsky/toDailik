import React from 'react'
import { Icon } from '@/utils'
import { ColorBox } from '@/components'
import type { ITask } from '@/pages/today-page/temp-data.ts'

export interface IListItemProps extends Omit<
  React.ComponentPropsWithRef<'li'>,
  'children'
> {
  item: ITask
}

const renderDateMark = (date: Date) => {
  const finalString = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

  return (
    <div className="flex items-center justify-center gap-2">
      <Icon name="CalendarDaysIcon" />
      <p>{finalString}</p>
    </div>
  )
}

const renderSubtasksMark = (value: number) => (
  <div className="flex items-center justify-center gap-2">
    <p className="size-5 flex items-center justify-center bg-gray-200 rounded-md">
      {value}
    </p>
    <p>Subtasks</p>
  </div>
)

const renderListMark = (listName: string, color: HEXColor) => (
  <div className="flex items-center justify-center gap-2">
    <ColorBox color={color} />
    <p>{listName}</p>
  </div>
)

export const ListItem: React.FC<IListItemProps> = ({ item, ...other }) => {
  const { title, list, subtasks, dueDate, isDone } = item

  return (
    <>
      <hr className="border-gray-200" />
      <li
        className="w-full p-2 flex flex-col items-start gap-4 rounded-md hover:bg-gray-100"
        {...other}
      >
        <div className="w-full flex items-center justify-between gap-4">
          <input type="checkbox" checked={isDone} onChange={() => {}} />
          <p className="flex-1">{title}</p>
          <Icon name="ChevronRightIcon" />
        </div>

        <div className="w-full flex items-center justify-start gap-10 mx-7">
          {renderDateMark(dueDate)}
          {renderSubtasksMark(subtasks.length)}
          {renderListMark(list.name, list.color)}
        </div>
      </li>
    </>
  )
}

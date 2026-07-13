import React, { useMemo } from 'react'
import { DateCounter, Heading, ListItem } from '@/components'
import { tempData } from '@/pages/today-page/temp-data.ts'

export const TodayPage: React.FC = () => {
  const content = useMemo(
    () => tempData.map((item) => <ListItem key={item.id} item={item} />),
    []
  )

  return (
    <section className="w-2/5 mx-auto flex flex-col items-center gap-4">
      <div className="w-full flex items-center gap-6">
        <Heading level={1}>Today</Heading>
        <DateCounter date={new Date()} />
      </div>
      <ul className="w-full flex flex-col gap-2">{content}</ul>
    </section>
  )
}

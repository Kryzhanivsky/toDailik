import React from 'react'
import { Heading, HeadingWithList } from '@/components'
import { Icon } from '@/utils'
import {
  tempListsList,
  tempTagsList,
  tempViewsList,
} from '@/components/shared/sidebar/const.ts'
import { renderSidebarLists } from '@/components/shared/sidebar/render-sidebar-lists.tsx'
import { renderSidebarViews } from '@/components/shared/sidebar/render-sidebar-views.tsx'
import { renderSidebarTags } from '@/components/shared/sidebar/render-sidebar-tags.tsx'

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/5 p-4 bg-gray-100 rounded-xl flex flex-col gap-6">
      <Heading level={2}>Menu</Heading>
      <div className="p-2 rounded-md flex items-center gap-2">
        <Icon name="MagnifyingGlassIcon" />
        <p className="opacity-60">Search</p>
      </div>
      <HeadingWithList heading="Tasks" items={tempViewsList}>
        {renderSidebarViews}
      </HeadingWithList>
      <HeadingWithList heading="Lists" items={tempListsList}>
        {renderSidebarLists}
      </HeadingWithList>
      <HeadingWithList
        heading="Tags"
        items={tempTagsList}
        containerProps={{ className: 'flex-row flex-wrap' }}
      >
        {renderSidebarTags}
      </HeadingWithList>
    </aside>
  )
}

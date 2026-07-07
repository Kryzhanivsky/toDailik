import { TagBtn } from '@/components'
import { Icon } from '@/utils'
import type { SidebarTagsDataType } from '@/components/shared/sidebar/types.ts'

export const renderSidebarTags = (items: SidebarTagsDataType[]) => (
  <>
    {items.map(({ id, bgColor, label }) => (
      <TagBtn key={id} bgColor={bgColor}>
        {label}
      </TagBtn>
    ))}
    <TagBtn bgColor="#e5e7eb">
      <Icon name="PlusIcon" />
      <p>Add New Tag</p>
    </TagBtn>
  </>
)

import { Button, ColorBox, SideLink } from '@/components'
import type { SidebarListsDataType } from '@/components/shared/sidebar/types.ts'
import { Icon } from '@/utils'

export const renderSidebarLists = (items: SidebarListsDataType[]) => (
  <>
    {items.map(({ id, color, label, ...other }) => (
      <SideLink key={id} iconComponent={<ColorBox color={color} />} {...other}>
        {label}
      </SideLink>
    ))}
    <Button>
      <Icon name="PlusIcon" />
      <p>Add New List</p>
    </Button>
  </>
)

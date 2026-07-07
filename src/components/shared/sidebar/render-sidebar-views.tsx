import { SideLink } from '@/components'
import { Icon } from '@/utils'
import type { SidebarViewsDataType } from '@/components/shared/sidebar/types.ts'

export const renderSidebarViews = (items: SidebarViewsDataType[]) =>
  items.map(({ id, iconName, label, ...other }) => (
    <SideLink key={id} iconComponent={<Icon name={iconName} />} {...other}>
      {label}
    </SideLink>
  ))

export type CustomisableProps = {
    colorScheme?: string
    layoutStyle?: 'grid' | 'list' | 'custom'
    isDraggable?: boolean
    isResizable?: boolean
    customCss?: Record<string, string>
    [key: string]: any
}

export type Widget = CustomisableProps & {
    id: string
    name?: string
    description?: string
    icon?: string
    component?: string
    components?: Component[]
    props?: any
    [key: string]: any
  }
  
  export type WidgetGroup = CustomisableProps & {
    id: string
    name?: string
    widgets?: Widget[]
    [key: string]: any
  }
  
  export type Dashboard = CustomisableProps & {
    id: string
    name?: string
    description?: string
    icon?: string
    widgetGroups?: WidgetGroup[]
    [key: string]: any
  }
  
  export type Feature = CustomisableProps & {
    id: string
    name?: string
    description?: string
    icon?: string
    dashboards?: Dashboard[]
    widgets?: Widget[]
    widgetOrder?: string[]
    components?: Component[]
    [key: string]: any
  }
  
  export type Component = CustomisableProps & {
    id: string
    name?: string
    description?: string
    icon?: string
    [key: string]: any
  }
  
  export type Space = CustomisableProps & {
    id: string
    name?: string
    description?: string
    icon?: string
    layout?: Layout
    [key: string]: any
  }
  
export type Layout = CustomisableProps & {
    id: string
    name?: string
    description?: string
    config?: any
    isDefault?: boolean
    isCustomisable?: boolean
    features?: Feature[]
    [key: string]: any
}

// export type CustomisableProps = {
//     isDraggable?: boolean
//     isResizable?: boolean
//     isMinimizable?: boolean
//     isMaximizable?: boolean
//     isClosable?: boolean
//     isCollapsible?: boolean
//     isExpandable?: boolean
//     isPinnable?: boolean
//     isFloating?: boolean
//     isFullscreenable?: boolean
//     isCentered?: boolean
//     isModal?: boolean
//     isMovable?: boolean
//     isSticky?: boolean
//     isStatic?: boolean
//     isStretched?: boolean
//     isScrollable?: boolean
//     isResponsive?: boolean
//     isFluid?: boolean
//     isStackable?: boolean
//     isReversed?: boolean
//     isVerticallyAligned?: boolean
//     isHorizontallyAligned?: boolean
//     isVerticallyCentered?: boolean
//     isHorizontallyCentered?: boolean
// }
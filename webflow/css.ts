export const CURRENT_CSS_CLASS = 'w--current';

export const SLIDER_CSS_CLASSES = {
  slider: 'w-slider',
  slide: 'w-slide',
  sliderMask: 'w-slider-mask',
  sliderDot: 'w-slider-dot',
} as const;

export const TABS_CSS_CLASSES = {
  tabs: 'w-tabs',
  tabsContent: 'w-tab-content',
  tabPane: 'w-tab-pane',
  tabsMenu: 'w-tab-menu',
  tabLink: 'w-tab-link',
  activeTab: 'w--tab-active',
} as const;

export const NAVBAR_CSS_CLASSES = {
  navMenu: 'w-nav-menu',
} as const;

export const CMS_CSS_CLASSES = {
  wrapper: 'w-dyn-list',
  list: 'w-dyn-items',
  item: 'w-dyn-item',
  paginationNext: 'w-pagination-next',
  paginationPrevious: 'w-pagination-previous',
} as const;

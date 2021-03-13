export type NavBarProps = {
  toggleTheme: () => void
}

export type NavItemConfigObject = {
  id: string
  path: string
  label: string
  href?: string
}

export type CreateNavItemProps = {
  configArrayOfObjects: NavItemConfigObject[]
}

export type HeroCardProps = {
  header: string
  subheaderLine1?: string | null
  subheaderLine2?: string | null
  buttonConfigArrayOfObjects?: ButtonConfigObject[] | null
}

export type ButtonConfigObject = {
  id: string
  path: string
  label: string
  href?: string
}

export type CreateButtonsProps = {
  configArrayOfObjects: ButtonConfigObject[]
}

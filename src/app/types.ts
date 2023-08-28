export type InputValues = {
  [label: string]: {
    value: any
    type: string
  }
}

export type Entries = {
  [id: string]: {
    label: string
    type: string
  }
}

export type Step = {
  slug: string
  required: boolean
  entries: Entries
}

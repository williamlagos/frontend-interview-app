import { Step } from "./types"

export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

export const commonSteps: Step[] = [{
  slug: 'email',
  required: true,
  entries: {
    'email': {
      type: 'email',
      label: 'E-mail'
    } 
  }
}, {
  slug: 'age',
  required: true,
  entries: {
    'age': {
      type: 'number',
      label: 'Age'
    }
  }
}]

export const extraSteps: Step[] = [{
  slug: 'name',
  required: true,
  entries: {
    'fname': {
      type: 'text',
      label: 'First Name'
    },
    'lname': {
      type: 'text',
      label: 'Last Name'
    }
  }
}]
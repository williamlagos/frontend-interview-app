export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

export const commonSteps = [{
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
  entries: {
    'age': {
      type: 'number',
      label: 'Age'
    }
  }
}]

export const extraSteps = [{
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
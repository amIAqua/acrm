import {
  ApplicationType,
  OmittedClientApplication,
} from '../../api/application-creation/types'

export type AddApplicationValuesType = {
  clientdId: number
  application: OmittedClientApplication
}

export const initialValuesCreate: ApplicationType = {
  client: {
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
  },
  vehicle: {
    brand: '',
    model: '',
    yearOfIssue: '',
    engineSpecification: '',
    registrationNumber: '',
    VIN: '',
  },
  issues: {
    description: '',
  },
}

export const initialValuesAdd: OmittedClientApplication = {
  vehicle: {
    brand: '',
    model: '',
    yearOfIssue: '',
    engineSpecification: '',
    registrationNumber: '',
    VIN: '',
  },
  issues: {
    description: '',
  },
}

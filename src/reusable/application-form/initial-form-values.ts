import {
  ClientType,
  IssuesType,
  VehicleType,
} from '../../api/application-creation/types'

export const client: ClientType = {
  name: '',
  surname: '',
  phoneNumber: '',
  email: '',
}

export const vehicle: VehicleType = {
  brand: '',
  model: '',
  yearOfIssue: '',
  engineSpecification: '',
  registrationNumber: '',
  VIN: '',
}

export const issues: IssuesType = {
  description: '',
}

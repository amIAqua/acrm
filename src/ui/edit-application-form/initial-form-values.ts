import {
  ApplicationFromBackend,
  ApplicationType,
} from '../../api/application-creation/types'

export const initialValues: Omit<
  ApplicationFromBackend,
  'id' | 'clientId' | 'status'
> = {
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

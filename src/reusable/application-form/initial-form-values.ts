import { IApplication } from '../../api/application-creation/types'

export const initialValues: IApplication = {
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

import { applicationFields } from '../../api/applications/types'

export const initialValues: applicationFields = {
  // client
  name: '',
  surname: '',
  phoneNumber: '',
  email: '',
  // vehicle
  brand: '',
  model: '',
  yearOfIssue: '',
  engineSpecification: '',
  registrationNumber: '',
  VIN: '',
  // issues
  description: '',
}

import { ApplicationType } from '../../api/application-creation/types'

export const initialValues: Omit<ApplicationType, 'client'> = {
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

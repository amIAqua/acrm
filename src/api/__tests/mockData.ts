import {
  ApplicationFromBackend,
  ApplicationType,
  ClientType,
  Status,
} from '../application-creation/types'

export const clients: ClientType[] = [
  {
    name: 'Alexandr',
    surname: 'Vasilev',
    phoneNumber: '+123123',
    email: '',
  },
]

export const clientApplications: ApplicationFromBackend[] = [
  {
    id: '1',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Skoda',
      yearOfIssue: '2020',
      registrationNumber: '2323RN-2',
      VIN: 'VIN',
      engineSpecification: '1.4',
    },
    issues: {
      description: 'description',
    },
    status: Status.CREATED,
  },
  {
    id: '2',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Fabia',
      yearOfIssue: '2019',
      registrationNumber: '2323RN-2',
      VIN: 'VIN2',
      engineSpecification: '1.5',
    },
    issues: {
      description: 'description2',
    },
    status: Status.IN_PROGRESS,
  },
]

export const application: ApplicationType = {
  client: {
    name: 'Alexandr',
    surname: 'Vasilev',
    phoneNumber: '+123123',
    email: '',
  },
  vehicle: {
    model: 'Octavia',
    brand: 'Skoda',
    yearOfIssue: '2020',
    registrationNumber: '2323RN-2',
    VIN: 'VIN',
    engineSpecification: '1.4',
  },
  issues: {
    description: 'description',
  },
}

export const applicationsInProgress = [
  {
    id: '1',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Skoda',
      yearOfIssue: '2020',
      registrationNumber: '2323RN-2',
      VIN: 'VIN',
      engineSpecification: '1.4',
    },
    issues: {
      description: 'description',
    },
    status: Status.IN_PROGRESS,
  },
  {
    id: '2',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Fabia',
      yearOfIssue: '2019',
      registrationNumber: '2323RN-2',
      VIN: 'VIN2',
      engineSpecification: '1.5',
    },
    issues: {
      description: 'description2',
    },
    status: Status.IN_PROGRESS,
  },
]

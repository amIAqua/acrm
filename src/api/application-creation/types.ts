export type ClientType = {
  id?: number
  name: string
  surname: string
  phoneNumber: string
  email?: string
}

export type VehicleType = {
  brand: string
  model: string
  yearOfIssue: string
  registrationNumber: string
  engineSpecification: string
  VIN: string
}

type IssuesType = {
  description?: string
}

export type ApplicationType = {
  client: ClientType
  vehicle: VehicleType
  issues: IssuesType
}

export enum Status {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}

export type ApplicationFromBackend = {
  id: string
  clientId: string
  vehicle: VehicleType
  status: Status
  issues: IssuesType
}

export type OmittedClientApplication = Omit<ApplicationType, 'client'>

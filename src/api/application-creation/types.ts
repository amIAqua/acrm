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

export interface IApplication {
  client: ClientType
  vehicle: VehicleType
  issues: IssuesType
}

export interface IApplicationFromBackend extends IApplication {
  id: string
  clientId: string
  status: Status
}

export enum Status {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}

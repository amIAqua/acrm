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

export type IssuesType = {
  description?: string
}

export interface IApplicationFromScratch {
  client: ClientType
  vehicle: VehicleType
  issues: IssuesType
  closed: boolean
}

export type NewClientApplicationType = Omit<IApplicationFromScratch, 'client'>

export interface IApplicationFromBackend extends IApplicationFromScratch {
  id: string
  clientId: string
  status: Status
  createdAt: string
  startedAt?: string
  closedAt?: string
  closed: boolean
}

export type ApplicationUnitType =
  | IApplicationFromScratch
  | NewClientApplicationType

export enum Status {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}

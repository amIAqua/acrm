export type applicationFields = {
  // client
  name: string
  surname?: string
  phoneNumber: string
  email?: string
  // vehicle
  brand: string
  model: string
  yearOfIssue: string
  engineSpecification: string
  registrationNumber: string
  VIN: string
  // issues
  description?: string
}

type Client = {
  name: string
  surname?: string
  phoneNumber: string
  email?: string
}

type Vehicle = {
  brand: string
  model: string
  yearOfIssue: string
  registrationNumber: string
  engineSpecification: string
  VIN: string
}

type Issues = {
  description?: string
}

export type Application = {
  client: Client
  vehicle: Vehicle
  issues: Issues
}

export type ClientApplication = {
  id: number
  vehicle: Vehicle
  issues: Issues
  createdAt: string
  updatedAt: string
  clientId: number
}

export type NewApplication = {
  brand: string
  model: string
  yearOfIssue: string
  registrationNumber: string
  engineSpecification: string
  VIN: string
  description: string
}

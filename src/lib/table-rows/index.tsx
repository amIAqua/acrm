import { Tag } from 'antd'
import {
  IApplicationFromBackend,
  ClientType,
  Status,
} from '../../api/application-creation/types'

export type TableRowType = {
  key: string
  id: string
  vehicleName: string
  engineSpecification: string
  registrationNumber: string
  yearOfIssue: string
  VIN: string
  status: Status
  description: string | ''
  client?: ClientType
  createdAt: string
  startedAt?: string
  closedAt?: string
  closed: boolean
}

export const tableRows = (
  applications: IApplicationFromBackend[]
): TableRowType[] => {
  return applications.map((application) => ({
    // key is required for table fields only
    key: application.id,
    id: application.id,
    vehicleName: `${application.vehicle.brand} ${application.vehicle.model}`,
    yearOfIssue: application.vehicle.yearOfIssue,
    engineSpecification: application.vehicle.engineSpecification,
    registrationNumber: application.vehicle.registrationNumber,
    VIN: application.vehicle.VIN,
    status: application.status,
    description: application.issues.description!,
    client: application.client,
    createdAt: application.createdAt,
    startedAt: application.startedAt,
    closedAt: application.closedAt,
    closed: application.closed,
  }))
}

export const statusRow = (status: Status) => {
  switch (status) {
    case 'IN_PROGRESS':
      return (
        <Tag color={'blue'} key={status}>
          {status.toUpperCase()}
        </Tag>
      )
    case 'CREATED':
      return (
        <Tag color={'yellow'} key={status}>
          {status.toUpperCase()}
        </Tag>
      )
    case 'CLOSED':
      return (
        <Tag color={'green'} key={status}>
          {status.toUpperCase()}
        </Tag>
      )
  }
}

import { Space, Tag } from 'antd'
import {
  ApplicationFromBackend,
  ClientType,
  Status,
} from '../../api/application-creation/types'
import { ApplicationInProgressType } from '../../api/in-progress/types'
import { changeStatus } from '../../lib/application-statuses'

export type TableRowType = {
  key: string
  id: string
  vehicleName: string
  engineSpecification: string
  registrationNumber: string
  VIN: string
  status: Status
  description: string | ''
}

export type InProgressRowType = TableRowType & { client: ClientType }

export const tableRows = (
  applications: ApplicationFromBackend[]
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
  }))
}

export const tableRowInProgress = (
  applications: ApplicationInProgressType[]
): InProgressRowType[] => {
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
  }))
}

const statusRow = (status: Status) => {
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

export const columns = [
  {
    title: 'ТС',
    dataIndex: 'vehicleName',
    key: 'vehicleName',
    render: (vehicleName: string) => <h4>{vehicleName}</h4>,
  },
  {
    title: 'Год выпуска',
    dataIndex: 'yearOfIssue',
    key: 'yearOfIssue',
    render: (yearOfIssue: string) => <p>{yearOfIssue}</p>,
  },
  {
    title: 'Oбъем двигателя',
    dataIndex: 'engineSpecification',
    key: 'engineSpecification',
    render: (engineSpecification: string) => <p>{engineSpecification}</p>,
  },
  {
    title: 'Регистрационный номер',
    dataIndex: 'registrationNumber',
    key: 'registrationNumber',
    render: (registrationNumber: string) => <p>{registrationNumber}</p>,
  },
  {
    title: 'VIN номер',
    dataIndex: 'VIN',
    key: 'VIN',
    render: (vin: string) => <p>{vin}</p>,
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (status: Status) => statusRow(status),
  },
  {
    title: 'Операции',
    key: 'actions',
    render: (text: any, record: TableRowType) => (
      <Space size='middle'>
        <a
          onClick={() =>
            changeStatus({
              applicationId: record.id,
              applicationStatus: record.status,
              newStatus: Status.IN_PROGRESS,
            })
          }
        >
          В выполнение
        </a>
        <a>Удалить</a>
      </Space>
    ),
  },
]

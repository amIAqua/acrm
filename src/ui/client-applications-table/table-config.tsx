import { Space } from 'antd'
import { Status } from '../../api/application-creation/types'
import { deleteApplication } from '../../lib/application-deleting'
import { fetchApplicationToEdit } from '../../features/edit-form'
import { changeStatus } from '../../lib/application-statuses'
import { statusRow, TableRowType } from '../../lib/table-rows'

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
        {record.status !== Status.IN_PROGRESS ? (
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
        ) : (
          <a
            onClick={() =>
              changeStatus({
                applicationId: record.id,
                applicationStatus: record.status,
                newStatus: Status.CLOSED,
              })
            }
          >
            Завершить
          </a>
        )}

        <a onClick={() => fetchApplicationToEdit(record.id)}>Редактировать</a>

        {record.status !== Status.IN_PROGRESS ? (
          <a onClick={() => deleteApplication(record.id)}>Удалить</a>
        ) : null}
      </Space>
    ),
  },
]

import { Client } from '../../api/clients/types'
import { setCurrentClient } from '../../lib/client'
import { Button } from '../../reusable/button'

export const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
    key: 'key',
    render: (index: number) => <h4>{index}</h4>,
  },
  {
    title: 'ID клиента',
    dataIndex: 'id',
    key: 'id',
    render: (id: number) => <h4>{id}</h4>,
  },
  {
    title: 'Имя',
    dataIndex: 'fullName',
    key: 'fullName',
    render: (fullName: string) => <h3>{fullName}</h3>,
  },

  {
    title: 'Контактный телефон',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    render: (phoneNumber: string) => <h3>{phoneNumber}</h3>,
  },
  {
    title: 'Операции',
    key: 'actions',
    render: (record: Client) => (
      <Button
        onClick={() =>
          setCurrentClient({
            ...record,
            name: record.name,
          })
        }
      >
        Заявки
      </Button>
    ),
  },
]

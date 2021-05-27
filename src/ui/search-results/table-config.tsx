import { Space, Tag } from 'antd'
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
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => <h3>{name}</h3>,
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
    render: (text: any, record: any) => <Button>Заявки</Button>,
  },
]

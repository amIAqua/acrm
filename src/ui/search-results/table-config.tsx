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
    title: 'Клиент',
    dataIndex: 'client',
    key: 'client',
    render: (name: any) => <h3>{name}</h3>,
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

export const data = [
  {
    key: '1',
    client: 'John Brown',
    phoneNumber: '+375443341223',
  },
  {
    key: '2',
    client: 'Jim Green',
    phoneNumber: '+375443341223',
  },
  {
    key: '3',
    client: 'Joe Black',
    phoneNumber: '+375443341223',
  },
]

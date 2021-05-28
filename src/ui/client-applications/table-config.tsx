import { Space, Tag } from 'antd'

export const columns = [
  {
    title: 'ТС',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Год выпуска, объем двигателя',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Регистрационный номер',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'VIN номер',
    dataIndex: 'age',
    key: 'age',
  },

  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (tags: any) => (
  //     <>
  //       {tags.map((tag: any) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green'
  //         if (tag === 'loser') {
  //           color = 'volcano'
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         )
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size='middle'>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

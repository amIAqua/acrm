import { Table, Empty } from 'antd'
import { ApplicationsTableContainer } from './styled'
import { ExpandedData } from '../../ui/application-expanded-data'

type ApplicationsTableType = {
  columns: any
  tableData: any
  expandble: boolean
}

export const ApplicationsTable = ({
  columns,
  tableData,
  expandble,
}: ApplicationsTableType): JSX.Element => {
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      expandable={{
        expandedRowRender: (record) => (
          <ExpandedData
            createDate={record.createdAt}
            client={record.client}
            startedAt={record.startedAt}
            description={record.description}
          />
        ),
        rowExpandable: () => !!expandble,
      }}
      pagination={false}
    />
  )
}

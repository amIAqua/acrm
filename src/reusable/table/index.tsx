import { Table, Empty } from 'antd'
import { ApplicationsInProgressContainer } from './styled'
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
    <ApplicationsInProgressContainer>
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

      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        style={{ marginTop: '100px' }}
      />
    </ApplicationsInProgressContainer>
  )
}

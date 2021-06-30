import { FC } from 'react'
import { useStore } from 'effector-react'
import { Spin, Table } from 'antd'
import { $applicationsInProgress, $loading } from '../../features/in-progress'
import { columns } from '../client-applications-table/table-config'
import { tableRows } from '../../lib/table-rows'
import { Empty } from 'antd'
import { ApplicationsInProgressContainer } from './styled'
import { ExpandedData } from '../application-expanded-data'

export const ApplicationsInProgressTable = (): JSX.Element => {
  const applicationsInProgress = useStore($applicationsInProgress)
  const loading = useStore($loading)

  if (loading) {
    return <Spin />
  }

  return (
    <ApplicationsInProgressContainer>
      {applicationsInProgress.length ? (
        <Table
          columns={columns}
          dataSource={tableRows(applicationsInProgress)}
          expandable={{
            expandedRowRender: (record) => (
              <ExpandedData
                client={record.client}
                description={record.description}
              />
            ),
            rowExpandable: (record) => record.vehicleName !== 'Not Expandable',
          }}
          pagination={false}
        />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ marginTop: '100px' }}
        />
      )}
    </ApplicationsInProgressContainer>
  )
}

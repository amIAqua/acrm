import { FC } from 'react'
import { useStore } from 'effector-react'
import { Spin, Table } from 'antd'
import {
  $applicationsInProgress,
  $loading,
} from '../../lib/applications-in-progress'
import { columns } from '../client-applications-table/table-config'
import { tableRows } from '../../lib/table-rows'
import { Empty } from 'antd'
import { ApplicationsInProgressContainer } from './styled'

export const ApplicationsInProgressTable: FC = () => {
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
              <p style={{ margin: 0 }}>{record.description}</p>
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

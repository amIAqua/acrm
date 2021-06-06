import { Table } from 'antd'
import { useStore } from 'effector-react'

import { FC } from 'react'
import { $currentClientApplications } from '../../lib/client'
import { columns, tableRows } from '../client-applications-table/table-config'
import { ApplicationsInProgressContainer } from './styled'

export const ApplicationsInProgressTable: FC = () => {
  const currentClientApplications = useStore($currentClientApplications)

  return (
    <ApplicationsInProgressContainer>
      <Table
        columns={columns}
        dataSource={tableRows(currentClientApplications)}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.vehicleName !== 'Not Expandable',
        }}
        pagination={false}
      />
    </ApplicationsInProgressContainer>
  )
}

import { FC } from 'react'
import { useStore } from 'effector-react'
import { Table } from 'antd'
import { $applicationsInProgress } from '../../lib/applications-in-progress'
import {
  columns,
  tableRowInProgress,
} from '../client-applications-table/table-config'
import { ApplicationsInProgressContainer } from './styled'

export const ApplicationsInProgressTable: FC = () => {
  const applicationsInProgress = useStore($applicationsInProgress)

  return (
    <ApplicationsInProgressContainer>
      <Table
        columns={columns}
        dataSource={tableRowInProgress(applicationsInProgress)}
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

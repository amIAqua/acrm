import { FC } from 'react'
import { useStore } from 'effector-react'
import { Button, Table } from 'antd'
import { columns, tableRows } from './table-config'
import { $currentClientApplications } from '../../lib/client'
import { ClientApplicationsContainer } from './styled'
import { onOpen } from '../../lib/new-application-modal/model'

export const ClientApplications: FC = () => {
  const currentClientApplications = useStore($currentClientApplications)

  return (
    <ClientApplicationsContainer>
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
      <Button
        type='primary'
        style={{ marginTop: '1rem' }}
        onClick={() => onOpen()}
      >
        Новая заявка
      </Button>
    </ClientApplicationsContainer>
  )
}

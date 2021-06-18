import { FC } from 'react'
import { Button, Table } from 'antd'
import { columns } from './table-config'
import { tableRows } from '../../lib/table-rows'
import { ClientApplicationsContainer } from './styled'
import { onOpen } from '../../lib/new-application-modal/model'
import { IApplicationFromBackend } from '../../api/application-creation/types'

type ClientApplicationsTableProps = {
  clientApplications: IApplicationFromBackend[]
}

export const ClientApplicationsTable: FC<ClientApplicationsTableProps> = ({
  clientApplications,
}) => {
  return (
    <ClientApplicationsContainer>
      <Table
        columns={columns}
        dataSource={tableRows(clientApplications)}
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

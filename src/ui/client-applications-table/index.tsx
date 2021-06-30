import { Button, Table } from 'antd'
import { columns } from './table-config'
import { tableRows } from '../../lib/table-rows'
import { ClientApplicationsContainer } from './styled'
import { onOpen } from '../../lib/new-application-modal/model'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { ExpandedData } from '../application-expanded-data'

type ClientApplicationsTableProps = {
  clientApplications: IApplicationFromBackend[]
}

export const ClientApplicationsTable = ({
  clientApplications,
}: ClientApplicationsTableProps): JSX.Element => {
  return (
    <ClientApplicationsContainer>
      <Table
        columns={columns}
        dataSource={tableRows(clientApplications)}
        expandable={{
          expandedRowRender: (record) => (
            <ExpandedData
              description={record.description}
              createDate={record.createdAt}
            />
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

import { useStore } from 'effector-react'
import { Button } from 'antd'
import { $clientApplications } from '../../pages/client-applications/model'
import { columns } from '../../reusable/table/table-configs'
import { tableRows } from '../../lib/table-rows'
import { ApplicationsTable } from '../../reusable/table'
import { ApplicationsTableContainer } from '../../reusable/table/styled'
import { onOpen } from '../../lib/new-application-modal/model'

// TODO: rebase 'clientApplications' fetching logic to page

export const ClientApplicationsTable = (): JSX.Element => {
  const clientApplications = useStore($clientApplications)

  return (
    <ApplicationsTableContainer>
      <ApplicationsTable
        columns={columns}
        tableData={tableRows(clientApplications)}
        expandble={true}
      />
      <Button
        type='primary'
        onClick={() => onOpen()}
        style={{ marginTop: '1rem' }}
      >
        Новая заявка
      </Button>
    </ApplicationsTableContainer>
  )
}

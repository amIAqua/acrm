import { columns } from '../../reusable/table/table-configs'
import { tableRows } from '../../lib/table-rows'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { ApplicationsTable } from '../../reusable/table'

type ClientApplicationsTableProps = {
  clientApplications: IApplicationFromBackend[]
}

// TODO: rebase 'clientApplications' fetching logic to page

export const ClientApplicationsTable = ({
  clientApplications,
}: ClientApplicationsTableProps): JSX.Element => {
  return (
    <ApplicationsTable
      columns={columns}
      tableData={tableRows(clientApplications)}
      expandble={true}
    />
  )
}

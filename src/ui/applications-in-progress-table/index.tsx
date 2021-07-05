import { useStore } from 'effector-react'
import { Spin } from 'antd'
import {
  $applicationsInProgress,
  $loading,
} from '../../pages/in-progress/model'
import { columns } from '../../reusable/table/table-configs'
import { tableRows } from '../../lib/table-rows'
import { ApplicationsTable } from '../../reusable/table'

export const ApplicationsInProgressTable = (): JSX.Element => {
  const applicationsInProgress = useStore($applicationsInProgress)
  const loading = useStore($loading)

  if (loading) {
    return <Spin />
  }

  return (
    <ApplicationsTable
      columns={columns}
      tableData={tableRows(applicationsInProgress)}
      expandble={true}
    />
  )
}

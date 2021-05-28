import { FC } from 'react'
import { useStore } from 'effector-react'
import { Table } from 'antd'
import { columns } from './table-config'
import { $currentClientApplications } from '../../lib/client'
import { ClientApplicationsContainer } from './styled'

export const ClientApplications: FC = () => {
  const currentClientApplications = useStore($currentClientApplications)

  return (
    <ClientApplicationsContainer>
      <Table columns={columns} dataSource={currentClientApplications} />
    </ClientApplicationsContainer>
  )
}

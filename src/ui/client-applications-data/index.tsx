import { useStore } from 'effector-react'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  $clientApplications,
  getClient,
  getClientApplications,
  $loading,
} from '../../features/client'
import { Spin } from 'antd'
import { ClientApplicationsTable } from '../../ui/client-applications-table'
import { ClientDetails } from '../../features/client-details/templates/details'

export const ClientApplicationsData: FC = () => {
  const clientApplications = useStore($clientApplications)
  const loading = useStore($loading)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getClientApplications(+id)
    getClient(+id)
  }, [])

  if (loading) {
    return <Spin />
  }

  return (
    <>
      <ClientDetails />
      <ClientApplicationsTable clientApplications={clientApplications} />
    </>
  )
}

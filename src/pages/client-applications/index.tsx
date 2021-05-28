import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { ClientApplications } from '../../ui/client-applications'

export const ClientApplicationsPage: FC = () => {
  return (
    <MainLayout>
      <ClientApplications />
    </MainLayout>
  )
}

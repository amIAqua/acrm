import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { ClientApplications } from '../../ui/client-applications'
import { ClientDetails } from '../../ui/client-details'
import { ClientDetailsContainer } from './styled'

export const ClientApplicationsPage: FC = () => {
  return (
    <MainLayout>
      <ClientDetailsContainer>
        <ClientDetails />
        <ClientApplications />
      </ClientDetailsContainer>
    </MainLayout>
  )
}

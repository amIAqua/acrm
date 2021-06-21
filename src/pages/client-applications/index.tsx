import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  $isVisible,
  onClose,
  onOpen,
} from '../../lib/new-application-modal/model'
import { MainLayout } from '../../layouts/main'
import { ClientApplicationsTable } from '../../ui/client-applications-table'
import {
  addApplication,
  createApplication,
} from '../../lib/application-creation'
import { ModalWindow } from '../../ui/create-application-modal'
import { ClientDetails } from '../../ui/client-details'
import {
  client,
  vehicle,
  issues,
} from '../../reusable/application-form/initial-form-values'
import { useEffect } from 'react'
import {
  $clientApplications,
  getClient,
  getClientApplications,
} from '../../lib/client'
import { useParams } from 'react-router-dom'
import { ClientApplicationForm } from '../../reusable/add-form'

export const ClientApplicationsPage: FC = () => {
  const isVisible = useStore($isVisible)
  const clientApplications = useStore($clientApplications)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getClientApplications(+id)
    getClient(+id)
  }, [])

  return (
    <MainLayout>
      <ClientDetails />
      <ClientApplicationsTable clientApplications={clientApplications} />

      <ModalWindow isVisible={isVisible} onClose={onClose} onOpen={onOpen}>
        <ClientApplicationForm
          fields={{
            vehicle: { ...vehicle },
            issues: { ...issues },
          }}
          submitionText='Создать заявку'
          submition={addApplication}
          closable={true}
        />
      </ModalWindow>
    </MainLayout>
  )
}

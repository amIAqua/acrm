import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  $isVisible,
  onClose,
  onOpen,
} from '../../lib/new-application-modal/model'
import { MainLayout } from '../../layouts/main'
import { ClientApplicationsTable } from '../../ui/client-applications-table'
import { newApplication } from '../../lib/application-creation'
import { ModalWindow } from '../../ui/create-application-modal'
import { ClientDetails } from '../../ui/client-details'
import { ApplicationForm } from '../../reusable/application-form'
import { initialValuesAdd } from '../../reusable/application-form/initial-form-values'

export const ClientApplicationsPage: FC = () => {
  const isVisible = useStore($isVisible)

  return (
    <MainLayout>
      <ClientDetails />
      <ClientApplicationsTable />

      <ModalWindow isVisible={isVisible} onClose={onClose} onOpen={onOpen}>
        <ApplicationForm
          fields={initialValuesAdd}
          submitionText='Создать заявку'
          submition={newApplication}
        />
      </ModalWindow>
    </MainLayout>
  )
}

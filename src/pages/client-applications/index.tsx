import { FC } from 'react'
import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { addApplication } from '../../lib/application-creation'
import { ModalWindow } from '../../ui/create-application-modal'
import { ClientApplicationForm } from '../../reusable/add-form'
import { ClientApplicationsData } from '../../ui/client-applications-data'
import {
  $isVisible,
  onClose,
  onOpen,
} from '../../lib/new-application-modal/model'
import {
  vehicle,
  issues,
} from '../../reusable/application-form/initial-form-values'

export const ClientApplicationsPage: FC = () => {
  const isVisible = useStore($isVisible)

  return (
    <MainLayout>
      <ClientApplicationsData />

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

import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  $isVisible,
  onClose,
  onOpen,
} from '../../lib/new-application-modal/model'
import { MainLayout } from '../../layouts/main'
import { ClientApplications } from '../../ui/client-applications'
import { ModalWindow } from '../../ui/create-application-modal'
import { NewApplicationForm } from '../../ui/new-application-form'

export const ClientApplicationsPage: FC = () => {
  const isVisible = useStore($isVisible)

  return (
    <MainLayout>
      <ClientApplications />

      <ModalWindow isVisible={isVisible} onClose={onClose} onOpen={onOpen}>
        <NewApplicationForm />
      </ModalWindow>
    </MainLayout>
  )
}

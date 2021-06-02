import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  $isVisible,
  onClose,
  onOpen,
} from '../../lib/new-application-modal/model'
import { MainLayout } from '../../layouts/main'
import { ClientApplicationsTable } from '../../ui/client-applications-table'
import { ModalWindow } from '../../ui/create-application-modal'
import { AddApplicationForm } from '../../ui/add-application-form'

export const ClientApplicationsPage: FC = () => {
  const isVisible = useStore($isVisible)

  return (
    <MainLayout>
      <ClientApplicationsTable />

      <ModalWindow isVisible={isVisible} onClose={onClose} onOpen={onOpen}>
        <AddApplicationForm />
      </ModalWindow>
    </MainLayout>
  )
}

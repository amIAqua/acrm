import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  onOpen,
  onClose,
} from '../../lib/create-application-modal-window/model'
import { CreateApplicationForm } from '../../reusable/create-form'
import { createApplication } from '../../lib/application-creation'
import { ModalWindow } from '../../ui/create-application-modal'
import { Layout, Children } from '../../styles/common'
import { SideMenu } from '../../reusable/side-menu'
import { Navbar } from '../../ui/navbar'
import { $isVisible } from '../../lib/create-application-modal-window/model'
import {
  client,
  vehicle,
  issues,
} from '../../reusable/form/initial-form-values'

export const MainLayout: FC = ({ children }) => {
  const isVisible = useStore($isVisible)
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <Children>{children}</Children>

        <ModalWindow isVisible={isVisible} onOpen={onOpen} onClose={onClose}>
          <CreateApplicationForm
            fields={{
              client: { ...client },
              vehicle: { ...vehicle },
              issues: { ...issues },
            }}
            submition={createApplication}
            submitionText='Создать'
            closable={true}
          />
        </ModalWindow>
      </Layout>
    </>
  )
}

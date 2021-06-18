import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  onOpen,
  onClose,
} from '../../lib/create-application-modal-window/model'
import { ApplicationForm } from '../../reusable/application-form'
import { createApplication } from '../../lib/application-creation'
import { ModalWindow } from '../../ui/create-application-modal'
import { Layout, Children } from '../../styles/common'
import { SideMenu } from '../../reusable/side-menu'
import { Navbar } from '../../ui/navbar'
import { $isVisible } from '../../lib/create-application-modal-window/model'
import { initialValues } from '../../reusable/application-form/initial-form-values'

export const MainLayout: FC = ({ children }) => {
  const isVisible = useStore($isVisible)
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <Children>{children}</Children>

        <ModalWindow isVisible={isVisible} onOpen={onOpen} onClose={onClose}>
          <ApplicationForm
            fields={initialValues}
            submition={createApplication}
            submitionText='Создать'
            closable={true}
          />
        </ModalWindow>
      </Layout>
    </>
  )
}

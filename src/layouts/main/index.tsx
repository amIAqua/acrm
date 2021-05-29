import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  onOpen,
  onClose,
} from '../../lib/create-application-modal-window/model'
import { ModalWindow } from '../../ui/create-application-modal'
import { Layout, Children } from '../../styles/common'
import { SideMenu } from '../../reusable/side-menu'
import { Navbar } from '../../ui/navbar'
import { AddApplicationForm } from '../../ui/add-application-form'
import { $isVisible } from '../../lib/create-application-modal-window/model'

export const MainLayout: FC = ({ children }) => {
  const isVisible = useStore($isVisible)
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <Children>{children}</Children>

        <ModalWindow isVisible={isVisible} onOpen={onOpen} onClose={onClose}>
          <AddApplicationForm />
        </ModalWindow>
      </Layout>
    </>
  )
}

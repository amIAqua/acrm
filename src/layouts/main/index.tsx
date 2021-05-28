import { FC } from 'react'
import { ModalWindow } from '../../ui/create-application-modal'
import { Layout, Children } from '../../styles/common'
import { SideMenu } from '../../reusable/side-menu'

export const MainLayout: FC = ({ children }) => {
  return (
    <Layout>
      <SideMenu />
      <Children>{children}</Children>

      <ModalWindow />
    </Layout>
  )
}

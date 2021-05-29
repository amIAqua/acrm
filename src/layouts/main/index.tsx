import { FC } from 'react'
import { ModalWindow } from '../../ui/create-application-modal'
import { Layout, Children } from '../../styles/common'
import { SideMenu } from '../../reusable/side-menu'
import { Navbar } from '../../ui/navbar'

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <Children>{children}</Children>

        <ModalWindow />
      </Layout>
    </>
  )
}

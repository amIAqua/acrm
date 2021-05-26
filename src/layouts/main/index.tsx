import { FC } from 'react'
import { ModalWindow } from '../../ui/create-application-modal'
import { Layout } from '../../styles/common'
import { Navbar } from '../../ui/navbar'

export const MainLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      {children}

      <ModalWindow />
    </Layout>
  )
}

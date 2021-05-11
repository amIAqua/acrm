import { FC } from 'react'
import { Layout } from '../../styles/common'
import { Navbar } from '../../ui/navbar'

export const MainLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  )
}

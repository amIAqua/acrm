import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { AddApplicationForm } from '../../ui/add-application-form'

export const HomePage: FC = () => {
  return (
    <MainLayout>
      <AddApplicationForm />
    </MainLayout>
  )
}

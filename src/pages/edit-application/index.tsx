import { useStore } from 'effector-react'
import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { $currentClient } from '../../lib/client'
import { CreateApplicationForm } from '../../ui/create-application-form'

export const EditApplicationPage: FC = () => {
  const currentClient = useStore($currentClient)

  return <MainLayout>{/* //<CreateApplicationForm /> */}</MainLayout>
}

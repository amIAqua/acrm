import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { AddApplicationForm } from '../../ui/add-application-form'
import { CreateApplicationFormContainer } from './styled'

export const CreateApplicationPage: FC = () => {
  return (
    <MainLayout>
      <CreateApplicationFormContainer>
        <AddApplicationForm />
      </CreateApplicationFormContainer>
    </MainLayout>
  )
}

import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { ApplicationsInProgressTable } from '../../ui/applications-in-progress-table'

export const ApplicationsInProgress: FC = () => {
  return (
    <MainLayout>
      <ApplicationsInProgressTable />
    </MainLayout>
  )
}

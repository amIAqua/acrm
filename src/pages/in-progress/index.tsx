import { FC, useEffect } from 'react'
import { MainLayout } from '../../layouts/main'
import {
  fetchApplicationsInProgress,
  resetApplicationsInProgress,
} from '../../lib/applications-in-progress'
import { ApplicationsInProgressTable } from '../../ui/applications-in-progress-table'

export const ApplicationsInProgress: FC = () => {
  useEffect(() => {
    fetchApplicationsInProgress()

    return () => resetApplicationsInProgress()
  }, [])

  return (
    <MainLayout>
      <ApplicationsInProgressTable />
    </MainLayout>
  )
}

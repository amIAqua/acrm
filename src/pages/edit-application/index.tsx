import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { $applicationToEdit } from '../../lib/application-editing'

import { EditApplicationForm } from '../../ui/edit-application-form'
import { useParams } from 'react-router-dom'
import { fetchApplicationToEdit } from '../../lib/application-editing'
import { $loading } from '../../lib/loading'

export const EditApplicationPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  let applicationToEdit = useStore($applicationToEdit)
  const loading = useStore($loading)

  useEffect(() => {
    if (!applicationToEdit) {
      fetchApplicationToEdit(id)
    }
  }, [])

  return (
    <MainLayout>
      {applicationToEdit ? <EditApplicationForm /> : <>Загрузка</>}
    </MainLayout>
  )
}

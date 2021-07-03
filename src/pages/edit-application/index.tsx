import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { $applicationToEdit } from '../../features/edit-application'
import { useParams } from 'react-router-dom'
import { fetchApplicationToEdit } from '../../features/edit-application'
import { EditApplicationForm } from '../../features/edit-application/templates/form'
import { Spin } from 'antd'

export const EditApplicationPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  let applicationToEdit = useStore($applicationToEdit)

  useEffect(() => {
    if (!applicationToEdit) {
      fetchApplicationToEdit(id)
    }
  }, [])

  return (
    <MainLayout>
      {applicationToEdit ? (
        <EditApplicationForm
          submitionText='Сохранить'
          fields={applicationToEdit}
        />
      ) : (
        <Spin />
      )}
    </MainLayout>
  )
}

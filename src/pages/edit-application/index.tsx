import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { $applicationToEdit } from '../../features/edit-form'
import { useParams } from 'react-router-dom'
import { fetchApplicationToEdit } from '../../features/edit-form'
import { EditApplicationForm } from '../../features/edit-form/templates/form'

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
        <>Загрузка</>
      )}
    </MainLayout>
  )
}

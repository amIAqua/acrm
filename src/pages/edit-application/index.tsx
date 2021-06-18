import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { $applicationToEdit } from '../../lib/application-editing'
import { saveChanges } from '../../lib/application-editing'
import { useParams } from 'react-router-dom'
import { fetchApplicationToEdit } from '../../lib/application-editing'
import { ApplicationForm } from '../../reusable/application-form'

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
        <ApplicationForm
          submition={saveChanges}
          submitionText='Сохранить'
          fields={applicationToEdit}
        />
      ) : (
        <>Загрузка</>
      )}
    </MainLayout>
  )
}

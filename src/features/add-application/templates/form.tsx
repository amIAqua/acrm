import { FC } from 'react'
import { useFormik } from 'formik'
import { Button } from 'antd'
import { FormWrapper, Form } from '../../../reusable/form/styled'
import { onClose } from '../../../lib/create-application-modal-window/model'
import { addApplication } from '../index'
import { NewClientApplicationType } from '../../../api/application-creation/types'
import { Vehicle } from '../../../reusable/form/sections/vehicle'
import { Issues } from '../../../reusable/form/sections/issues'
import { ButtonSection } from '../../../reusable/form/styled'

type AddApplicationFormPropsType = {
  fields: NewClientApplicationType
  closable?: boolean
  submitionText: string
}

export const AddApplicationForm: FC<AddApplicationFormPropsType> = ({
  fields,
  submitionText,
  closable,
}) => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {
      addApplication(values)

      formik.resetForm()

      if (closable) {
        onClose()
      }
    },
  })

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Vehicle formik={formik} />
        <Issues formik={formik} />

        <ButtonSection>
          <Button
            htmlType='submit'
            style={{ width: '200px', fontSize: '18px', fontWeight: 'bolder' }}
            type='primary'
            size='large'
          >
            {submitionText}
          </Button>
        </ButtonSection>
      </Form>
    </FormWrapper>
  )
}

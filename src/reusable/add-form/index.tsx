import { FC } from 'react'
import { useFormik } from 'formik'
import { Event } from 'effector'
import { Button } from 'antd'
import { FormWrapper, Form } from '../form/styled'
import { onClose } from '../../lib/create-application-modal-window/model'
import { NewApplicationType } from '../../api/application-creation/types'
import { Vehicle } from '../form/sections/vehicle'
import { Issues } from '../form/sections/issues'
import { ButtonSection } from '../form/styled'

type AddApplicationFormPropsType = {
  fields: NewApplicationType
  closable?: boolean
  submition: Event<any>
  submitionText: string
}

export const AddApplicationForm: FC<AddApplicationFormPropsType> = ({
  fields,
  submition,
  submitionText,
  closable,
}) => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {
      submition(values)

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

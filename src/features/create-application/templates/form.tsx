import { FC } from 'react'
import { useFormik } from 'formik'
import { Button } from 'antd'
import { createApplication } from '../index'
import { FormWrapper, Form, ButtonSection } from '../../../reusable/form/styled'
import { onClose } from '../../../lib/create-application-modal-window/model'
import { IApplicationFromScratch } from '../../../api/application-creation/types'
import { Client } from '../../../reusable/form/sections/client'
import { Vehicle } from '../../../reusable/form/sections/vehicle'
import { Issues } from '../../../reusable/form/sections/issues'

type CreateApplicationFormPropsType = {
  fields: IApplicationFromScratch
  closable?: boolean
  submitionText: string
}

export const CreateApplicationForm: FC<CreateApplicationFormPropsType> = ({
  fields,
  submitionText,
  closable,
}) => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {
      createApplication(values)

      formik.resetForm()

      if (closable) {
        onClose()
      }
    },
  })

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Client formik={formik} />
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

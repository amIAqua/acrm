import { FC } from 'react'
import { Event } from 'effector'
import { useFormik } from 'formik'
import { Button } from 'antd'
import { FormWrapper, Form, ButtonSection } from '../form/styled'
import { onClose } from '../../lib/create-application-modal-window/model'
import { IApplicationFromScratch } from '../../api/application-creation/types'
import { Client } from '../form/sections/client'
import { Vehicle } from '../form/sections/vehicle'
import { Issues } from '../form/sections/issues'

type CreateApplicationFormPropsType = {
  fields: IApplicationFromScratch
  closable?: boolean
  submition: Event<any>
  submitionText: string
}

export const CreateApplicationForm: FC<CreateApplicationFormPropsType> = ({
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

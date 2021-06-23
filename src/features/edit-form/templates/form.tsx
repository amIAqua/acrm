import { FC } from 'react'
import { useFormik } from 'formik'
import { Button } from 'antd'
import { saveChanges } from '../index'
import { FormWrapper, Form, ButtonSection } from '../../../reusable/form/styled'
import { IApplicationFromScratch } from '../../../api/application-creation/types'
import { Client } from '../../../reusable/form/sections/client'
import { Vehicle } from '../../../reusable/form/sections/vehicle'
import { Issues } from '../../../reusable/form/sections/issues'

type EditApplicationFormPropsType = {
  fields: IApplicationFromScratch
  submitionText: string
}

export const EditApplicationForm: FC<EditApplicationFormPropsType> = ({
  fields,
  submitionText,
}) => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {
      saveChanges(values)

      formik.resetForm()
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

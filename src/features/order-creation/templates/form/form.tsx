import { useFormik } from 'formik'
import { IApplicationFromBackend } from '../../../../api/application-creation/types'
import { Client } from '../../../../reusable/form/sections/client'
import { Vehicle } from '../../../../reusable/form/sections/vehicle'
import { Issues } from '../../../../reusable/form/sections/issues'
import { FormWrapper, Form } from './styled'

type PrepareOrderFormProps = {
  fields: IApplicationFromBackend
}

export const PrepareOrderForm = ({
  fields,
}: PrepareOrderFormProps): JSX.Element => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit: (values) => {},
  })

  return (
    <FormWrapper>
      <Form>
        {/* <Client formik={formik} /> */}
        <Vehicle formik={formik} />
        <Issues formik={formik} />
      </Form>
    </FormWrapper>
  )
}

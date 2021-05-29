import { FC } from 'react'
import { useStore } from 'effector-react'
import { $currentClient } from '../../lib/client'
import { Button, Input } from 'antd'
import { useFormik } from 'formik'
import TextArea from 'antd/lib/input/TextArea'
import { initialValues } from './initial-form-values'
import {
  ButtonSection,
  Form,
  FormWrapper,
  GridFields,
  IssuesSection,
  VehicleSection,
} from '../add-application-form/styled'
import { newApplication } from '../../lib/create-application/model'
import { onClose } from '../../lib/new-application-modal/model'

export const NewApplicationForm: FC = () => {
  const currentClient = useStore($currentClient)
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      newApplication({
        clientId: currentClient!.id,
        ...values,
      })

      formik.resetForm()
      onClose()
    },
  })

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <VehicleSection>
          <h2>Автомобиль</h2>
          <GridFields>
            <Input
              id='brand'
              name='brand'
              type='text'
              placeholder='Марка'
              onChange={formik.handleChange}
              value={formik.values.brand}
            />
            <Input
              id='model'
              name='model'
              type='text'
              placeholder='Модель'
              onChange={formik.handleChange}
              value={formik.values.model}
            />

            <Input
              id='yearOfIssue'
              name='yearOfIssue'
              type='text'
              placeholder='Год выпуска'
              onChange={formik.handleChange}
              value={formik.values.yearOfIssue}
            />
            <Input
              id='engineSpecification'
              name='engineSpecification'
              type='text'
              placeholder='Объем двигателя'
              onChange={formik.handleChange}
              value={formik.values.engineSpecification}
            />
            <Input
              id='registrationNumber'
              name='registrationNumber'
              type='text'
              placeholder='Регистрационный номер'
              onChange={formik.handleChange}
              value={formik.values.registrationNumber}
            />
            <Input
              id='VIN'
              name='VIN'
              type='text'
              placeholder='VIN номер'
              onChange={formik.handleChange}
              value={formik.values.VIN}
            />
          </GridFields>
        </VehicleSection>
        <IssuesSection>
          <h2>Описание неисправностей</h2>
          <TextArea
            rows={4}
            id='description'
            name='description'
            placeholder='Описание'
            onChange={formik.handleChange}
            value={formik.values.description}
            style={{ width: '492px', maxHeight: '120px' }}
          />
        </IssuesSection>
        <ButtonSection>
          <Button
            htmlType='submit'
            style={{ width: '200px', fontSize: '18px', fontWeight: 'bolder' }}
            type='primary'
            size='large'
          >
            Создать заявку
          </Button>
        </ButtonSection>
      </Form>
    </FormWrapper>
  )
}

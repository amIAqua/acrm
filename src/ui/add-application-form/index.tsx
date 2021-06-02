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
} from '../create-application-form/styled'
import { newApplication } from '../../lib/application-creation/model'
import { onClose } from '../../lib/new-application-modal/model'

export const AddApplicationForm: FC = () => {
  const currentClient = useStore($currentClient)
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      newApplication({
        clientId: currentClient!.id!,
        application: { ...values },
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
              name='vehicle.brand'
              type='text'
              placeholder='Марка'
              onChange={formik.handleChange}
              value={formik.values.vehicle.brand}
            />
            <Input
              id='model'
              name='vehicle.model'
              type='text'
              placeholder='Модель'
              onChange={formik.handleChange}
              value={formik.values.vehicle.model}
            />

            <Input
              id='yearOfIssue'
              name='vehicle.yearOfIssue'
              type='text'
              placeholder='Год выпуска'
              onChange={formik.handleChange}
              value={formik.values.vehicle.yearOfIssue}
            />
            <Input
              id='engineSpecification'
              name='vehicle.engineSpecification'
              type='text'
              placeholder='Объем двигателя'
              onChange={formik.handleChange}
              value={formik.values.vehicle.engineSpecification}
            />
            <Input
              id='registrationNumber'
              name='vehicle.registrationNumber'
              type='text'
              placeholder='Регистрационный номер'
              onChange={formik.handleChange}
              value={formik.values.vehicle.registrationNumber}
            />
            <Input
              id='VIN'
              name='vehicle.VIN'
              type='text'
              placeholder='VIN номер'
              onChange={formik.handleChange}
              value={formik.values.vehicle.VIN}
            />
          </GridFields>
        </VehicleSection>
        <IssuesSection>
          <h2>Описание неисправностей</h2>
          <TextArea
            rows={4}
            id='description'
            name='issues.description'
            placeholder='Описание'
            onChange={formik.handleChange}
            value={formik.values.issues.description}
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

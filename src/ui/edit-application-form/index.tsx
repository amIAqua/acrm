import { FC } from 'react'
import { useStore } from 'effector-react'
import { useFormik } from 'formik'
import { Button, Input } from 'antd'
import { $applicationToEdit, saveChanges } from '../../lib/application-editing'
import {
  FormWrapper,
  Form,
  ClientSection,
  VehicleSection,
  IssuesSection,
  ButtonSection,
  GridFields,
} from './styled'
import { ApplicationFromBackend } from '../../api/application-creation/types'

const { TextArea } = Input

export const EditApplicationForm: FC = () => {
  let applicationToEdit = useStore($applicationToEdit)

  const formik = useFormik({
    initialValues: applicationToEdit as ApplicationFromBackend,
    onSubmit: (values) => {
      saveChanges(values)
    },
  })

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <ClientSection>
          <h2>Клиент</h2>
          <GridFields>
            <Input
              id='name'
              name='client.name'
              type='text'
              placeholder='Имя'
              onChange={formik.handleChange}
              value={formik.values.client!.name}
            />
            <Input
              id='surname'
              name='client.surname'
              type='text'
              placeholder='Фамилия'
              onChange={formik.handleChange}
              value={formik.values.client!.surname}
            />
            <Input
              id='phoneNumber'
              name='client.phoneNumber'
              type='text'
              placeholder='Номер телефона'
              onChange={formik.handleChange}
              value={formik.values.client!.phoneNumber}
            />
            <Input
              id='email'
              name='client.email'
              type='email'
              placeholder='Email'
              onChange={formik.handleChange}
              value={formik.values.client!.email}
            />
          </GridFields>
        </ClientSection>
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
            Сохранить
          </Button>
        </ButtonSection>
      </Form>
    </FormWrapper>
  )
}

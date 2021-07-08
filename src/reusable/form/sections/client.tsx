import { FC } from 'react'
import { Input } from 'antd'
import { ClientSection, SectionHeader, GridFields } from './styled'

type ClientSectionPropsType = {
  formik: any
  headerColor: string
}

export const Client: FC<ClientSectionPropsType> = ({ formik, headerColor }) => {
  return (
    <ClientSection>
      <SectionHeader headerColor={headerColor}>Клиент</SectionHeader>
      <GridFields>
        <Input
          id='name'
          name='client.name'
          type='text'
          placeholder='Имя'
          onChange={formik.handleChange}
          value={formik.values.client.name}
        />
        <Input
          id='surname'
          name='client.surname'
          type='text'
          placeholder='Фамилия'
          onChange={formik.handleChange}
          value={formik.values.client.surname}
        />
        <Input
          id='phoneNumber'
          name='client.phoneNumber'
          type='text'
          placeholder='Номер телефона'
          onChange={formik.handleChange}
          value={formik.values.client.phoneNumber}
        />
        <Input
          id='email'
          name='client.email'
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.client.email}
        />
      </GridFields>
    </ClientSection>
  )
}

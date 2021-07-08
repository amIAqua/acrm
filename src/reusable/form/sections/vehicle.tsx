import { FC } from 'react'
import { Input } from 'antd'
import { VehicleSection, GridFields, SectionHeader } from './styled'

type VehicleSectionPropsType = {
  formik: any
  headerColor: string
}

export const Vehicle: FC<VehicleSectionPropsType> = ({
  formik,
  headerColor,
}) => {
  return (
    <VehicleSection>
      <SectionHeader headerColor={headerColor}>Автомобиль</SectionHeader>
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
  )
}

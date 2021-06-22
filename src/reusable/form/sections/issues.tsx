import { FC } from 'react'
import { Input } from 'antd'
import { IssuesSection } from './styled'

const { TextArea } = Input

type VehicleSectionPropsType = {
  formik: any
}

export const Issues: FC<VehicleSectionPropsType> = ({ formik }) => {
  return (
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
  )
}

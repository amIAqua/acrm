import { FC } from 'react'
import { ClientApplication } from '../../../api/applications/types'
import { Card, Section } from './styled'

type ApplicationProps = {
  application: ClientApplication
}

export const ApplicationItem: FC<ApplicationProps> = ({ application }) => {
  return (
    <Card onClick={() => console.log(application.clientId)}>
      <Section></Section>
    </Card>
  )
}

import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { PrepareOrderForm } from '../../features/order-creation/templates/form/form'
import { $preparedOrder } from './model'
import { IApplicationFromBackend } from '../../api/application-creation/types'

const isNotNullableOrder = (fields: any): fields is IApplicationFromBackend => {
  return typeof fields !== undefined
}

export const PrepareOrderPage = (): JSX.Element => {
  const preparedOrder = useStore($preparedOrder)

  console.log(preparedOrder)

  const prepareForm = () =>
    isNotNullableOrder(preparedOrder) ? (
      <PrepareOrderForm
        fields={{
          ...preparedOrder,
        }}
      />
    ) : null

  return <MainLayout>{prepareForm()}</MainLayout>
}

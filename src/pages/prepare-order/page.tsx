import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { PrepareOrderForm } from '../../features/order-creation/templates/form/form'
import { $preparedOrder } from '../../features/order-creation'
import { prepareOrder, resetPreparedOrder } from '../../features/order-creation'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'

const isNotNullableOrder = (fields: any): fields is IApplicationFromBackend => {
  return typeof fields !== undefined
}

export const PrepareOrderPage = (): JSX.Element => {
  const preparedOrder = useStore($preparedOrder)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    prepareOrder(+id)

    return () => resetPreparedOrder()
  }, [])

  if (!preparedOrder) {
    return <Spin />
  }

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

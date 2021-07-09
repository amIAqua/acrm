import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { ApplicationForOrderForm } from '../../features/order-creation/templates/application-for-order-form/form'
import {
  $preparedOrder,
  prepareOrder,
  resetPreparedOrder,
} from '../../features/order-creation'

const isNotNullableOrder = (fields: any): fields is IApplicationFromBackend => {
  return typeof fields !== undefined
}

export const ApplicationForOrder = (): JSX.Element => {
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
      <ApplicationForOrderForm
        fields={{
          ...preparedOrder,
        }}
      />
    ) : null

  return <>{prepareForm()}</>
}

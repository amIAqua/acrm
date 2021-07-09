import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { ApplicationForOrderForm } from '../../features/order-creation/templates/application-for-order-form/form'
import {
  $preparedApplication,
  prepareApplicationForOrder,
  resetPreparedOrder,
} from '../../features/order-creation'

const isNotNullableOrder = (fields: any): fields is IApplicationFromBackend => {
  return typeof fields !== undefined
}

export const ApplicationForOrder = (): JSX.Element => {
  const preparedApplication = useStore($preparedApplication)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    prepareApplicationForOrder(+id)

    return () => resetPreparedOrder()
  }, [])

  if (!preparedApplication) {
    return <Spin />
  }

  const prepareForm = () =>
    isNotNullableOrder(preparedApplication) ? (
      <ApplicationForOrderForm
        fields={{
          ...preparedApplication,
        }}
      />
    ) : null

  return <>{prepareForm()}</>
}

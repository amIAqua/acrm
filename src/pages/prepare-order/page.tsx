import { MainLayout } from '../../layouts/main'
import { ApplicationForOrder } from '../../ui/application-for-order'
import { OrderDetails } from '../../ui/order-details'

export const PrepareOrderPage = (): JSX.Element => {
  return (
    <MainLayout>
      <ApplicationForOrder />
      <OrderDetails />
    </MainLayout>
  )
}

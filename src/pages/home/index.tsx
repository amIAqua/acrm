import { FC } from 'react'
import { MainLayout } from '../../layouts/main'
import { MainMenu } from '../../ui/main-menu'

export const HomePage: FC = () => {
  return (
    <MainLayout>
      <MainMenu />
    </MainLayout>
  )
}

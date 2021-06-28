import { act, render, screen } from '@testing-library/react'
import {
  client,
  issues,
  vehicle,
} from '../../../../reusable/form/initial-form-values'
import { ModalWindow } from '../../../../ui/create-application-modal'
import { CreateApplicationForm } from '../../templates/form'

describe('Create application modal with form', () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()
  let isVisible: boolean = false
  const fields = {
    client: { ...client },
    vehicle: { ...vehicle },
    issues: { ...issues },
  }

  beforeAll(() => {
    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <CreateApplicationForm fields={fields} submitionText='Создать заявку' />
      </ModalWindow>
    )
  })

  it('does not render to the DOM in initial', () => {
    expect(screen.queryByText('Клиент')).not.toBeInTheDocument()
    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
  })

  it('opens on onOpen event', () => {
    act(() => {
      isVisible = true
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <CreateApplicationForm fields={fields} submitionText='Создать заявку' />
      </ModalWindow>
    )

    expect(screen.queryByText('Клиент')).toBeInTheDocument()
    expect(screen.queryByText('Автомобиль')).toBeInTheDocument()
  })

  it('close on onClose event', () => {
    act(() => {
      isVisible = false
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <CreateApplicationForm fields={fields} submitionText='Создать заявку' />
      </ModalWindow>
    )

    expect(screen.queryByText('Клиент')).not.toBeInTheDocument()
    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
  })
})

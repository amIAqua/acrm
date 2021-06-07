import { act, render, screen } from '@testing-library/react'
import { ModalWindow } from '../create-application-modal'
import { AddApplicationForm } from '../add-application-form'

describe('Add application modal with form', () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()
  let isVisible: boolean = false

  beforeAll(() => {
    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <AddApplicationForm />
      </ModalWindow>
    )
  })

  it('does not render to the DOM in initial', () => {
    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
    expect(
      screen.queryByText('Описание неисправностей')
    ).not.toBeInTheDocument()
  })

  it('opens on onOpen event', () => {
    act(() => {
      isVisible = true
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <AddApplicationForm />
      </ModalWindow>
    )

    expect(screen.queryByText('Автомобиль')).toBeInTheDocument()
    expect(screen.queryByText('Описание неисправностей')).toBeInTheDocument()
  })

  it('close on onClose event', () => {
    act(() => {
      isVisible = false
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <AddApplicationForm />
      </ModalWindow>
    )

    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
    expect(
      screen.queryByText('Описание неисправностей')
    ).not.toBeInTheDocument()
  })
})

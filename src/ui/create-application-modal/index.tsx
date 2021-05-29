import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  $isVisible,
  onClose,
} from '../../lib/create-application-modal-window/model'
import Modal from 'antd/lib/modal/Modal'
import { AddApplicationForm } from '../add-application-form'

type ModalWindowProps = {
  onOpen: () => void
  onClose: () => void
  isVisible: boolean
}

export const ModalWindow: FC<ModalWindowProps> = ({
  children,
  onOpen,
  onClose,
  isVisible,
}) => {
  return (
    <>
      <Modal
        visible={isVisible}
        className='add_application_modal'
        onCancel={onClose}
        width={650}
        centered={true}
        destroyOnClose={true}
        okText='Создать заявку'
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
}

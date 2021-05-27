import { FC } from 'react'
import { useStore } from 'effector-react'
import {
  $isVisible,
  onClose,
} from '../../lib/create-application-modal-window/model'
import Modal from 'antd/lib/modal/Modal'
import { AddApplicationForm } from '../add-application-form'

export const ModalWindow: FC = () => {
  const isVisible = useStore($isVisible)
  return (
    <>
      <Modal
        visible={isVisible}
        onCancel={onClose}
        width={650}
        centered={true}
        destroyOnClose={true}
        okText='Создать заявку'
        footer={null}
      >
        <AddApplicationForm />
      </Modal>
    </>
  )
}

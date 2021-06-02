import { FC } from 'react'
import Modal from 'antd/lib/modal/Modal'

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

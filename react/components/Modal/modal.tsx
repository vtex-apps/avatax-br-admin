import React, { FC, useState } from 'react'
import { Modal, Button } from 'vtex.styleguide'

const ModalArea: FC = (props) => {
  const [modal, setModal] = useState(false)

  return (
    <Modal
      isOpen={modal}
      title="Editar Estoque"
      responsiveFullScreen
      bottomBar={
        <div className="nowrap">
          <span className="mr4">
            <Button variation="tertiary" onClick={() => setModal(false)}>
              Cancelar
            </Button>
          </span>
          <span>
            <Button
              variation="primary"
              // onClick={() => saveConfigurations(authsEdit.id, true)}
            >
              Salvar
            </Button>
          </span>
        </div>
      }
      onClose={() => setModal(false)}
    >
      {props.children}
    </Modal>
  )
}

export default ModalArea

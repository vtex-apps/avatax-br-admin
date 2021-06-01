import React, { FC, useContext } from 'react'
import { Modal, Button } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

const ModalArea: FC = (props) => {
  const context = useContext(EstablishmentContext)

  async function save() {
    const showAlert = await context.saveConfigurations()

    if (showAlert) {
      alert('Dados salvos')
    }
  }

  return (
    <Modal
      isOpen={context.edit}
      title="Editar Estoque"
      responsiveFullScreen
      bottomBar={
        <div className="nowrap">
          <span className="mr4">
            <Button variation="tertiary" onClick={() => context.setEdit(false)}>
              Cancelar
            </Button>
          </span>
          <span>
            <Button
              variation="primary"
              onClick={() => {
                save()
              }}
            >
              Salvar
            </Button>
          </span>
        </div>
      }
      onClose={() => context.setEdit(false)}
    >
      {props.children}
    </Modal>
  )
}

export default ModalArea

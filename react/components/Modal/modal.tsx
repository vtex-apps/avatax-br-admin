import React, { FC, useContext } from 'react'
import { Modal, Button } from 'vtex.styleguide'

import AuthContext from '../../context/AuthContext'
import EstablishmentContext from '../../context/EstablishmentContext'

const ModalArea: FC = (props) => {
  const context = useContext(EstablishmentContext)
  const contextAuth = useContext(AuthContext)

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
              onClick={() => context.saveConfigurations(contextAuth.auth.id)}
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

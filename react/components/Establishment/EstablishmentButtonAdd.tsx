import React, { FC, useContext } from 'react'
import { Button, Alert } from 'vtex.styleguide'

import AuthContext from '../../context/AuthContext'
import EstablishmentContext from '../../context/EstablishmentContext'

const EstablishmentButtonAdd: FC = () => {
  const context = useContext(EstablishmentContext)
  const contextAuth = useContext(AuthContext)

  return (
    <>
      <div className="mb5">
        <span className="mr4">
          <Button
            variation="primary"
            size="large"
            onClick={() => context.saveConfigurations(contextAuth.auth.id)}
          >
            Adicionar
          </Button>
        </span>
      </div>
      {context.showAlert === true ? (
        <Alert type="success" onClose={context.handleCloseAlert}>
          Dados salvos!
        </Alert>
      ) : null}
    </>
  )
}

export default EstablishmentButtonAdd

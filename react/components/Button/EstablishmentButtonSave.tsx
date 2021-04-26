import React, { FC, useContext } from 'react'
import { Button } from 'vtex.styleguide'

import AuthContext from '../../context/AuthContext'
import EstablishmentContext from '../../context/EstablishmentContext'

const EstablishmentButtonSave: FC = () => {
  const context = useContext(EstablishmentContext)
  const contextAuth = useContext(AuthContext)

  return (
    <div className="mb5">
      <span className="mr4">
        <Button
          variation="primary"
          size="large"
          onClick={() => context.saveConfigurations(contextAuth.auth.id)}
        >
          Salvar
        </Button>
      </span>
    </div>
  )
}

export default EstablishmentButtonSave

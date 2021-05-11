import React, { FC, useContext } from 'react'
import { Button } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

const EstablishmentButtonSave: FC = () => {
  const context = useContext(EstablishmentContext)

  return (
    <div className="mb5">
      <span className="mr4">
        <Button
          variation="primary"
          size="large"
          onClick={() => context.saveConfigurations()}
        >
          Salvar
        </Button>
      </span>
    </div>
  )
}

export default EstablishmentButtonSave

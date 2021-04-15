import React from 'react'
import { Button } from 'vtex.styleguide'

export const EstablishmentButtonAdd = () => {
  return (
    <div className="mb5">
      <span className="mr4">
        <Button
          variation="primary"
          size="large"
          // onClick={() => saveConfigurations(null, false)}
        >
          Adicionar
        </Button>
      </span>
    </div>
  )
}

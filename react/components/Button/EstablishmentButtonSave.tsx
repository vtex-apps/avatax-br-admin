import React from 'react'
import { Button } from 'vtex.styleguide'

export const EstablishmentButtonSave = () => {
  return (
    <div className="mb5">
      <span className="mr4">
        <Button
          variation="primary"
          size="large"
          // onClick={saveConfigurations}
        >
          Salvar
        </Button>
      </span>
    </div>
  )
}

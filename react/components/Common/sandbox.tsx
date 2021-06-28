import React, { FC, useContext } from 'react'
import { Checkbox } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

const Sandbox: FC = () => {
  const provider = useContext(EstablishmentContext)

  return (
    <>
      <div className="mt2 dib inline-flex">
        {'Ambiente: '}
        <span
          className={
            provider.settings.sandbox
              ? 'c-warning active-c-warning ml2'
              : ' c-danger active-c-danger ml2'
          }
        >
          {provider.settings.sandbox ? ' Sandbox' : ' Produção'}
        </span>
        <br />
        <br />
      </div>
      <div className="mb3">
        <Checkbox
          checked={provider.settings.sandbox}
          id="option-0"
          label="Usar ambiente sandbox"
          name="default-checkbox-group"
          onChange={() =>
            provider.updateSettingsSandbox({
              sandbox: !provider.settings.sandbox,
            })
          }
          value="option-0"
        />
      </div>
    </>
  )
}

export default Sandbox

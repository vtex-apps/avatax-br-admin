import React, { FC, SyntheticEvent, useContext } from 'react'
import { Input, InputPassword, Button } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

const Authentication: FC = () => {
  const provider = useContext(EstablishmentContext)

  return (
    <>
      <div className="w-40">
        {' '}
        Parâmetros de autenticação:
        <br />
        <br />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-column w-100">
          <div className="mb5">
            <Input
              label="Insira seu Client ID"
              value={provider.settings.clientId}
              size="regular"
              readOnly={!provider.change}
              onChange={(event: any) => {
                provider.updateSettings({ clientId: event.target.value })
              }}
            />
          </div>
          <div className="mb5">
            <InputPassword
              label="Insira seu Client Secret"
              value={provider.settings.clientSecret}
              size="regular"
              readOnly={!provider.change}
              onChange={(event: any) => {
                provider.updateSettings({ clientSecret: event.target.value })
              }}
            />
          </div>
        </div>
        <div className="flex flex-column  w-100 ">
          <span className="mt9 ml8">
            <Button
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                provider.changeSettings()
              }}
            >
              {!provider.change ? 'Alterar valores' : 'Salvar'}
            </Button>
          </span>
        </div>
      </div>
    </>
  )
}

export default Authentication

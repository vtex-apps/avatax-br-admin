import React, { FC, SyntheticEvent, useContext } from 'react'
import { Button } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

const Ping: FC = () => {
  const provider = useContext(EstablishmentContext)

  return (
    <>
      <div className="mt2 dib inline-flex">
        {'Verificar Ping: '}
        <span
          className={
            provider.ping === 1
              ? 'active-c-success c-success ml2'
              : ' c-danger active-c-danger ml2'
          }
        >
          {provider.ping === 0
            ? ''
            : provider.ping === 1
            ? 'Verificado'
            : 'Falhou'}
        </span>
        <br />
        <br />
      </div>
      <div className="mb3">
        <Button
          onClick={(e: SyntheticEvent) => {
            e.preventDefault()
            provider.verifyPing()
          }}
        >
          {'Verificar Ping'}
        </Button>
      </div>
    </>
  )
}

export default Ping

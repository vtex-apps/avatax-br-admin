import React, { FC, useState } from 'react'

import EstablishmentContext from '../../context/EstablishmentContext'

const EstablishmentProvider: FC = (props) => {
  const [establishment, setEstablishment] = useState<Establishment>({})

  const updateEstablishment = (object: Establishment) => {
    setEstablishment({
      ...establishment,
      ...object,
    })
  }

  return (
    <EstablishmentContext.Provider
      value={{ establishment, updateEstablishment }}
    >
      {props.children}
    </EstablishmentContext.Provider>
  )
}

export default EstablishmentProvider

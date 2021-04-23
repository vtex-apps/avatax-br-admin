import React, { FC, useState } from 'react'

import EstablishmentContext from '../../context/EstablishmentContext'

const EstablishmentProvider: FC = (props) => {
  const [establishment, setEstablishment] = useState<Establishment>({})
  const [edit, setEdit] = useState<boolean>(false)

  const updateEstablishment = (object: Establishment) => {
    setEstablishment({
      ...establishment,
      ...object,
    })
  }

  return (
    <EstablishmentContext.Provider
      value={{ establishment, updateEstablishment, edit, setEdit }}
    >
      {props.children}
    </EstablishmentContext.Provider>
  )
}

export default EstablishmentProvider

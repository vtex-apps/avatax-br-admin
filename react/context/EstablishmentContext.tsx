import React from 'react'

interface EstablishmentContextType {
  establishment: Establishment
  updateEstablishment: (establishment: Establishment) => void
  edit: boolean
  setEdit: (edit: boolean) => void
}
const EstablishmentContext = React.createContext<EstablishmentContextType>({
  establishment: {},
  updateEstablishment: () => {},
  edit: false,
  setEdit: () => {},
})

export default EstablishmentContext

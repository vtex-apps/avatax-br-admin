import React from 'react'

interface EstablishmentContextType {
  establishment: Establishment
  updateEstablishment: (establishment: Establishment) => void
}
const EstablishmentContext = React.createContext<EstablishmentContextType>({
  establishment: {},
  updateEstablishment: () => {},
})

export default EstablishmentContext

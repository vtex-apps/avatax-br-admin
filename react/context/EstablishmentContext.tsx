import React from 'react'

interface EstablishmentContextType {
  establishment: Establishment
  setEstablishment: (establishment: Establishment) => void
  edit: boolean
  setEdit: (edit: boolean) => void
  loading: boolean
  establishmentList?: Establishment[]
  update: (establishment: Establishment) => void
  deleteEstablishments: (documentId: string) => void
  saveConfigurations: (documentId: string) => void
}
const EstablishmentContext = React.createContext<EstablishmentContextType>({
  establishment: {},
  setEstablishment: () => {},
  edit: false,
  setEdit: () => {},
  loading: true,
  establishmentList: [],
  update: () => {},
  deleteEstablishments: () => {},
  saveConfigurations: () => {},
})

export default EstablishmentContext

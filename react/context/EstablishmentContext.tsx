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
  showAlert: boolean
  setShowAlert: (showAlert: boolean) => void
  handleCloseAlert: () => void
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
  showAlert: false,
  setShowAlert: () => {},
  handleCloseAlert: () => {},
})

export default EstablishmentContext

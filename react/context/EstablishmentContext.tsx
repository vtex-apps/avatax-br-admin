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
  saveConfigurations: () => Promise<boolean>
  showAlert: boolean
  setShowAlert: (showAlert: boolean) => void
  handleCloseAlert: () => void
  docks: Docks[] | undefined
  validationValues: EstablishmentValidation
  zip: boolean
  validationFuntion: (object: Establishment) => Promise<string>
  showAlertUpdate: boolean
  setShowAlertUpdate: (showAlert: boolean) => void
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
  saveConfigurations: async () => false,
  showAlert: false,
  setShowAlert: () => {},
  handleCloseAlert: () => {},
  docks: [{ name: '', id: '' }],
  validationValues: {},
  zip: false,
  validationFuntion: async () => '',
  showAlertUpdate: false,
  setShowAlertUpdate: () => {},
})

export default EstablishmentContext

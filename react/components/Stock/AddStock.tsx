import React, { FC, useState } from 'react'
import { Alert } from 'vtex.styleguide'

import EstablishmentButtonAdd from '../Button/EstablishmentButtonAdd'
import { DividerArea } from '../Divider/divider'
import EstablishmentDropdown from '../Dropdown/EstablishmentDropdown'
import AuthInputPassword from '../InputPassword/AuthInputPassword'
import AuthInput from '../Inputs/AuthInput'
import EstablishmentInput from '../Inputs/EstablishmentInput'
import AuthProvider from '../Provider/AuthProvider'
import EstablishmentProvider from '../Provider/EstablishmentProvider'
import {
  activitySector,
  city,
  cityCode,
  clientCompanyLocation,
  clientId,
  clientSecret,
  cnpj,
  complement,
  country,
  dockId,
  dockName,
  entityType,
  icmsTaxPayer,
  messageType,
  neighborhood,
  phone,
  state,
  stateTaxId,
  street,
  streetNumber,
  suframa,
  taxRegime,
  zipCode,
} from '../Values/values'

const AddStock: FC = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
      <AuthProvider>
        <DividerArea />

        <AuthInputPassword {...clientId} />
        <AuthInputPassword {...clientSecret} />
        <AuthInput {...clientCompanyLocation} />

        <EstablishmentProvider>
          <DividerArea />

          <h3 className="t-heading-3">Informações</h3>

          <EstablishmentInput {...dockId} />
          <EstablishmentInput {...dockName} />

          <EstablishmentDropdown {...messageType} />
          <EstablishmentDropdown {...activitySector} />
          <EstablishmentDropdown {...icmsTaxPayer} />
          <EstablishmentDropdown {...taxRegime} />
          <EstablishmentDropdown {...entityType} />

          <EstablishmentInput {...stateTaxId} />

          <DividerArea />

          <h3 className="t-heading-3">Localidade</h3>

          <EstablishmentInput {...street} />
          <EstablishmentInput {...neighborhood} />
          <EstablishmentInput {...zipCode} />
          <EstablishmentInput {...cityCode} />
          <EstablishmentInput {...city} />
          <EstablishmentInput {...state} />

          <EstablishmentDropdown {...country} />
          <EstablishmentInput {...streetNumber} />
          <EstablishmentInput {...complement} />
          <EstablishmentInput {...phone} />
          <EstablishmentInput {...cnpj} />
          <EstablishmentInput {...suframa} />

          <EstablishmentButtonAdd />
          {showAlert === true ? (
            <Alert type="success" onClose={handleCloseAlert}>
              Dados salvos!
            </Alert>
          ) : null}
        </EstablishmentProvider>
      </AuthProvider>
    </>
  )
}

export default AddStock

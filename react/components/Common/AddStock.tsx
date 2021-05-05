import React, { FC } from 'react'

import EstablishmentButtonAdd from '../Establishment/EstablishmentButtonAdd'
import { DividerArea } from './divider'
import EstablishmentDropdown from '../Establishment/EstablishmentDropdown'
import AuthInputPassword from '../Auth/AuthInputPassword'
import AuthInput from '../Auth/AuthInput'
import EstablishmentInput from '../Establishment/EstablishmentInput'
import AuthProvider from '../Auth/AuthProvider'
import EstablishmentProvider from '../Establishment/EstablishmentProvider'
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
} from './values'

const AddStock: FC = () => {
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
        </EstablishmentProvider>
      </AuthProvider>
    </>
  )
}

export default AddStock

import React, { FC } from 'react'

import EstablishmentButtonAdd from '../Establishment/EstablishmentButtonAdd'
import { DividerArea } from './divider'
import EstablishmentDropdown from '../Establishment/EstablishmentDropdown'
import EstablishmentInput from '../Establishment/EstablishmentInput'
import EstablishmentProvider from '../Establishment/EstablishmentProvider'
import {
  activitySector,
  city,
  cityCode,
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
      <DividerArea />

      <EstablishmentProvider>
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

        <EstablishmentInput {...zipCode} />
        <EstablishmentInput {...street} />
        <EstablishmentInput {...neighborhood} />
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
    </>
  )
}

export default AddStock

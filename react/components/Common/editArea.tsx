import React, { FC } from 'react'

import EstablishmentButtonSave from '../Establishment/EstablishmentButtonSave'
import { DividerArea } from './divider'
import EstablishmentDropdown from '../Establishment/EstablishmentDropdown'
import EstablishmentInput from '../Establishment/EstablishmentInput'
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

const EditArea: FC = () => {
  return (
    <>
      <div className="flex flex-column flex-row-ns">
        <div className="w-100">
          <h3 className="t-heading-3">Informações</h3>

          <EstablishmentDropdown {...dockName} />
          <EstablishmentInput {...dockId} />

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

          <EstablishmentButtonSave />
        </div>
      </div>
    </>
  )
}

export default EditArea

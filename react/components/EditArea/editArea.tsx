import React, { FC } from 'react'

import EstablishmentButtonSave from '../Button/EstablishmentButtonSave'
import { DividerArea } from '../Divider/divider'
import EstablishmentDropdown from '../Dropdown/EstablishmentDropdown'
import AuthInputPassword from '../InputPassword/AuthInputPassword'
import AuthInput from '../Inputs/AuthInput'
import EstablishmentInput from '../Inputs/EstablishmentInput'
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

const EditArea: FC = () => {
  return (
    <>
      <div className="flex flex-column flex-row-ns">
        <div className="w-100">
          <AuthInputPassword {...clientId} />
          <AuthInputPassword {...clientSecret} />
          <AuthInput {...clientCompanyLocation} />

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

          <EstablishmentButtonSave />
        </div>
      </div>
    </>
  )
}

export default EditArea

import React, { FC, useContext } from 'react'

import EstablishmentButtonAdd from '../Establishment/EstablishmentButtonAdd'
import { DividerArea } from './divider'
import EstablishmentDropdown from '../Establishment/EstablishmentDropdown'
import EstablishmentInput from '../Establishment/EstablishmentInput'
import {
  activitySector,
  city,
  cnpj,
  complement,
  country,
  dockId,
  dockName,
  entityType,
  icmsTaxPayer,
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
import EstablishmentContext from '../../context/EstablishmentContext'

const AddStock: FC = () => {
  const provider = useContext(EstablishmentContext)

  return (
    <>
      <DividerArea />

      <h3 className="t-heading-3">Informações</h3>
      <EstablishmentDropdown {...dockName} />
      <EstablishmentInput {...dockId} />
      <EstablishmentDropdown {...activitySector} />
      <EstablishmentDropdown {...taxRegime} />
      <EstablishmentDropdown {...entityType} />
      <EstablishmentDropdown {...icmsTaxPayer} />
      {provider.establishment.icmsTaxPayer === 'True' && (
        <EstablishmentInput {...stateTaxId} />
      )}
      <DividerArea />
      <h3 className="t-heading-3">Localidade</h3>
      <EstablishmentInput {...zipCode} />
      <EstablishmentInput {...street} />
      <EstablishmentInput {...neighborhood} />
      <EstablishmentInput {...city} />
      <EstablishmentInput {...state} />
      <EstablishmentDropdown {...country} />
      <EstablishmentInput {...streetNumber} />
      <EstablishmentInput {...complement} />
      <EstablishmentInput {...phone} />
      <EstablishmentInput {...cnpj} />
      <EstablishmentInput {...suframa} />
      <EstablishmentButtonAdd />
    </>
  )
}

export default AddStock

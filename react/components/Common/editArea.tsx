import React, { FC } from 'react'
import { useIntl } from 'react-intl'

import { DividerArea } from './divider'
import EstablishmentDropdown from '../Establishment/EstablishmentDropdown'
import EstablishmentInput from '../Establishment/EstablishmentInput'
import Values from './values'
import { stock } from '../../utils/definedMessages'

const EditArea: FC = () => {
  const intl = useIntl()

  const allValues: Values = Values()

  return (
    <>
      <div className="flex flex-column flex-row-ns">
        <div className="w-100">
          <h3 className="t-heading-3">{intl.formatMessage(stock.info)}</h3>

          <EstablishmentDropdown {...allValues.dockName} />
          <EstablishmentInput {...allValues.dockId} />

          <EstablishmentDropdown {...allValues.activitySector} />
          <EstablishmentDropdown {...allValues.icmsTaxPayer} />
          <EstablishmentDropdown {...allValues.taxRegime} />

          <EstablishmentDropdown {...allValues.entityType} />

          <EstablishmentInput {...allValues.stateTaxId} />

          <DividerArea />

          <h3 className="t-heading-3">{intl.formatMessage(stock.place)}</h3>

          <EstablishmentInput {...allValues.zipCode} />

          <EstablishmentInput {...allValues.street} />

          <EstablishmentInput {...allValues.neighborhood} />
          <EstablishmentInput {...allValues.cityCode} />
          <EstablishmentInput {...allValues.city} />
          <EstablishmentInput {...allValues.state} />
          <EstablishmentDropdown {...allValues.country} />
          <EstablishmentInput {...allValues.streetNumber} />
          <EstablishmentInput {...allValues.complement} />
          <EstablishmentInput {...allValues.phone} />
          <EstablishmentInput {...allValues.cnpj} />
          <EstablishmentInput {...allValues.suframa} />
        </div>
      </div>
    </>
  )
}

export default EditArea

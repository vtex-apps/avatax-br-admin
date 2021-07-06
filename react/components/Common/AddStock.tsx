import React, { FC } from 'react'
import { useIntl } from 'react-intl'

import EstablishmentButtonAdd from '../Establishment/EstablishmentButtonAdd'
import { DividerArea } from './divider'
import EstablishmentDropdown from '../Establishment/EstablishmentDropdown'
import EstablishmentInput from '../Establishment/EstablishmentInput'
import EstablishmentProvider from '../Establishment/EstablishmentProvider'
import Values from './values'
import { stock } from '../../utils/definedMessages'

const AddStock: FC = () => {
  const intl = useIntl()

  const allValues: Values = Values()

  return (
    <>
      <DividerArea />

      <EstablishmentProvider>
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

        <EstablishmentButtonAdd />
      </EstablishmentProvider>
    </>
  )
}

export default AddStock

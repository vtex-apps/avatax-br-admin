import { activitySectors } from '../../utils/constants/activitySector'

export const parse = (log: CalculationLog) => {
  return {
    createdIn: new Date(log.createdIn).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }),
    email: log.email,
    activitySector: `${activitySectors[log.establishment.activitySector]} → ${
      activitySectors[log.client.activitySector] ?? log.client.activitySector
    }`,
    establishment_dockName: log.establishment.dockName,
    city: `${log.establishment.city} → ${log.client.city}`,
    state: `${log.establishment.state} → ${log.client.state}`,
    numberOfProducts: log.avalaraReturn
      .map((item) => item.numberOfItems)
      .reduce((val1, val2) => val1 + val2),
    productsTotal: log.avalaraReturn
      .map((item) => item.lineAmount)
      .reduce((val1, val2) => val1 + val2)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    freightTotal: log.avalaraReturn
      .map((item) => item.freightAmount)
      .reduce((val1, val2) => val1 + val2)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    includedTaxes: log.avalaraReturn
      .map((obj) =>
        obj.taxDetails
          .filter((tax) => tax.taxImpact.impactOnFinalPrice === 'Included')
          .map((tax) => tax.taxType)
      )
      .reduce((acc, tax) => acc.concat(tax))
      .filter((val, index, arr) => arr.indexOf(val) === index)
      .join(', '),
    includedTaxesTotal: log.avalaraReturn
      .map((obj) =>
        obj.taxDetails
          .filter((tax) => tax.taxImpact.impactOnFinalPrice === 'Included')
          .map((tax) => tax.tax)
      )
      .reduce((acc, tax) => acc.concat(tax))
      .reduce((val1, val2) => val1 + val2)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    addedTaxes: log.avalaraReturn
      .map((obj) =>
        obj.taxDetails
          .filter((tax) => tax.taxImpact.impactOnFinalPrice === 'Add')
          .map((tax) => tax.taxType)
      )
      .reduce((acc, tax) => acc.concat(tax))
      .filter((val, index, arr) => arr.indexOf(val) === index)
      .join(', '),
    addedTaxesTotal: log.avalaraReturn
      .map((obj) =>
        obj.taxDetails
          .filter((tax) => tax.taxImpact.impactOnFinalPrice === 'Add')
          .map((tax) => tax.tax)
      )
      .reduce((acc, tax) => acc.concat(tax))
      .reduce((val1, val2) => val1 + val2)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
  }
}

export default parse

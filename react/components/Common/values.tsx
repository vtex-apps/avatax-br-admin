import { useQuery } from 'react-apollo'
import { MessageDescriptor, useIntl } from 'react-intl'

import { values } from '../../utils/definedMessages'
import getDocks from '../../queries/getDocks.gql'

export const dockIdValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'dockId',
    placeholder: formatMessage(values.dockIdPlaceholder),
    label: formatMessage(values.dockIdLabel),
  }
}

export const dockNameValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'dockName',
    placeholder: formatMessage(values.dockNamePlaceholder),
    label: formatMessage(values.dockNameLabel),
    options: [],
  }
}

export const icmsTaxPayerValeus = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'icmsTaxPayer',
    label: formatMessage(values.icmsLabel),
    options: [
      {
        value: true,
        label: formatMessage(values.icmsOptionsTrue),
      },
      {
        value: false,
        label: formatMessage(values.icmsOptionsFalse),
      },
    ],
  }
}

export const activitySectorValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'activitySector',
    label: formatMessage(values.activityLabel),
    options: [
      {
        value: 'securityPublicAgency',
        label: formatMessage(values.activitySecurity),
      },
      {
        value: 'wholesale',
        label: formatMessage(values.activityWholesale),
      },
      {
        value: 'generalWarehouse',
        label: formatMessage(values.activityWarehouseGeneral),
      },
      {
        value: 'audiovisualIndustry',
        label: formatMessage(values.activityAudiovisual),
      },
      {
        value: 'distributionCenter',
        label: formatMessage(values.activityDistribution),
      },
      {
        value: 'construction',
        label: formatMessage(values.activityConstruction),
      },
      {
        value: 'finalConsumer',
        label: formatMessage(values.activityConsumer),
      },
      {
        value: 'coops',
        label: formatMessage(values.activityCoops),
      },
      {
        value: 'farmCoop',
        label: formatMessage(values.activityFarmCoop),
      },
      {
        value: 'bondedWarehouse',
        label: formatMessage(values.activityWarehouseBonded),
      },
      {
        value: 'stockWarehouse',
        label: formatMessage(values.activityWarehouseStock),
      },
      {
        value: 'distributor',
        label: formatMessage(values.activityDistributor),
      },
      {
        value: 'waterDistributor',
        label: formatMessage(values.activityDistributorWater),
      },
      {
        value: 'fuelDistributor',
        label: formatMessage(values.activityDistributorFuel),
      },
      {
        value: 'electricityDistributor',
        label: formatMessage(values.activityDistributorEletricity),
      },
      {
        value: 'pharmaDistributor',
        label: formatMessage(values.activityDistributorPharma),
      },
      {
        value: 'nonProfitEntity',
        label: formatMessage(values.activityEntity),
      },
      {
        value: 'extractor',
        label: formatMessage(values.activityExtractor),
      },
      {
        value: 'armedForces',
        label: formatMessage(values.activityArmed),
      },
      {
        value: 'mealSupplier',
        label: formatMessage(values.activityMeal),
      },
      {
        value: 'energyGeneration',
        label: formatMessage(values.activityGeneration),
      },
      {
        value: 'importer',
        label: formatMessage(values.activityImporter),
      },
      {
        value: 'industry',
        label: formatMessage(values.activityIndustry),
      },
      {
        value: 'filmIndustry',
        label: formatMessage(values.activityFilm),
      },
      {
        value: 'itaipubiNacional',
        label: formatMessage(values.activityItaipu),
      },
      {
        value: 'auctioneer',
        label: formatMessage(values.activityAuctioneer),
      },
      {
        value: 'publicAgency',
        label: formatMessage(values.activityAgency),
      },
      {
        value: 'ruralProducer',
        label: formatMessage(values.activityRural),
      },
      {
        value: 'broadcastingIndustry',
        label: formatMessage(values.activityBroadcasting),
      },
      {
        value: 'service',
        label: formatMessage(values.activityService),
      },
      {
        value: 'telco',
        label: formatMessage(values.activityTelco),
      },
      {
        value: 'maritimeService',
        label: formatMessage(values.activityMaritime),
      },
      {
        value: 'religiousEstablishment',
        label: formatMessage(values.activityReligious),
      },
      {
        value: 'transporter',
        label: formatMessage(values.activityTransporter),
      },
      {
        value: 'retail',
        label: formatMessage(values.activityRetail),
      },
    ],
  }
}

export const taxRegimeValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'taxRegime',
    label: formatMessage(values.taxRegimeLabel),
    options: [
      {
        value: 'individual',
        label: formatMessage(values.taxRegimeIndividual),
      },
      {
        value: 'estimatedProfit',
        label: formatMessage(values.taxRegimeProfitEstimated),
      },
      {
        value: 'realProfit',
        label: formatMessage(values.taxRegimeProfitReal),
      },
      {
        value: 'simplified',
        label: formatMessage(values.taxRegimeSimplified),
      },
      {
        value: 'simplifiedOverGrossthreshold',
        label: formatMessage(values.taxRegimeSimplifiedGrossthreshold),
      },
      {
        value: 'simplifiedEntrepreneur',
        label: formatMessage(values.taxRegimeSimplifiedEntrepreneur),
      },
      {
        value: 'notApplicable',
        label: formatMessage(values.taxRegimeNotApplicable),
      },
    ],
  }
}

export const entityTypeValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'entityType',
    label: formatMessage(values.entityTypeLabel),
    options: [
      {
        value: 'mixedCapital',
        label: formatMessage(values.entityTypeMixedCapital),
      },
      {
        value: 'stateGovernment',
        label: formatMessage(values.entityTypeGovernment),
      },
      {
        value: 'foreign',
        label: formatMessage(values.entityTypeForeign),
      },
      {
        value: 'federalGovernment',
        label: formatMessage(values.entityTypeFederal),
      },
      {
        value: 'individual',
        label: formatMessage(values.entityTypeIndividual),
      },
      {
        value: 'cityGovernment',
        label: formatMessage(values.entityTypeCity),
      },
      {
        value: 'business',
        label: formatMessage(values.entityTypeBusiness),
      },
    ],
  }
}

export const stateTaxIdValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'stateTaxId',
    placeholder: formatMessage(values.stateTaxIdPlaceholder),
    label: formatMessage(values.stateTaxIdLabel),
  }
}

export const streetValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'street',
    placeholder: formatMessage(values.streetPlaceholder),
    label: formatMessage(values.streetLabel),
  }
}

export const neighborhoodValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'neighborhood',
    placeholder: formatMessage(values.neighborhoodPlaceholder),
    label: formatMessage(values.neighborhoodLabel),
  }
}

export const zipCodeValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'zipCode',
    placeholder: formatMessage(values.zipCodePlaceholder),
    label: formatMessage(values.zipCodeLabel),
    type: 'number',
  }
}

export const cityCodeValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'cityCode',
    placeholder: formatMessage(values.cityCodePlaceholder),
    label: formatMessage(values.cityCodeLabel),
    type: 'number',
  }
}

export const cityValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'city',
    placeholder: formatMessage(values.cityPlaceholder),
    label: formatMessage(values.cityLabel),
  }
}

export const stateValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'state',
    placeholder: formatMessage(values.statePlaceholder),
    label: formatMessage(values.stateLabel),
    maxLength: 2,
  }
}

export const countryValeus = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'country',
    label: formatMessage(values.countryLabel),
    options: [
      {
        value: 'BRA',
        label: formatMessage(values.countryBr),
      },
    ],
  }
}

export const streetNumberValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'streetNumber',
    placeholder: formatMessage(values.streetNumberPlaceholder),
    label: formatMessage(values.streetNumberLabel),
    type: 'number',
  }
}

export const complementValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'complement',
    placeholder: formatMessage(values.complementPlaceholder),
    label: formatMessage(values.complementLabel),
  }
}

export const phoneValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'phone',
    placeholder: formatMessage(values.phonePlaceholder),
    label: formatMessage(values.phoneLabel),
  }
}

export const cnpjValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'cnpj',
    placeholder: formatMessage(values.cnpjPlaceholder),
    label: formatMessage(values.cnpjLabel),
    type: 'number',
  }
}

export const suframaValues = (
  formatMessage: (desc: MessageDescriptor) => string
) => {
  return {
    name: 'suframa',
    placeholder: formatMessage(values.suframaPlaceholder),
    label: formatMessage(values.suframaLabel),
  }
}

function Values() {
  const intl = useIntl()

  const dockId: {
    name: string
    placeholder: string
    label: string
  } = dockIdValues(intl.formatMessage)

  const dockName: {
    name: string
    placeholder: string
    label: string
    options: Array<{ value: string; label: string }>
  } = dockNameValues(intl.formatMessage)

  const icmsTaxPayer: {
    name: string
    label: string
    options: Array<{ value: boolean; label: string }>
  } = icmsTaxPayerValeus(intl.formatMessage)

  const activitySector: {
    name: string
    label: string
    options: Array<{ value: string; label: string }>
  } = activitySectorValues(intl.formatMessage)

  const taxRegime: {
    name: string
    label: string
    options: Array<{ value: string; label: string }>
  } = taxRegimeValues(intl.formatMessage)

  const entityType: {
    name: string
    label: string
    options: Array<{ value: string; label: string }>
  } = entityTypeValues(intl.formatMessage)

  const stateTaxId: {
    name: string
    placeholder: string
    label: string
  } = stateTaxIdValues(intl.formatMessage)

  const street: {
    name: string
    placeholder: string
    label: string
  } = streetValues(intl.formatMessage)

  const neighborhood: {
    name: string
    placeholder: string
    label: string
  } = neighborhoodValues(intl.formatMessage)

  const zipCode: {
    name: string
    placeholder: string
    label: string
  } = zipCodeValues(intl.formatMessage)

  const cityCode: {
    name: string
    placeholder: string
    label: string
  } = cityCodeValues(intl.formatMessage)

  const city: {
    name: string
    placeholder: string
    label: string
  } = cityValues(intl.formatMessage)

  const state: {
    name: string
    placeholder: string
    label: string
  } = stateValues(intl.formatMessage)

  const country: {
    name: string
    label: string
    options: Array<{ value: string; label: string }>
  } = countryValeus(intl.formatMessage)

  const streetNumber: {
    name: string
    placeholder: string
    label: string
  } = streetNumberValues(intl.formatMessage)

  const complement: {
    name: string
    placeholder: string
    label: string
  } = complementValues(intl.formatMessage)

  const phone: {
    name: string
    placeholder: string
    label: string
  } = phoneValues(intl.formatMessage)

  const cnpj: {
    name: string
    placeholder: string
    label: string
  } = cnpjValues(intl.formatMessage)

  const suframa: {
    name: string
    placeholder: string
    label: string
  } = suframaValues(intl.formatMessage)

  const { data: docks } = useQuery<GetDocks>(getDocks)

  const valueDocks = docks?.getDocks

  if (dockName.options.length === 0) {
    valueDocks?.forEach((element) => {
      dockName.options.push({
        value: element.name,
        label: element.name,
      })
    })
  }

  const allValues: Values = {
    dockId,
    dockName,
    icmsTaxPayer,
    activitySector,
    taxRegime,
    entityType,
    stateTaxId,
    street,
    neighborhood,
    zipCode,
    cityCode,
    city,
    state,
    country,
    streetNumber,
    complement,
    phone,
    cnpj,
    suframa,
  }

  return allValues
}

export default Values

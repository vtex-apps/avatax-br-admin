interface Establishment {
  activitySector?: string
  icmsTaxPayer?: string
  taxRegime?: string
  entityType?: string
  stateTaxId?: string
  street?: string
  neighborhood?: string
  zipCode?: string
  city?: string
  state?: string
  country?: string
  streetNumber?: string
  complement?: string
  phone?: string
  cnpj?: string
  suframa?: string
  dockId?: string
  dockName?: string
  [index: string]: string
}

interface GetEstablishment {
  establishments: Establishment[]
}

interface EstablishmentValidation {
  activitySector?: boolean
  icmsTaxPayer?: boolean
  taxRegime?: boolean
  entityType?: boolean
  stateTaxId?: boolean
  street?: boolean
  neighborhood?: boolean
  zipCode?: boolean
  city?: boolean
  state?: boolean
  country?: boolean
  streetNumber?: boolean
  complement?: boolean
  cnpj?: boolean
  suframa?: boolean
  dockId?: boolean
  dockName?: boolean
  [index: string]: boolean
}

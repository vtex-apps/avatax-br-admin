interface Establishment {
  activitySector?: string
  icmsTaxPayer?: string
  taxRegime?: string
  entityType?: string
  stateTaxId?: string
  street?: string
  neighborhood?: string
  zipCode?: string
  cityCode?: string
  city?: string
  state?: string
  country?: string
  streetNumber?: string
  complement?: string
  phone?: string
  cnpj?: string
  suframa?: string
  messageType?: string
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
  cityCode?: boolean
  city?: boolean
  state?: boolean
  country?: boolean
  streetNumber?: boolean
  complement?: boolean
  phone?: boolean
  cnpj?: boolean
  suframa?: boolean
  messageType?: boolean
  dockId?: boolean
  dockName?: boolean
  [index: string]: boolean
}

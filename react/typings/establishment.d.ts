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

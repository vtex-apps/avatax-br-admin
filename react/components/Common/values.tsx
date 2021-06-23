export const dockId = {
  name: 'dockId',
  placeholder: 'Inserir ID da doca',
  label: 'Doca ID',
}

export const dockName: {
  name: string
  placeholder: string
  label: string
  options: Array<{ value: string; label: string }>
} = {
  name: 'dockName',
  placeholder: 'Inserir nome da doca',
  label: 'Nome da doca',
  options: [],
}

export const icmsTaxPayer = {
  name: 'icmsTaxPayer',
  label: 'Contribuinte de ICMS',
  options: [
    {
      value: true,
      label: 'Sim',
    },
    {
      value: false,
      label: 'Não',
    },
  ],
}

export const activitySector = {
  name: 'activitySector',
  label: 'Setor de atividade',
  options: [
    {
      value: 'securityPublicAgency',
      label: 'Agência Pública de Segurança Brasileira',
    },
    {
      value: 'wholesale',
      label: 'Atacado',
    },
    {
      value: 'generalWarehouse',
      label: 'Armazem Geral',
    },
    {
      value: 'audiovisualIndustry',
      label: 'Audiovisual',
    },
    {
      value: 'distributionCenter',
      label: 'Centro de Distribuição',
    },
    {
      value: 'construction',
      label: 'Construção Civil',
    },
    {
      value: 'finalConsumer',
      label: 'Consumidor Final',
    },
    {
      value: 'coops',
      label: 'Cooperativa',
    },
    {
      value: 'farmCoop',
      label: 'Cooperativa de Produtores',
    },
    {
      value: 'bondedWarehouse',
      label: 'Depósito Alfandegado',
    },
    {
      value: 'stockWarehouse',
      label: 'Depósito Fechado',
    },
    {
      value: 'distributor',
      label: 'Distribuidor',
    },
    {
      value: 'waterDistributor',
      label: 'Distribuidor de Água',
    },
    {
      value: 'fuelDistributor',
      label: 'Distribuidor de Combustível',
    },
    {
      value: 'electricityDistributor',
      label: 'Distribuidor de Energia Elétrica',
    },
    {
      value: 'pharmaDistributor',
      label: 'Distribuidor de Medicamento',
    },
    {
      value: 'nonProfitEntity',
      label: 'Entidades sem Fins Lucrativos',
    },
    {
      value: 'extractor',
      label: 'Extrator',
    },
    {
      value: 'armedForces',
      label: 'Forças Armadas',
    },
    {
      value: 'mealSupplier',
      label: 'Fornecedor de Refeição',
    },
    {
      value: 'energyGeneration',
      label: 'Gerador e Produtor De Energia Elétrica',
    },
    {
      value: 'importer',
      label: 'Importadora',
    },
    {
      value: 'industry',
      label: 'Industria',
    },
    {
      value: 'filmIndustry',
      label: 'Indústria Cinematográfica',
    },
    {
      value: 'itaipubiNacional',
      label: 'Itaipu Binacional',
    },
    {
      value: 'auctioneer',
      label: 'Leiloeiro',
    },
    {
      value: 'publicAgency',
      label: 'Orgão Publico',
    },
    {
      value: 'ruralProducer',
      label: 'Produtor Rural',
    },
    {
      value: 'broadcastingIndustry',
      label: 'Radiodifusão',
    },
    {
      value: 'service',
      label: 'Serviço',
    },
    {
      value: 'telco',
      label: 'Serviço de Comunicação',
    },
    {
      value: 'maritimeService',
      label: 'Serviço Marítimo',
    },
    {
      value: 'religiousEstablishment',
      label: 'Templos de Qualquer Culto',
    },
    {
      value: 'transporter',
      label: 'Transportador/Serviço de Transportadora',
    },
    {
      value: 'retail',
      label: 'Varejo',
    },
  ],
}

export const taxRegime = {
  name: 'taxRegime',
  label: 'Regime Tributário Federal',
  options: [
    {
      value: 'individual',
      label: 'Indivíduo',
    },
    {
      value: 'estimatedProfit',
      label: 'Lucro Presumido',
    },
    {
      value: 'realProfit',
      label: 'Lucro Real',
    },
    {
      value: 'simplified',
      label: 'Optatnte do SIMPLES',
    },
    {
      value: 'simplifiedOverGrossthreshold',
      label: 'Optante do SIMPLES com limite de faturamento bruto',
    },
    {
      value: 'simplifiedEntrepreneur',
      label: 'Micro Empreendedor Individual',
    },
    {
      value: 'notApplicable',
      label: 'Não Aplicável',
    },
  ],
}

export const entityType = {
  name: 'entityType',
  label: 'Tipo de entidade',
  options: [
    {
      value: 'mixedCapital',
      label: 'Capital misto',
    },
    {
      value: 'stateGovernment',
      label: 'Estado Governamental',
    },
    {
      value: 'foreign',
      label: 'Estrangeiro',
    },
    {
      value: 'federalGovernment',
      label: 'Governo Federal',
    },
    {
      value: 'individual',
      label: 'Individual',
    },
    {
      value: 'cityGovernment',
      label: 'Prefeitura',
    },
    {
      value: 'business',
      label: 'Negócio',
    },
  ],
}

export const stateTaxId = {
  name: 'stateTaxId',
  placeholder: 'Inserir Identificação fiscal estadual',
  label: 'Inscrição Estadual',
}

export const street = {
  name: 'street',
  placeholder: 'Inserir rua',
  label: 'Rua',
}

export const neighborhood = {
  name: 'neighborhood',
  placeholder: 'Inserir bairro',
  label: 'Bairro',
}

export const zipCode = {
  name: 'zipCode',
  placeholder: 'Inserir CEP',
  label: 'CEP',
  type: 'number',
}

export const cityCode = {
  name: 'cityCode',
  placeholder: 'Inserir código IBGE da cidade',
  label: 'Código IBGE da cidade',
  type: 'number',
}

export const city = {
  name: 'city',
  placeholder: 'Inserir cidade',
  label: 'Cidade',
}

export const state = {
  name: 'state',
  placeholder: 'Inserir estado',
  label: 'Estado',
  maxLength: 2,
}

export const country = {
  name: 'country',
  label: 'País',
  options: [
    {
      value: 'BRA',
      label: 'Brasil',
    },
  ],
}

export const streetNumber = {
  name: 'streetNumber',
  placeholder: 'Inserir número',
  label: 'Número',
  type: 'number',
}

export const complement = {
  name: 'complement',
  placeholder: 'Inserir complemento',
  label: 'Complemento',
}

export const phone = {
  name: 'phone',
  placeholder: 'Inserir telefone',
  label: 'Telefone',
}

export const cnpj = {
  name: 'cnpj',
  placeholder: 'Inserir CNPJ',
  label: 'CNPJ',
  type: 'number',
}

export const suframa = {
  name: 'suframa',
  placeholder: 'Inserir código suframa (Se existir)',
  label: 'Suframa',
}

export const tab1 = {
  label: 'Adicionar estoque',
  currentTabNumber: 1,
}

export const tab2 = {
  label: 'Estoques atuais',
  currentTabNumber: 2,
}

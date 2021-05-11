export const clientCompanyLocation = {
  name: 'clientCompanyLocation',
  placeholder: 'Inserir ID Avalara',
  label: 'Avalara Company ID',
}

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

export const clientId = {
  name: 'clientId',
  placeholder: 'Inserir Client ID',
  label: 'Client ID',
}

export const clientSecret = {
  name: 'clientSecret',
  placeholder: 'Inserir Client Secret',
  label: 'Client Secret',
}

export const messageType = {
  name: 'messageType',
  label: 'Produtos/Serviços',
  options: [
    {
      value: 'goods',
      label: 'Produtos',
    },
    {
      value: 'services',
      label: 'Serviços',
    },
  ],
}

export const icmsTaxPayer = {
  name: 'icmsTaxPayer',
  label: 'Contribuinte de ICMS',
  options: [
    {
      value: 'True',
      label: 'Sim',
    },
    {
      value: 'false',
      label: 'Não',
    },
  ],
}

export const activitySector = {
  name: 'activitySector',
  label: 'Setor de atividade',
  options: [
    {
      value: 'armedForces',
      label: 'Forças Armadas',
    },
    {
      value: 'auctioneer',
      label: 'Leiloeiro',
    },
    {
      value: 'audiovisualIndustry',
      label: 'Audiovisual',
    },
    {
      value: 'bondedWarehouse',
      label: 'Depósito alfandegado',
    },
    {
      value: 'broadcastingIndustry',
      label: 'Radiodifusão',
    },
    {
      value: 'construction',
      label: 'Construção civil',
    },
    {
      value: 'coops',
      label: 'Cooperativa',
    },
    {
      value: 'distributor',
      label: 'Distribuidor',
    },
    {
      value: 'distributionCenter',
      label: 'Centro de Distribuição',
    },
    {
      value: 'electricityDistributor',
      label: 'Distribuidor de Energia Elétrica',
    },
    {
      value: 'energyGeneration',
      label: 'Gerador e Produtor De Energia Elétrica',
    },
    {
      value: 'extractor',
      label: 'Extrator',
    },
    {
      value: 'farmCoop',
      label: 'Cooperativa de Produtores',
    },
    {
      value: 'filmIndustry',
      label: 'Indústria Cinematográfica',
    },
    {
      value: 'finalConsumer',
      label: 'Consumidor Final',
    },
    {
      value: 'fuelDistributor',
      label: 'Distribuidor de Combustível',
    },
    {
      value: 'generalWarehouse',
      label: 'Armazem geral',
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
      value: 'itaipubiNacional',
      label: 'Itaipu Binacional',
    },
    {
      value: 'maritimeService',
      label: 'Serviço Marítimo',
    },
    {
      value: 'mealSupplier',
      label: 'Fornecedor de Refeição',
    },
    {
      value: 'nonProfitEntity',
      label: 'Entidades sem fins lucrativos',
    },
    {
      value: 'pharmaDistributor',
      label: 'Distribuidor de Medicamento',
    },
    {
      value: 'publicAgency',
      label: 'Orgão Publico',
    },
    {
      value: 'religiousEstablishment',
      label: 'Templos de Qualquer Culto',
    },
    {
      value: 'retail',
      label: 'Varejo',
    },
    {
      value: 'ruralProducer',
      label: 'Produtor Rural',
    },
    {
      value: 'securityPublicAgency',
      label: 'Agência Pública de Segurança Brasileira',
    },
    {
      value: 'service',
      label: 'Serviço',
    },
    {
      value: 'stockWarehouse',
      label: 'Depósito Fechado',
    },
    {
      value: 'telco',
      label: 'Serviço de Comunicação',
    },
    {
      value: 'transporter',
      label: 'Transportador/Serviço de Transportadora',
    },
    {
      value: 'waterDistributor',
      label: 'Distribuidor de Água',
    },
    {
      value: 'wholesale',
      label: 'Atacado',
    },
  ],
}

export const taxRegime = {
  name: 'taxRegime',
  label: 'Regime Tributário Federal',
  options: [
    {
      value: 'realProfit',
      label: 'Lucro Real',
    },
    {
      value: 'estimatedProfit',
      label: 'Lucro presumido',
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
    {
      value: 'individual',
      label: 'Indivíduo',
    },
  ],
}

export const entityType = {
  name: 'entityType',
  label: 'Tipo de entidade',
  options: [
    {
      value: 'business',
      label: 'Negócio',
    },
    {
      value: 'individual',
      label: 'Individual',
    },
    {
      value: 'federalGovernment',
      label: 'Governo federal',
    },
    {
      value: 'stateGovernment',
      label: 'Estado governamental',
    },
    {
      value: 'cityGovernment',
      label: 'Prefeitura',
    },
    {
      value: 'foreign',
      label: 'Estrangeiro',
    },
    {
      value: 'mixedCapital',
      label: 'Capital misto',
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
}

export const cityCode = {
  name: 'cityCode',
  placeholder: 'Inserir código IBGE da cidade',
  label: 'Código IBGE da cidade',
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

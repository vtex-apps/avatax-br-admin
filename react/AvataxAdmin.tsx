import React, { FC, useState, useEffect } from 'react'
import {
  Layout,
  PageBlock,
  Tabs,
  Tab,
  Table,
  Input,
  Modal,
  InputPassword,
  Button,
  Dropdown,
  Alert,
  Divider,
} from 'vtex.styleguide'
// import axios, { AxiosResponse } from 'axios'

const AvataxAdmin: FC = () => {
  const [modal, setModal] = useState(false)

  const [showAlert, setShowAlert] = useState(false)

  const [tab, setTab] = useState({
    currentTab: 1,
  })

  const [documents] = useState({
    tableDocuments: [],
  })

  const [auths, setAuths] = useState({
    appKey: '',
    appToken: '',
    clientId: '',
    clientSecret: '',
    clientCompanyLocation: '',
    id: '',
  })

  const [establishment, setEstablishment] = useState({
    activitySector: '',
    icmsTaxPayer: '',
    taxRegime: '',
    entityType: '',
    stateTaxId: '',
    street: '',
    neighborhood: '',
    zipCode: '',
    cityCode: '',
    city: '',
    state: '',
    country: '',
    streetNumber: '',
    complement: '',
    phone: '',
    cnpj: '',
    suframa: '',
    messageType: '',
    dockId: '',
    dockName: '',
  })

  const [authsEdit, setAuthsEdit] = useState({
    appKey: '',
    appToken: '',
    clientId: '',
    clientSecret: '',
    clientCompanyLocation: '',
    id: '',
  })

  const [establishmentEdit, setEstablishmentEdit] = useState({
    activitySector: '',
    icmsTaxPayer: '',
    taxRegime: '',
    entityType: '',
    stateTaxId: '',
    street: '',
    neighborhood: '',
    zipCode: '',
    cityCode: '',
    city: '',
    state: '',
    country: '',
    streetNumber: '',
    complement: '',
    phone: '',
    cnpj: '',
    suframa: '',
    messageType: '',
    dockId: '',
    dockName: '',
  })

  const handleChangeInputs = (evt: {
    target: { name: string; value?: string }
  }) => {
    const { value } = evt.target

    setAuths({
      ...auths,
      [evt.target.name]: value,
    })

    setEstablishment({
      ...establishment,
      [evt.target.name]: value,
    })
  }

  const handleChangeInputsEdit = (evt: {
    target: { name: string; value?: string }
  }) => {
    const { value } = evt.target

    setAuthsEdit({
      ...authsEdit,
      [evt.target.name]: value,
    })

    setEstablishmentEdit({
      ...establishmentEdit,
      [evt.target.name]: value,
    })
  }

  const defaultSchema = {
    properties: {
      id: {
        title: 'ID',
      },
      dockName: {
        title: 'Estoque',
      },
    },
  }

  const lineActions = [
    {
      label: () => `Editar`,
      // onClick: ({ rowData }) => handleDockData(rowData.id, false),
    },
    {
      label: () => `Deletar`,
      isDangerous: true,
      // onClick: ({ rowData }) => handleDockData(rowData.id, true),
    },
  ]

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  const getDocumentsData = () => {
    /* axios
      .get(
        `/api/dataentities/AE/search?_fields=id,clientId,clientSecret,clientCompanyLocation,dockId,dockName,activitySector,icmsTaxPayer,taxRegime,entityType,stateTaxId,messageType,street,neighborhood,zipCode,cityCode,city,state,country,streetNumber,complement,phone,cnpj,suframa`,
        {
          headers: {
            Accept: 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        if (response.data.length) {
          setDocuments({ tableDocuments: response.data })
        }
      })
      .catch((error) => {
        console.error(error)
      }) */
  }

  useEffect(() => {
    getDocumentsData()
  }, [])

  return (
    <>
      <Layout>
        <PageBlock
          title="Avatax"
          subtitle="Configuração Avalara"
          variation="full"
        >
          <Tabs>
            <Tab
              label="Adicionar estoque"
              active={tab.currentTab === 1}
              onClick={() => setTab({ currentTab: 1 })}
            >
              <div className="mt8 mb5">
                <Input
                  name="appKey"
                  placeholder="Inserir AppKey"
                  label="VTEX AppKey"
                  value={auths.appKey}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="appToken"
                  placeholder="Inserir AppToken"
                  label="VTEX AppToken"
                  value={auths.appToken}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mv6">
                <Divider orientation="horizontal" />
              </div>
              <div className="mb5">
                <InputPassword
                  name="clientId"
                  placeholder="Inserir Client ID"
                  label="Client ID"
                  value={auths.clientId}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <InputPassword
                  name="clientSecret"
                  placeholder="Inserir Client Secret"
                  label="Client Secret"
                  value={auths.clientSecret}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="clientCompanyLocation"
                  placeholder="Inserir ID Avalara"
                  label="Avalara Company ID"
                  value={auths.clientCompanyLocation}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mv6">
                <Divider orientation="horizontal" />
              </div>
              <div className="mb5">
                <h3 className="t-heading-3">Informações</h3>
                <div className="mb5">
                  <Input
                    name="dockId"
                    placeholder="Inserir ID do estoque"
                    label="Estoque ID"
                    value={establishment.dockId}
                    onChange={handleChangeInputs}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="dockName"
                    placeholder="Inserir nome do estoque"
                    label="Nome do Estoque"
                    value={establishment.dockName}
                    onChange={handleChangeInputs}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Dropdown
                    name="messageType"
                    label="Produtos/Serviços"
                    size="large"
                    options={[
                      {
                        value: 'goods',
                        label: 'Produtos',
                      },
                      {
                        value: 'services',
                        label: 'Serviços',
                      },
                    ]}
                    value={establishment.messageType}
                    onChange={handleChangeInputs}
                  />
                </div>
                <Dropdown
                  name="activitySector"
                  label="Setor de atividade"
                  size="large"
                  options={[
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
                  ]}
                  value={establishment.activitySector}
                  onChange={handleChangeInputs}
                />
              </div>
              <div className="mb5">
                <Dropdown
                  name="icmsTaxPayer"
                  label="Contribuinte de ICMS"
                  size="large"
                  options={[
                    {
                      value: 'True',
                      label: 'Sim',
                    },
                    {
                      value: 'false',
                      label: 'Não',
                    },
                  ]}
                  value={establishment.icmsTaxPayer}
                  onChange={handleChangeInputs}
                />
              </div>
              <div className="mb5">
                <Dropdown
                  name="taxRegime"
                  label="Regime Tributário Federal"
                  size="large"
                  options={[
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
                      label:
                        'Optante do SIMPLES com limite de faturamento bruto',
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
                  ]}
                  value={establishment.taxRegime}
                  onChange={handleChangeInputs}
                />
              </div>
              <div className="mb5">
                <Dropdown
                  name="entityType"
                  label="Tipo de entidade"
                  size="large"
                  options={[
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
                  ]}
                  value={establishment.entityType}
                  onChange={handleChangeInputs}
                />
              </div>
              <div className="mb5">
                <Input
                  name="stateTaxId"
                  placeholder="Inserir Identificação fiscal estadual"
                  label="Inscrição Estadual"
                  value={establishment.stateTaxId}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mv6">
                <Divider orientation="horizontal" />
              </div>
              <div className="mb5">
                <h3 className="t-heading-3">Localidade</h3>
                <Input
                  name="street"
                  placeholder="Inserir rua"
                  label="Rua"
                  value={establishment.street}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="neighborhood"
                  placeholder="Inserir bairro"
                  label="Bairro"
                  value={establishment.neighborhood}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="zipCode"
                  placeholder="Inserir CEP"
                  label="CEP"
                  value={establishment.zipCode}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="cityCode"
                  placeholder="Inserir código cidade"
                  label="Código cidade"
                  value={establishment.cityCode}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="city"
                  placeholder="Inserir cidade"
                  label="Cidade"
                  value={establishment.city}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="state"
                  placeholder="Inserir estado"
                  label="Estado"
                  value={establishment.state}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Dropdown
                  name="country"
                  label="País"
                  size="large"
                  options={[
                    {
                      value: 'BRA',
                      label: 'Brasil',
                    },
                  ]}
                  value={establishment.country}
                  onChange={handleChangeInputs}
                />
              </div>
              <div className="mb5">
                <Input
                  name="streetNumber"
                  placeholder="Inserir número"
                  label="Número"
                  value={establishment.streetNumber}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="complement"
                  placeholder="Inserir complemento"
                  label="Complemento"
                  value={establishment.complement}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="phone"
                  placeholder="Inserir telefone"
                  label="Telefone"
                  value={establishment.phone}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="cnpj"
                  placeholder="Inserir CNPJ"
                  label="CNPJ"
                  value={establishment.cnpj}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <Input
                  name="suframa"
                  placeholder="Inserir código suframa (Se existir)"
                  label="Suframa"
                  value={establishment.suframa}
                  onChange={handleChangeInputs}
                  size="large"
                />
              </div>
              <div className="mb5">
                <span className="mr4">
                  <Button
                    variation="primary"
                    size="large"
                    // onClick={() => saveConfigurations(null, false)}
                  >
                    Adicionar
                  </Button>
                </span>
              </div>
              {showAlert === true ? (
                <Alert type="success" onClose={handleCloseAlert}>
                  Dados salvos!
                </Alert>
              ) : null}
            </Tab>
            <Tab
              label="Estoques atuais"
              active={tab.currentTab === 2}
              onClick={() => setTab({ currentTab: 2 })}
            >
              <div className="mb5">
                <Table
                  fullWidth
                  schema={defaultSchema}
                  items={documents.tableDocuments}
                  lineActions={lineActions}
                />
              </div>
            </Tab>
          </Tabs>

          <Modal
            isOpen={modal}
            title="Editar Estoque"
            responsiveFullScreen
            bottomBar={
              <div className="nowrap">
                <span className="mr4">
                  <Button variation="tertiary" onClick={() => setModal(false)}>
                    Cancelar
                  </Button>
                </span>
                <span>
                  <Button
                    variation="primary"
                    // onClick={() => saveConfigurations(authsEdit.id, true)}
                  >
                    Salvar
                  </Button>
                </span>
              </div>
            }
            onClose={() => setModal(false)}
          >
            <div className="flex flex-column flex-row-ns">
              <div className="w-100">
                <div className="mt8 mb5">
                  <Input
                    name="appKey"
                    placeholder="Inserir AppKey"
                    label="VTEX AppKey"
                    value={authsEdit.appKey}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="appToken"
                    placeholder="Inserir AppToken"
                    label="VTEX AppToken"
                    value={authsEdit.appToken}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mv6">
                  <Divider orientation="horizontal" />
                </div>
                <div className="mb5">
                  <InputPassword
                    name="clientId"
                    placeholder="Inserir Client ID"
                    label="Client ID"
                    value={authsEdit.clientId}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <InputPassword
                    name="clientSecret"
                    placeholder="Inserir Client Secret"
                    label="Client Secret"
                    value={authsEdit.clientSecret}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="clientCompanyLocation"
                    placeholder="Inserir ID Avalara"
                    label="Avalara Company ID"
                    value={authsEdit.clientCompanyLocation}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mv6">
                  <Divider orientation="horizontal" />
                </div>
                <div className="mb5">
                  <h3 className="t-heading-3">Informações</h3>
                  <div className="mb5">
                    <Input
                      name="dockId"
                      placeholder="Inserir ID do estoque"
                      label="Estoque ID"
                      value={establishmentEdit.dockId}
                      onChange={handleChangeInputsEdit}
                      size="large"
                    />
                  </div>
                  <div className="mb5">
                    <Input
                      name="dockName"
                      placeholder="Inserir nome do estoque"
                      label="Nome do Estoque"
                      value={establishmentEdit.dockName}
                      onChange={handleChangeInputsEdit}
                      size="large"
                    />
                  </div>
                  <div className="mb5">
                    <Dropdown
                      name="messageType"
                      label="Produtos/Serviços"
                      size="large"
                      options={[
                        {
                          value: 'goods',
                          label: 'Produtos',
                        },
                        {
                          value: 'services',
                          label: 'Serviços',
                        },
                      ]}
                      value={establishmentEdit.messageType}
                      onChange={handleChangeInputsEdit}
                    />
                  </div>
                  <Dropdown
                    name="activitySector"
                    label="Setor de atividade"
                    size="large"
                    options={[
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
                    ]}
                    value={establishmentEdit.activitySector}
                    onChange={handleChangeInputsEdit}
                  />
                </div>
                <div className="mb5">
                  <Dropdown
                    name="icmsTaxPayer"
                    label="Contribuinte de ICMS"
                    size="large"
                    options={[
                      {
                        value: 'True',
                        label: 'Sim',
                      },
                      {
                        value: 'false',
                        label: 'Não',
                      },
                    ]}
                    value={establishmentEdit.icmsTaxPayer}
                    onChange={handleChangeInputsEdit}
                  />
                </div>
                <div className="mb5">
                  <Dropdown
                    name="taxRegime"
                    label="Regime Tributário Federal"
                    size="large"
                    options={[
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
                        label:
                          'Optante do SIMPLES com limite de faturamento bruto',
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
                    ]}
                    value={establishmentEdit.taxRegime}
                    onChange={handleChangeInputsEdit}
                  />
                </div>
                <div className="mb5">
                  <Dropdown
                    name="entityType"
                    label="Tipo de entidade"
                    size="large"
                    options={[
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
                    ]}
                    value={establishmentEdit.entityType}
                    onChange={handleChangeInputsEdit}
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="stateTaxId"
                    placeholder="Inserir Identificação fiscal estadual"
                    label="Inscrição Estadual"
                    value={establishmentEdit.stateTaxId}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mv6">
                  <Divider orientation="horizontal" />
                </div>
                <div className="mb5">
                  <h3 className="t-heading-3">Localidade</h3>
                  <Input
                    name="street"
                    placeholder="Inserir rua"
                    label="Rua"
                    value={establishmentEdit.street}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="neighborhood"
                    placeholder="Inserir bairro"
                    label="Bairro"
                    value={establishmentEdit.neighborhood}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="zipCode"
                    placeholder="Inserir CEP"
                    label="CEP"
                    value={establishmentEdit.zipCode}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="cityCode"
                    placeholder="Inserir código cidade"
                    label="Código cidade"
                    value={establishmentEdit.cityCode}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="city"
                    placeholder="Inserir cidade"
                    label="Cidade"
                    value={establishmentEdit.city}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="state"
                    placeholder="Inserir estado"
                    label="Estado"
                    value={establishmentEdit.state}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Dropdown
                    name="country"
                    label="País"
                    size="large"
                    options={[
                      {
                        value: 'BRA',
                        label: 'Brasil',
                      },
                    ]}
                    value={establishmentEdit.country}
                    onChange={handleChangeInputsEdit}
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="streetNumber"
                    placeholder="Inserir número"
                    label="Número"
                    value={establishmentEdit.streetNumber}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="complement"
                    placeholder="Inserir complemento"
                    label="Complemento"
                    value={establishmentEdit.complement}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="phone"
                    placeholder="Inserir telefone"
                    label="Telefone"
                    value={establishmentEdit.phone}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="cnpj"
                    placeholder="Inserir CNPJ"
                    label="CNPJ"
                    value={establishmentEdit.cnpj}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <Input
                    name="suframa"
                    placeholder="Inserir código suframa (Se existir)"
                    label="Suframa"
                    value={establishmentEdit.suframa}
                    onChange={handleChangeInputsEdit}
                    size="large"
                  />
                </div>
                <div className="mb5">
                  <span className="mr4">
                    <Button
                      variation="primary"
                      size="large"
                      // onClick={saveConfigurations}
                    >
                      Salvar
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </Modal>
        </PageBlock>
      </Layout>
    </>
  )
}

export default AvataxAdmin

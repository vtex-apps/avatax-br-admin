import React, { FC, useState, useEffect } from 'react'
import {
  Layout,
  PageBlock,
  Tabs,
  Tab,
  Table,
  Modal,
  Button,
  Alert,
} from 'vtex.styleguide'

import { EstablishmentButtonAdd } from './components/Button/EstablishmentButtonAdd'
import { DividerArea } from './components/Divider/divider'
import EstablishmentDropdown from './components/Dropdown/EstablishmentDropdown'
import EstablishmentProvider from './components/Provider/EstablishmentProvider'
import AuthInputPassword from './components/InputPassword/AuthInputPassword'
import EstablishmentInput from './components/Inputs/EstablishmentInput'
import {
  activitySector,
  city,
  cityCode,
  clientCompanyLocation,
  clientId,
  clientSecret,
  cnpj,
  complement,
  country,
  dockId,
  dockName,
  entityType,
  icmsTaxPayer,
  messageType,
  neighborhood,
  phone,
  state,
  stateTaxId,
  street,
  streetNumber,
  suframa,
  taxRegime,
  zipCode,
} from './components/Values/values'
import AuthProvider from './components/Provider/AuthProvider'
import AuthInput from './components/Inputs/AuthInput'
import { EstablishmentButtonSave } from './components/Button/EstablishmentButtonSave'

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
              <AuthProvider>
                <DividerArea />

                <AuthInputPassword {...clientId} />
                <AuthInputPassword {...clientSecret} />
                <AuthInput {...clientCompanyLocation} />
              </AuthProvider>

              <EstablishmentProvider>
                <DividerArea />

                <h3 className="t-heading-3">Informações</h3>

                <EstablishmentInput {...dockId} />
                <EstablishmentInput {...dockName} />

                <EstablishmentDropdown {...messageType} />
                <EstablishmentDropdown {...activitySector} />
                <EstablishmentDropdown {...icmsTaxPayer} />
                <EstablishmentDropdown {...taxRegime} />
                <EstablishmentDropdown {...entityType} />

                <EstablishmentInput {...stateTaxId} />

                <DividerArea />

                <h3 className="t-heading-3">Localidade</h3>

                <EstablishmentInput {...street} />
                <EstablishmentInput {...neighborhood} />
                <EstablishmentInput {...zipCode} />
                <EstablishmentInput {...cityCode} />
                <EstablishmentInput {...city} />
                <EstablishmentInput {...state} />

                <EstablishmentDropdown {...country} />
                <EstablishmentInput {...streetNumber} />
                <EstablishmentInput {...complement} />
                <EstablishmentInput {...phone} />
                <EstablishmentInput {...cnpj} />
                <EstablishmentInput {...suframa} />

                <EstablishmentButtonAdd />
                {showAlert === true ? (
                  <Alert type="success" onClose={handleCloseAlert}>
                    Dados salvos!
                  </Alert>
                ) : null}
              </EstablishmentProvider>
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
                <AuthProvider>
                  <AuthInputPassword {...clientId} />
                  <AuthInputPassword {...clientSecret} />
                  <AuthInput {...clientCompanyLocation} />
                </AuthProvider>

                <EstablishmentProvider>
                  <DividerArea />
                  <h3 className="t-heading-3">Informações</h3>

                  <EstablishmentInput {...dockId} />
                  <EstablishmentInput {...dockName} />
                  <EstablishmentDropdown {...messageType} />
                  <EstablishmentDropdown {...activitySector} />
                  <EstablishmentDropdown {...icmsTaxPayer} />
                  <EstablishmentDropdown {...taxRegime} />

                  <EstablishmentDropdown {...entityType} />

                  <EstablishmentInput {...stateTaxId} />

                  <DividerArea />

                  <h3 className="t-heading-3">Localidade</h3>

                  <EstablishmentInput {...street} />

                  <EstablishmentInput {...neighborhood} />
                  <EstablishmentInput {...zipCode} />
                  <EstablishmentInput {...cityCode} />
                  <EstablishmentInput {...city} />
                  <EstablishmentInput {...state} />
                  <EstablishmentDropdown {...country} />
                  <EstablishmentInput {...streetNumber} />
                  <EstablishmentInput {...complement} />
                  <EstablishmentInput {...phone} />
                  <EstablishmentInput {...cnpj} />
                  <EstablishmentInput {...suframa} />

                  <EstablishmentButtonSave />
                </EstablishmentProvider>
              </div>
            </div>
          </Modal>
        </PageBlock>
      </Layout>
    </>
  )
}

export default AvataxAdmin

import React, { FC, useState, useEffect } from 'react'
import { Layout, PageBlock, Tabs, Tab } from 'vtex.styleguide'

import AddStock from './components/Stock/AddStock'
import CurrentStock from './components/Stock/CurrentStock'
import EditArea from './components/EditArea/editArea'
import ModalArea from './components/Modal/modal'

// import axios, { AxiosResponse } from 'axios'

const AvataxAdmin: FC = () => {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

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
              <AddStock />
            </Tab>
            <Tab
              label="Estoques atuais"
              active={tab.currentTab === 2}
              onClick={() => setTab({ currentTab: 2 })}
            >
              <CurrentStock />
            </Tab>
          </Tabs>

          <ModalArea>
            <EditArea />
          </ModalArea>
        </PageBlock>
      </Layout>
    </>
  )
}

export default AvataxAdmin

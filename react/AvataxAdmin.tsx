import React, { FC, useState } from 'react'
import { Layout, PageBlock, Tabs, Tab } from 'vtex.styleguide'

import AddStock from './components/Stock/AddStock'
import CurrentStock from './components/Stock/CurrentStock'
import EditArea from './components/EditArea/editArea'
import ModalArea from './components/Modal/modal'
import EstablishmentProvider from './components/Provider/EstablishmentProvider'
import AuthProvider from './components/Provider/AuthProvider'

// import axios, { AxiosResponse } from 'axios'

const AvataxAdmin: FC = () => {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

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
              <AuthProvider>
                <EstablishmentProvider>
                  <CurrentStock />
                  <ModalArea>
                    <EditArea />
                  </ModalArea>
                </EstablishmentProvider>
              </AuthProvider>
            </Tab>
          </Tabs>
        </PageBlock>
      </Layout>
    </>
  )
}

export default AvataxAdmin

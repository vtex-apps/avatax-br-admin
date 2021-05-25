import React, { FC, useState } from 'react'
import { Layout, PageBlock, Tabs, Tab } from 'vtex.styleguide'

import AddStock from './components/Common/AddStock'
import CurrentStock from './components/Common/CurrentStock'
import EditArea from './components/Common/editArea'
import ModalArea from './components/Common/modal'
import EstablishmentProvider from './components/Establishment/EstablishmentProvider'
import ToggleArea from './components/Common/toggle'

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
              <p>campos obrigatórios* </p>
              <AddStock />
            </Tab>

            <Tab
              label="Estoques atuais"
              active={tab.currentTab === 2}
              onClick={() => setTab({ currentTab: 2 })}
            >
              <EstablishmentProvider>
                <CurrentStock />
                <ModalArea>
                  <EditArea />
                </ModalArea>
              </EstablishmentProvider>
            </Tab>
            <Tab
              label="Ativar/Desativar taxação"
              active={tab.currentTab === 3}
              onClick={() => setTab({ currentTab: 3 })}
            >
              <ToggleArea />
            </Tab>
          </Tabs>
        </PageBlock>
      </Layout>
    </>
  )
}

export default AvataxAdmin

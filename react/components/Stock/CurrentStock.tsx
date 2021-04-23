import React, { FC, useContext } from 'react'
import { useQuery } from 'react-apollo'
import { Table } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'
import getEstablishmentQuery from '../../queries/getEstablishment.gql'

const CurrentStock: FC = () => {
  const context = useContext(EstablishmentContext)
  const { loading, data: getEstablishment } = useQuery<GetEstablishment>(
    getEstablishmentQuery
  )

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

  const update = (establishment: Establishment) => {
    context.updateEstablishment(establishment)
    context.setEdit(true)
  }

  const lineActions = [
    {
      label: () => `Editar`,
      onClick: (data: { rowData: Establishment }) => update(data.rowData),
    },
    {
      label: () => `Deletar`,
      isDangerous: true,
      // onClick: ({ rowData }) => handleDockData(rowData.id, true),
    },
  ]

  if (loading) return <div>Carregando...</div>

  return (
    <>
      <div className="mb5">
        <Table
          fullWidth
          schema={defaultSchema}
          items={getEstablishment?.establishments}
          lineActions={lineActions}
        />
      </div>
    </>
  )
}

export default CurrentStock

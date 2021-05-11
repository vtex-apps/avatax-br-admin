import React, { FC, useContext } from 'react'
import { Table } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

const CurrentStock: FC = () => {
  const context = useContext(EstablishmentContext)

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
      onClick: (data: { rowData: Establishment }) =>
        context.update(data.rowData),
    },
    {
      label: () => `Deletar`,
      isDangerous: true,
      onClick: (data: { rowData: Establishment }) =>
        context.deleteEstablishments(data.rowData.id),
    },
  ]

  if (context.loading) return <div>Carregando...</div>

  return (
    <>
      <div className="mb5">
        <Table
          fullWidth
          schema={defaultSchema}
          items={context.establishmentList}
          lineActions={lineActions}
        />
      </div>
    </>
  )
}

export default CurrentStock

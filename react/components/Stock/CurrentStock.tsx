import React, { FC, useState } from 'react'
import { Table } from 'vtex.styleguide'

const CurrentStock: FC = () => {
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

  return (
    <>
      <div className="mb5">
        <Table
          fullWidth
          schema={defaultSchema}
          items={documents.tableDocuments}
          lineActions={lineActions}
        />
      </div>
    </>
  )
}

export default CurrentStock

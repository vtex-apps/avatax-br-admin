import React from 'react'

import { LogViewButton } from './LogViewButton'

export const LogTableSchema = {
  properties: {
    view: {
      title: 'Detalhes',
      minWidth: 75,
      cellRenderer: ({ cellData }: { cellData: CalculationLog }) => {
        const logView = <LogViewButton {...cellData} />

        return logView
      },
    },
    createdIn: {
      title: 'Data/Hora ↓',
      minWidth: 160,
    },
    email: {
      title: 'Cliente',
      minWidth: 250,
    },
    establishment_dockName: {
      title: 'Doca',
      minWidth: 120,
    },
    city: {
      title: 'Cidade',
      minWidth: 180,
    },
    state: {
      title: 'Estado',
      minWidth: 75,
    },
    activitySector: {
      title: 'Setor de Atividade',
      minWidth: 200,
    },
    numberOfProducts: {
      title: 'Produtos',
      minWidth: 70,
    },
    productsTotal: {
      title: 'Valor Prod.',
      minWidth: 100,
    },
    freightTotal: {
      title: 'Valor Frete',
      minWidth: 100,
    },
    includedTaxes: {
      title: 'Impostos Inclusos',
      minWidth: 170,
    },
    includedTaxesTotal: {
      title: 'Total Inclusos',
      minWidth: 140,
    },
    addedTaxes: {
      title: 'Impostos Destacados',
      minWidth: 170,
    },
    addedTaxesTotal: {
      title: 'Total Destacados',
      minWidth: 140,
    },
  },
}

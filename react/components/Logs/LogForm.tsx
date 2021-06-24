import React, { useContext, useEffect } from 'react'
import { Table } from 'vtex.styleguide'

import LogContext from '../../context/LogContext'
import { logTableSchema } from './logTableSchema'
import parseLogs from './logTableParser'
import usePagination from '../../hooks/setPagination'

export const LogForm = () => {
  const context = useContext(LogContext)
  const paginationContext = usePagination(context)
  const parsedLogs = context.logs ? context.logs.map(parseLogs) : []

  useEffect(() => {
    if (!context.loading) {
      paginationContext.setTotal(context.pagination?.total ?? 0)
    }
  }, [context.loading, context.pagination?.total, paginationContext])

  return (
    <div className="mv6">
      <div>
        Aqui você encontra todos os resultados dos cálculos de impostos
        efetuados.
      </div>
      <div>Clique nas linhas para obter mais informações.</div>
      <Table
        fullWidth
        schema={logTableSchema}
        items={parsedLogs}
        toolbar={{
          fields: {
            label: 'Alterar colunas visíveis',
            showAllLabel: 'Exibir tudo',
            hideAllLabel: 'Ocultar tudo',
          },
          download: {
            label: 'Exportar Logs',
            handleCallback: () => {},
          },
        }}
        pagination={{
          onNextClick: paginationContext.pagination.onNextClick,
          onPrevClick: paginationContext.pagination.onPrevClick,
          onRowsChange: paginationContext.pagination.onRowsChange,
          currentItemFrom: paginationContext.pagination.currentItemFrom,
          currentItemTo: paginationContext.pagination.currentItemTo,
          textShowRows: 'Mostrar linhas',
          textOf: 'de',
          totalItems: paginationContext.total,
          rowsOptions: [5, 10, 15, 25],
        }}
      />
    </div>
  )
}

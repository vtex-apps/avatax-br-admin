import React from 'react'

interface LogContextType {
  loading: boolean
  logs?: CalculationLog[]
  pagination?: Pagination
  setPage: (
    page: number,
    pageSize: number
  ) => Promise<CalculationLogData> | void
}
const LogContext = React.createContext<LogContextType>({
  loading: true,
  setPage: () => {},
})

export default LogContext

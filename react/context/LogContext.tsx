import React from 'react'

interface LogContextType {
  loading: boolean
  reloading: boolean
  logs?: CalculationLog[]
  pagination?: Pagination
  setPage: (
    page: number,
    pageSize: number
  ) => Promise<CalculationLogData> | void
  refetch: () => void
}
const LogContext = React.createContext<LogContextType>({
  loading: true,
  reloading: false,
  setPage: () => {},
  refetch: () => {},
})

export default LogContext

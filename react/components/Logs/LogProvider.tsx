import React, { FC } from 'react'
import { useQuery } from 'react-apollo'

import LogContext from '../../context/LogContext'
import getLogsQuery from '../../queries/getLogs.gql'

const LogProvider: FC<{ page: number; pageSize: number }> = (props: {
  children?: React.ReactNode
  page: number
  pageSize: number
}) => {
  const { data, loading, refetch } = useQuery<
    CalculationLogQueryResult,
    { params: { page: number; pageSize: number } }
  >(getLogsQuery, {
    variables: {
      params: {
        page: props.page,
        pageSize: props.pageSize,
      },
    },
  })

  const setPage = async (page: number, pageSize: number) => {
    return (await refetch({ params: { page, pageSize } })).data.getLogs
  }

  return (
    <LogContext.Provider
      value={{
        loading,
        logs: data?.getLogs.data,
        pagination: data?.getLogs.pagination,
        setPage,
      }}
    >
      {props.children}
    </LogContext.Provider>
  )
}

export default LogProvider

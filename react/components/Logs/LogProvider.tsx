import React, { FC, useState } from 'react'
import { useQuery } from 'react-apollo'

import LogContext from '../../context/LogContext'
import getLogsQuery from '../../queries/getLogs.gql'

const LogProvider: FC<{ page: number; pageSize: number }> = (props: {
  children?: React.ReactNode
  page: number
  pageSize: number
}) => {
  const [reloading, setReloading] = useState(false)

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

  const refetchFn = async () => {
    if (!data?.getLogs.pagination) return
    setReloading(true)
    await refetch({
      params: {
        page: data?.getLogs.pagination.page,
        pageSize: data?.getLogs.pagination.pageSize,
      },
    })
    setReloading(false)
  }

  return (
    <LogContext.Provider
      value={{
        loading,
        reloading,
        logs: data?.getLogs.data,
        pagination: data?.getLogs.pagination,
        setPage,
        refetch: refetchFn,
      }}
    >
      {props.children}
    </LogContext.Provider>
  )
}

export default LogProvider

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
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { data, loading, refetch } = useQuery<
    CalculationLogQueryResult,
    { params: { page: number; pageSize: number; searchTerm?: string } }
  >(getLogsQuery, {
    variables: {
      params: {
        page: props.page,
        pageSize: props.pageSize,
      },
    },
  })

  const setPage = async (page: number, pageSize: number) => {
    return (await refetch({ params: { page, pageSize, searchTerm } })).data
      .getLogs
  }

  const refetchFn = async (term?: string) => {
    if (!data?.getLogs.pagination) return
    setReloading(true)
    if (term) setSearchTerm(term)
    await refetch({
      params: {
        page: data?.getLogs.pagination.page,
        pageSize: data?.getLogs.pagination.pageSize,
        searchTerm: term ?? searchTerm,
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
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </LogContext.Provider>
  )
}

export default LogProvider

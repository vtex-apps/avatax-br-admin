import React, { FC, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { Toggle } from 'vtex.styleguide'

import { DividerArea } from './divider'
import setTaxConfigurationMutation from '../../queries/setTaxConfiguration.gql'
import getTaxConfiguration from '../../queries/getTaxConfiguration.gql'

const ToggleArea: FC = () => {
  const [initialState, setState] = useState(Boolean)

  const { data, refetch, loading } = useQuery<GetTaxConfiguration>(
    getTaxConfiguration
  )

  const [taxConfiguration] = useMutation<SetTaxConfiguration>(
    setTaxConfigurationMutation
  )

  useEffect(() => {
    if (!data?.getTaxConfiguration) {
      setState(false)
    } else {
      const contains = data.getTaxConfiguration.url.includes(
        window.location.origin
      )

      setState(contains)
    }
  }, [data])

  if (loading) return <div className="dib">Carregando...</div>

  const activateDeactivate = async () => {
    let operations = 'activate'

    if (initialState) operations = 'deactivate'
    await taxConfiguration({ variables: { operation: operations } })
    await refetch()
  }

  return (
    <>
      <DividerArea />
      Utilizar a taxação da Avalara
      <br />
      <br />
      <div className="dib">
        <Toggle
          label={initialState ? 'Ativado' : 'Desativado'}
          semantic
          checked={initialState}
          onChange={activateDeactivate}
        />
      </div>
    </>
  )
}

export default ToggleArea

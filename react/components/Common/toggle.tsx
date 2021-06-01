import React, { FC, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { Toggle } from 'vtex.styleguide'

import { DividerArea } from './divider'
import setTaxConfigurationMutation from '../../queries/setTaxConfiguration.gql'
import getTaxConfiguration from '../../queries/getTaxConfiguration.gql'

const ToggleArea: FC = () => {
  const [initialState, setState] = useState(Boolean)

  const { data, loading } = useQuery<GetTaxConfiguration>(getTaxConfiguration)

  const [taxConfiguration] = useMutation<SetTaxConfiguration>(
    setTaxConfigurationMutation
  )

  useEffect(() => {
    setState(
      (data?.getTaxConfiguration?.url ?? '')
        .replace('master--', '')
        .includes(window.location.origin) ?? false
    )
  }, [data])

  if (loading) return <div className="dib">Carregando...</div>

  const activateDeactivate = async () => {
    const operations = initialState ? 'deactivate' : 'activate'

    await taxConfiguration({ variables: { operation: operations } })

    setState(!initialState)
  }

  return (
    <>
      <DividerArea />
      Status do conector da Avalara:
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

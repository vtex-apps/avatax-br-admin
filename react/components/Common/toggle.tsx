import React, { FC, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { Toggle } from 'vtex.styleguide'

import { DividerArea } from './divider'
import setTaxConfigurationMutation from '../../queries/setTaxConfiguration.gql'
import getTaxConfiguration from '../../queries/getTaxConfiguration.gql'

const ToggleArea: FC = () => {
  const [initialState, setState] = useState(Boolean)
  const [initial, setStateInital] = useState(true)

  const { data, refetch, loading } = useQuery<GetTaxConfiguration>(
    getTaxConfiguration
  )

  const [taxConfiguration] = useMutation<SetTaxConfiguration>(
    setTaxConfigurationMutation
  )

  if (loading) return <div className="dib">Carregando...</div>
  get()

  async function get() {
    if (initial) setStateInital(false)
    else await refetch()
    if (!data?.getTaxConfiguration) {
      setState(false)

      return false
    }

    const contains = data.getTaxConfiguration.url.includes(
      window.location.origin
    )

    setState(contains)

    return contains
  }

  const activateDeactivate = async () => {
    let operations = 'activate'

    if (initialState) operations = 'deactivate'
    await taxConfiguration({ variables: { operation: operations } })

    get()
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

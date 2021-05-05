import React, { FC, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { Toggle } from 'vtex.styleguide'

import { DividerArea } from '../Divider/divider'
import setTaxConfigurationMutation from '../../queries/setTaxConfiguration.gql'
import getTaxConfiguration from '../../queries/getTaxConfiguration.gql'

const ToggleArea: FC = () => {
  const [initialState, setState] = useState(Boolean)

  const { data, refetch } = useQuery<GetTaxConfiguration>(getTaxConfiguration)

  const [taxConfiguration] = useMutation<SetTaxConfiguration>(
    setTaxConfigurationMutation
  )

  get()

  async function get() {
    await refetch()
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

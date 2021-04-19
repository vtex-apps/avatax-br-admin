import React, { useContext } from 'react'
import { Dropdown } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

interface Props {
  name: string
  label: string
  options: Array<{ value: string; label: string }>
}

function EstablishmentDropdown({ name, label, options }: Props) {
  const provider = useContext(EstablishmentContext)

  const updateValue = (event: { target: { value?: string } }) => {
    provider.updateEstablishment({ [name]: event.target.value ?? '' })
  }

  return (
    <div className="mb5">
      <Dropdown
        name={name}
        label={label}
        size="large"
        options={options}
        value={provider.establishment[name] ?? ''}
        onChange={updateValue}
      />
    </div>
  )
}

export default EstablishmentDropdown

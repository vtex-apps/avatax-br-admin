import React, { useContext } from 'react'
import { Input } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

interface Props {
  name: string
  placeholder: string
  label: string
}

function EstablishmentInput({ name, placeholder, label }: Props) {
  const provider = useContext(EstablishmentContext)

  const updateValue = (event: { target: { value?: string } }) => {
    provider.setEstablishment({ [name]: event.target.value ?? '' })
  }

  return (
    <div className="mb3">
      <Input
        name={name}
        placeholder={placeholder}
        label={label}
        size="large"
        value={provider.establishment[name] ?? ''}
        onChange={updateValue}
      />
    </div>
  )
}

export default EstablishmentInput

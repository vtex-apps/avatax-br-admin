import React, { useContext } from 'react'
import { Input } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

interface Props {
  name: string
  placeholder: string
  label: string
  className?: string
}

function EstablishmentInput({
  name,
  placeholder,
  label,
  className = 'mb5',
}: Props) {
  const provider = useContext(EstablishmentContext)

  const updateValue = (event: { target: { value?: string } }) => {
    provider.updateEstablishment({ [name]: event.target.value ?? '' })
  }

  return (
    <div className={className}>
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

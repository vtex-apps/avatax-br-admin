import React, { useContext, useState } from 'react'
import { Input } from 'vtex.styleguide'

import EstablishmentContext from '../../context/EstablishmentContext'

interface Props {
  name: string
  placeholder: string
  label: string
  type?: string
}

function EstablishmentInput({
  name,
  placeholder,
  label,
  type = 'string',
}: Props) {
  const provider = useContext(EstablishmentContext)
  const [text, setText] = useState('')

  const updateValue = (event: { target: { value?: string } }) => {
    provider.setEstablishment({ [name]: event.target.value ?? '' })
  }

  let required = label

  if (name !== 'suframa' && name !== 'stateTaxId') required = `${label}*`

  const validation = async (event: { target: { value?: string } }) => {
    const value = await provider.validationFuntion({
      [name]: event.target.value ?? '',
    })

    setText(value)
  }

  if (provider.validationValues[name]) {
    validation({ target: { value: provider.establishment[name] } })
  }

  return (
    <div className="mb3">
      <Input
        name={name}
        placeholder={placeholder}
        label={required}
        size="large"
        value={provider.establishment[name] ?? ''}
        onChange={updateValue}
        type={type}
        onBlur={validation}
      />
      <p className="mt2" style={{ color: 'red', fontSize: '12px' }}>
        {text}
      </p>
    </div>
  )
}

export default EstablishmentInput

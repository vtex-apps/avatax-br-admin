import React, { useContext } from 'react'
import { Input } from 'vtex.styleguide'

import AuthContext from '../../context/AuthContext'

interface Props {
  name: string
  placeholder: string
  label: string
  className?: string
}

function AuthInput({ name, placeholder, label, className = 'mb5' }: Props) {
  const provider = useContext(AuthContext)

  const updateValue = (event: { target: { value?: string } }) => {
    provider.updateAuth({ [name]: event.target.value ?? '' })
  }

  return (
    <div className={className}>
      <Input
        name={name}
        placeholder={placeholder}
        label={label}
        size="large"
        value={provider.auth[name] ?? ''}
        onChange={updateValue}
      />
    </div>
  )
}

export default AuthInput

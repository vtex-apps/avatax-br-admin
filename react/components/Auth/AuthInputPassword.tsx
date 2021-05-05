import React, { useContext } from 'react'
import { InputPassword } from 'vtex.styleguide'

import AuthContext from '../../context/AuthContext'

interface Props {
  name: string
  placeholder: string
  label: string
}

function AuthInputPassword({ name, placeholder, label }: Props) {
  const provider = useContext(AuthContext)

  const updateValue = (event: { target: { value?: string } }) => {
    provider.updateAuth({ [name]: event.target.value ?? '' })
  }

  return (
    <div className="mb5">
      <InputPassword
        name={name}
        placeholder={placeholder}
        label={label}
        value={provider.auth[name] ?? ''}
        onChange={updateValue}
        size="large"
      />
    </div>
  )
}

export default AuthInputPassword

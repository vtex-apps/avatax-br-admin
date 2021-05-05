import React, { FC, useState } from 'react'

import AuthContext from '../../context/AuthContext'

const AuthProvider: FC = (props) => {
  const [auth, setAuth] = useState<Auth>({})

  const updateAuth = (object: Auth) => {
    setAuth({
      ...auth,
      ...object,
    })
  }

  return (
    <AuthContext.Provider value={{ auth, updateAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

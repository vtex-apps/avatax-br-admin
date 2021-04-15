import React from 'react'

interface AuthContextType {
  auth: Auth
  updateAuth: (auth: Auth) => void
}
const AuthContext = React.createContext<AuthContextType>({
  auth: {},
  updateAuth: () => {},
})

export default AuthContext

import { ReactNode } from 'react'

import * as C from './styled'

interface FormRememberMeProps {
  children: ReactNode
}

const FormRememberMe: React.FC<FormRememberMeProps> = ({ children }) => {
  return (
    <C.RememberMe htmlFor="rememberMe">
      <input type="checkbox" name="" id="rememberMe" />
      {children}
    </C.RememberMe>
  )
}

export default FormRememberMe

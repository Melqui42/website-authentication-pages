import { ReactNode } from 'react'

import * as C from './styled'

interface FormRowProps {
  children: ReactNode
}

const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return <C.Row>{children}</C.Row>
}

export default FormRow

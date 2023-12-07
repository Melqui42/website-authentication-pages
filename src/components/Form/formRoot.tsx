import { ReactNode } from 'react'

import { FormikFormProps } from 'formik'

import * as C from './styled'

interface FormRootProps extends FormikFormProps {
  children: ReactNode
}

const FormRoot: React.FC<FormRootProps> = ({ children, ...rest }) => {
  return <C.Root {...rest}>{children}</C.Root>
}

export default FormRoot

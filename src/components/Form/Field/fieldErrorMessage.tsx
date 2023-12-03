'use client'

import { ErrorMessage, ErrorMessageProps } from 'formik'

import * as C from './styled'

type FieldErrorMessageProps = ErrorMessageProps

const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({ ...rest }) => {
  return (
    <C.Container>
      <ErrorMessage component={C.ErrorMessage} {...rest} />
    </C.Container>
  )
}

export default FieldErrorMessage

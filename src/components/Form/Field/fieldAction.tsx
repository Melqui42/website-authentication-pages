import { ButtonHTMLAttributes } from 'react'
import * as Io5 from 'react-icons/io5'

import * as C from './styled'

interface FieldActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  visible: boolean
}

const FieldAction: React.FC<FieldActionProps> = ({ visible, ...rest }) => {
  return (
    <C.Action {...rest}>
      {visible ? (
        <Io5.IoEye className="iconAction" />
      ) : (
        <Io5.IoEyeOff className="iconAction" />
      )}
    </C.Action>
  )
}

export default FieldAction

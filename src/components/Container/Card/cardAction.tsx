import { ReactNode } from 'react'

import * as C from './styled'

interface CardActionProps {
  children: ReactNode
  text: string
}

const CardAction: React.FC<CardActionProps> = ({ children, text }) => {
  return (
    <C.Action>
      <p>{text}</p>
      {children}
    </C.Action>
  )
}

export default CardAction

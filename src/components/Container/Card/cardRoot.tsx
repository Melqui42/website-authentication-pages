import { HTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const CardRoot: React.FC<CardRootProps> = ({ children, ...props }) => {
  return (
    <C.Root {...props}>
      <div className="center">{children}</div>
    </C.Root>
  )
}

export default CardRoot

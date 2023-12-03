import { ReactNode } from 'react'

import { AnimatePresence, useIsPresent } from 'framer-motion'

import * as C from './styled'

interface ContainerProps {
  children: ReactNode
  heightContainer: string | number | undefined
}

const Container: React.FC<ContainerProps> = ({ children, heightContainer }) => {
  const isPresent = useIsPresent()
  return (
    <C.Page>
      <AnimatePresence>
        <C.Container
          style={{
            position: isPresent ? 'static' : 'absolute',
            height: heightContainer,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 900, damping: 40 }}
          layout
        >
          {children}
        </C.Container>
      </AnimatePresence>
    </C.Page>
  )
}

export default Container

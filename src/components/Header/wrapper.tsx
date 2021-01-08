import { ReactNode } from 'react'

import Header from './index'

interface WrapperProps {
  children: ReactNode
}

const LayoutWrapper: React.FC<WrapperProps> = props => {
  const { children } = props
  return (
    <>
      <Header {...props} />
      {children}
    </>
  )
}

export default LayoutWrapper

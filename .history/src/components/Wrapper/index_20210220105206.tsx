import { ReactNode } from 'react'

import Header from '../Header/index'
g
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

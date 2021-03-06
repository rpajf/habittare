import Header from '../Header/index'

const LayoutWrapper: React.FC = props => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default LayoutWrapper

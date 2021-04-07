import Header from '@/components/Header'
import Footer from '@/components/Footer'

const LayoutWrapper: React.FC = props => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutWrapper

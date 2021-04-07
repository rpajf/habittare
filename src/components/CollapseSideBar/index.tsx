import * as S from './styles'
interface SideNavProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
}

const ShowSideNav: React.FC<SideNavProps> = ({ isOpen, setOpen, ...props }) => {
  return (
    <S.Container isOpen={isOpen} onClick={() => setOpen(!isOpen)} {...props}>
      <S.Filter>Exibir filtros</S.Filter>
    </S.Container>
  )
}
export default ShowSideNav

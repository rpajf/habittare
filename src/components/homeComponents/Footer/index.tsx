import { Container, FooterContent, ContentWrapper, HeaderText } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <HeaderText>Encontre seu imóvel dos sonhos em apenas 1 clique</HeaderText>
      <ContentWrapper>
        <FooterContent></FooterContent>
      </ContentWrapper>
    </Container>
  )
}
export default Footer

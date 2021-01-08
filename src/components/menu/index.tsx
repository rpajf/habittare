import {
  Container,
  SearchBar,
  MenuContainer,
  InfoDiv,
  PriceInfo,
  QuantityInfo,
  InfoText,
  InputField,
  AreaInfo,
  InfoWrapper,
  FilterButton,
  QuantityWrapper
} from './styles'

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuContainer>
        <SearchBar></SearchBar>
        <InfoDiv>
          <PriceInfo>
            <InfoWrapper>
              <InfoText>Preço Min</InfoText>
              <InputField placeholder="R$" />
            </InfoWrapper>
            <InfoWrapper>
              <InfoText>Preço Máx</InfoText>
              <InputField placeholder="R$" />
            </InfoWrapper>
            <InfoWrapper>
              <InfoText>Qtd. de dormitórios</InfoText>
              <QuantityWrapper>
                <QuantityInfo>
                  <InfoText>1</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>2</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>3</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>4</InfoText>
                </QuantityInfo>
              </QuantityWrapper>
            </InfoWrapper>
            <InfoWrapper>
              <InfoText>Qtd. de dormitórios</InfoText>
              <QuantityWrapper>
                <QuantityInfo>
                  <InfoText>1</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>2</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>3</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>4</InfoText>
                </QuantityInfo>
              </QuantityWrapper>
            </InfoWrapper>
          </PriceInfo>
          <AreaInfo>
            <InfoWrapper>
              <InfoText>Área min(m2)</InfoText>
              <InputField placeholder="" />
            </InfoWrapper>
            <InfoWrapper>
              <InfoText>Área max(m2)</InfoText>
              <InputField placeholder="" />
            </InfoWrapper>
            <InfoWrapper>
              <InfoText>Qtd. de suítes</InfoText>
              <QuantityWrapper>
                <QuantityInfo>
                  <InfoText>1</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>2</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>3</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>4</InfoText>
                </QuantityInfo>
              </QuantityWrapper>
            </InfoWrapper>
            <InfoWrapper>
              <InfoText>Qtd. de vagas</InfoText>
              <QuantityWrapper>
                <QuantityInfo>
                  <InfoText>1</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>2</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>3</InfoText>
                </QuantityInfo>
                <QuantityInfo>
                  <InfoText>4</InfoText>
                </QuantityInfo>
              </QuantityWrapper>
            </InfoWrapper>
          </AreaInfo>
        </InfoDiv>
        <FilterButton>Limpar Filtros</FilterButton>
      </MenuContainer>
    </Container>
  )
}

export default Menu

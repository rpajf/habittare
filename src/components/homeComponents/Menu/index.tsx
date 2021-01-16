import * as S from './styles'
import Select from '../../Select'

const Menu: React.FC = () => {
  return (
    <S.Container>
      <S.SearchBar>
        {/* <S.SwitchDiv> */}
        <S.SwitchLabel1>Comprar</S.SwitchLabel1>
        <S.SwitchLabel2>Alugar</S.SwitchLabel2>
        <S.SelectDiv>
          <Select />
        </S.SelectDiv>

        {/* </S.SwitchDiv> */}
        <S.MainInput placeholder="Onde você quer morar(bairro, endereço ou codigo)?" />
        <S.SearchLabel>Buscar</S.SearchLabel>
      </S.SearchBar>
      <S.ContentWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Preço min</S.MenuContentText>
          <S.ContentInput placeholder="R$" />
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Preço max</S.MenuContentText>
          <S.ContentInput placeholder="R$" />
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Qtd de dormitorios</S.MenuContentText>
          <S.QuantityWrapper>
            <S.QuantityInfo>1</S.QuantityInfo>
            <S.QuantityInfo>2</S.QuantityInfo>
            <S.QuantityInfo>3</S.QuantityInfo>

            <S.QuantityInfo>4</S.QuantityInfo>
          </S.QuantityWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Qtd de banheiros</S.MenuContentText>
          <S.QuantityWrapper>
            <S.QuantityInfo>1</S.QuantityInfo>
            <S.QuantityInfo>2</S.QuantityInfo>
            <S.QuantityInfo>3</S.QuantityInfo>

            <S.QuantityInfo>4</S.QuantityInfo>
          </S.QuantityWrapper>
        </S.InfoWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Preço min</S.MenuContentText>
          <S.ContentInput placeholder="R$" />
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Preço max</S.MenuContentText>
          <S.ContentInput placeholder="R$" />
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Qtd de dormitorios</S.MenuContentText>
          <S.QuantityWrapper>
            <S.QuantityInfo>1</S.QuantityInfo>
            <S.QuantityInfo>2</S.QuantityInfo>
            <S.QuantityInfo>3</S.QuantityInfo>

            <S.QuantityInfo>4</S.QuantityInfo>
          </S.QuantityWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Qtd de banheiros</S.MenuContentText>
          <S.QuantityWrapper>
            <S.QuantityInfo>1</S.QuantityInfo>
            <S.QuantityInfo>2</S.QuantityInfo>
            <S.QuantityInfo>3</S.QuantityInfo>

            <S.QuantityInfo>4</S.QuantityInfo>
          </S.QuantityWrapper>
        </S.InfoWrapper>
      </S.ContentWrapper>
      <S.FilterLabel>Limpar Filtros</S.FilterLabel>
    </S.Container>
  )
}

export default Menu

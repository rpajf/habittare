import { useState } from 'react'
import * as S from './styles'
import Select from '../../Select'
import Radio from '../../Radio'

const Menu: React.FC = () => {
  const [isActive, setActive] = useState<boolean>(false)

  const handleClick = () => {
    setActive(!isActive)
  }

  function onClick(radioValue) {
    console.log(radioValue)
  }

  return (
    <S.Container>
      <S.SearchBar>
        <S.SwitchLabel1>Comprar</S.SwitchLabel1>
        <S.SwitchLabel2>Alugar</S.SwitchLabel2>
        <S.SelectDiv>
          <Select />
        </S.SelectDiv>

        {/* </S.SwitchDiv> */}
        <S.MainInput placeholder="Onde você quer morar(bairro, endereço ou codigo)?" />
        <S.SearchLabel>Buscar</S.SearchLabel>
      </S.SearchBar>
      <S.FilterLabel className="show-menu" onClick={handleClick}>
        ExibirFiltros
      </S.FilterLabel>

      <S.ContentWrapper className={isActive ? 'hidden-menu' : 'active'}>
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
            <Radio radioValue="1" onClick={onClick} checked={true} />
            <Radio radioValue="2" onClick={onClick} checked={true} />
            <Radio radioValue="3" onClick={onClick} checked={true} />
            <Radio radioValue="4" onClick={onClick} checked={true} />
          </S.QuantityWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InnerWrapper>
            <S.MenuContentText>Qtd de banheiros</S.MenuContentText>
            <S.QuantityWrapper>
              <Radio value="1" />
              <Radio />

              <Radio />
              <Radio />
            </S.QuantityWrapper>
          </S.InnerWrapper>
        </S.InfoWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper className={isActive ? 'hidden-menu' : 'active'}>
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
            <Radio />
            <Radio />

            <Radio />
            <Radio />
          </S.QuantityWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Qtd de banheiros</S.MenuContentText>
          <S.QuantityWrapper>
            <Radio />
            <Radio />

            <Radio />
            <Radio />
          </S.QuantityWrapper>
        </S.InfoWrapper>
      </S.ContentWrapper>
      <S.FilterLabel className="hidden-menu">Limpar Filtros</S.FilterLabel>
    </S.Container>
  )
}

export default Menu

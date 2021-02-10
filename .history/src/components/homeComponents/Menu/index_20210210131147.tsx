import { useState } from 'react'
import * as S from './styles'
import Select from '../../Select'
import Radio from '../../Radio'

const Menu: React.FC = () => {
  const [isToggled, setToggle] = useState<boolean>(false)
  const [isActive, setActive] = useState<boolean>(false)
  const handleSwitch = () => {
    setToggle(!isToggled)
  }

  const handleClick = () => {
    setActive(!isActive)
  }

  function onClick(radioValue) {
    console.log(radioValue)
  }

  const mockedRadioValuesArray = [
    { radioValue: '1', onClick: onClick, checked: true },
    { radioValue: '2', onClick: onClick, checked: false },
    { radioValue: '3', onClick: onClick, checked: false },
    { radioValue: '4', onClick: onClick, checked: false }
  ]

  return (
    <S.Container>
      <S.SearchBar>
        <S.SwitchLabel1 isToggled={isToggled} onClick={handleSwitch}>
          Comprar
        </S.SwitchLabel1>
        <S.SwitchLabel2 onClick={handleSwitch}>Alugar</S.SwitchLabel2>
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
            {mockedRadioValuesArray.map(item => {
              return (
                <Radio
                  key={item.radioValue}
                  radioValue={item.radioValue}
                  onClick={item.onClick}
                  checked={item.checked}
                />
              )
            })}
          </S.QuantityWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InnerWrapper>
            <S.MenuContentText>Qtd de banheiros</S.MenuContentText>
            <S.QuantityWrapper>
              {mockedRadioValuesArray.map(item => {
                return (
                  <Radio
                    key={item.radioValue}
                    radioValue={item.radioValue}
                    onClick={item.onClick}
                    checked={item.checked}
                  />
                )
              })}
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
            {mockedRadioValuesArray.map(item => {
              return (
                <Radio
                  key={item.radioValue}
                  radioValue={item.radioValue}
                  onClick={item.onClick}
                  checked={item.checked}
                />
              )
            })}
          </S.QuantityWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.MenuContentText>Qtd de banheiros</S.MenuContentText>
          <S.QuantityWrapper>
            {mockedRadioValuesArray.map(item => {
              return (
                <Radio
                  key={item.radioValue}
                  radioValue={item.radioValue}
                  onClick={item.onClick}
                  checked={item.checked}
                />
              )
            })}
          </S.QuantityWrapper>
        </S.InfoWrapper>
      </S.ContentWrapper>
      <S.FilterLabel className="hidden-menu">Limpar Filtros</S.FilterLabel>
    </S.Container>
  )
}

export default Menu

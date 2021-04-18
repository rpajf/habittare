import React, { useState } from 'react'

import * as S from './styles'
import { PropertyType } from '@/models/Property'

import Select from '@/components/Select'
import Radio from '@/components/Radio'
import CurrencyInput from '@/components/Input/index'

interface PropertyProps {
  property: PropertyType
}
const FindPropertyWithFilter: React.FC<PropertyProps> = ({ property }) => {
  const [isToggled, setToggle] = useState<boolean>(false)
  const [isActive, setActive] = useState<boolean>(false)
  const [newPrice, setNewPrice] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const [rooms, setRooms] = useState<number>(0)
  const [baths, setBaths] = useState<number>(0)

  const handleSwitch = () => {
    setToggle(!isToggled)
  }

  const handleClick = () => {
    setActive(!isActive)
  }
  // useEffect(() => {}, [])

  const mockedRadioValuesArray = [
    { radioValue: '1', onClick: onClick, checked: true },
    { radioValue: '2', onClick: onClick, checked: false },
    { radioValue: '3', onClick: onClick, checked: false },
    { radioValue: '4', onClick: onClick, checked: false }
  ]
  function onClick(radioValue) {
    console.log(radioValue)
  }
  const findOnPriceRange = (e: React.ChangeEvent) => {}

  function onRoomClick(value: string) {
    setRooms(Number(value))
  }

  function onBathClick(value: string) {
    setBaths(Number(value))
  }
  function onSubmit() {
    console.log(mockedRadioValuesArray.filter(obj => obj.radioValue))
  }

  return (
    <S.Container>
      <S.SearchBar>
        <S.SwitchLabel1 isToggled={isToggled} onClick={handleSwitch}>
          Comprar
        </S.SwitchLabel1>
        <S.SwitchLabel2 isToggled={isToggled} onClick={handleSwitch}>
          Alugar
        </S.SwitchLabel2>
        <S.SelectDiv className="w-full">
          <Select />
        </S.SelectDiv>

        {/* </S.SwitchDiv> */}
        <S.MainInput placeholder="Onde você quer morar(bairro, endereço ou codigo)?" />
        <S.SearchButton type="submit" onClick={onSubmit}>
          Buscar
        </S.SearchButton>
      </S.SearchBar>

      <S.FilterLabel className="show-menu" onClick={handleClick}>
        {isActive ? 'Fechar filtros' : 'Mais Filtros'}
      </S.FilterLabel>
      <S.FilterWrapper
        className={`${
          isActive ? 'active' : 'hidden-menu'
        } flex-col justify-center`}
      >
        <S.ContentWrapper className="flex-col md:flex-row">
          <S.InfoWrapper>
            <S.MenuContentText>Preço min</S.MenuContentText>
            <CurrencyInput
              mask="currency"
              prefix="R$"
              onChange={e => setNewPrice(e.target.value)}
            />
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.MenuContentText>Preço max</S.MenuContentText>
            <CurrencyInput
              mask="currency"
              prefix="R$"
              onChange={e => setNewPrice(e.target.value)}
            />
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.MenuContentText>Qtd de dormitorios</S.MenuContentText>
            <S.QuantityWrapper>
              {mockedRadioValuesArray.map(item => {
                return (
                  <Radio
                    key={item.radioValue}
                    radioValue={item.radioValue}
                    onClick={onRoomClick}
                    checked={rooms.toString() === item.radioValue}
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
                      onClick={onBathClick}
                      checked={baths.toString() === item.radioValue}
                    />
                  )
                })}
              </S.QuantityWrapper>
            </S.InnerWrapper>
          </S.InfoWrapper>
        </S.ContentWrapper>
        <div className="flex w-full mx-auto">
          <S.FilterLabel className="hidden-menu">Limpar Filtros</S.FilterLabel>
        </div>
      </S.FilterWrapper>
    </S.Container>
  )
}

export default FindPropertyWithFilter

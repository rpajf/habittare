import { useState } from 'react'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
interface SideNavProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
}
const SideBar: React.FC<SideNavProps> = ({ isOpen, setOpen }) => {
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
    <>
      <S.NavIcon isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <FontAwesomeIcon icon={faTimes} />
      </S.NavIcon>
      <S.SideNav isOpen={isOpen} className="w-full md:w-2/6">
        <S.NavWrapper>
          <S.NavInfo>Localização ou código</S.NavInfo>
          <S.NavInput placeholder="Bairro, endereço ou código" />
          <S.NavInfo>Tipo de Imóvel</S.NavInfo>
          <S.NavInput placeholder="Selecione um tipo de imovel" />
          <S.InnerContainer>
            <S.InnerNavWrapper>
              <S.NavInfo>Preço Min.</S.NavInfo>
              <S.QuantityInput placeholder="R$" />
            </S.InnerNavWrapper>
            <S.InnerNavWrapper>
              <S.NavInfo>Preço Max.</S.NavInfo>
              <S.QuantityInput placeholder="R$" />
            </S.InnerNavWrapper>
          </S.InnerContainer>
          <S.RadioContainer>
            <S.NavInfo>Quartos</S.NavInfo>
            <S.InnerContainer>
              {mockedRadioValuesArray.map(item => {
                return (
                  <S.ImoveisRadio
                    key={item.radioValue}
                    radioValue={item.radioValue}
                    onClick={item.onClick}
                    checked={item.checked}
                  />
                )
              })}
            </S.InnerContainer>
          </S.RadioContainer>
          <S.RadioContainer>
            <S.NavInfo>Quartos</S.NavInfo>
            <S.InnerContainer>
              {mockedRadioValuesArray.map(item => {
                return (
                  <S.ImoveisRadio
                    key={item.radioValue}
                    radioValue={item.radioValue}
                    onClick={item.onClick}
                    checked={item.checked}
                  />
                )
              })}
            </S.InnerContainer>
          </S.RadioContainer>
          <S.RadioContainer>
            <S.NavInfo>Suites</S.NavInfo>
            <S.InnerContainer>
              {mockedRadioValuesArray.map(item => {
                return (
                  <S.ImoveisRadio
                    key={item.radioValue}
                    radioValue={item.radioValue}
                    onClick={item.onClick}
                    checked={item.checked}
                  />
                )
              })}
            </S.InnerContainer>
          </S.RadioContainer>
          <S.RadioContainer>
            <S.NavInfo>Banheiros</S.NavInfo>
            <S.InnerContainer>
              {mockedRadioValuesArray.map(item => {
                return (
                  <S.ImoveisRadio
                    key={item.radioValue}
                    radioValue={item.radioValue}
                    onClick={item.onClick}
                    checked={item.checked}
                  />
                )
              })}
            </S.InnerContainer>
          </S.RadioContainer>
          <S.InnerContainer>
            <S.InnerNavWrapper>
              <S.NavInfo>Área Min (m2)</S.NavInfo>
              <S.QuantityInput placeholder="" />
            </S.InnerNavWrapper>
            <S.InnerNavWrapper>
              <S.NavInfo>Área Max (m2)</S.NavInfo>
              <S.QuantityInput placeholder="" />
            </S.InnerNavWrapper>
          </S.InnerContainer>
        </S.NavWrapper>
      </S.SideNav>
    </>
  )
}
export default SideBar

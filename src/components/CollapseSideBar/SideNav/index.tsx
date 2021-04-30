import { useState } from 'react'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from '@/components/Select'
import CurrencyInput from '@/components/Input/index'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { set } from 'mongoose'
interface SideNavProps {
  isOpen: boolean
  setOpen: (newValue: boolean) => void
  location: string
  setLocation: (value: string) => void
  subtipo: string
  setSubtipo: (value: string) => void
}
const SideBar: React.FC<SideNavProps> = ({
  isOpen,
  setOpen,
  location,
  setLocation,
  subtipo,
  setSubtipo
}) => {
  const [newPrice, setNewPrice] = useState<string>('')

  function onClick(radioValue) {
    console.log(radioValue)
  }
  const showSidebar = () => setOpen(!isOpen)

  const mockedRadioValuesArray = [
    { radioValue: '1', onClick: onClick, checked: true },
    { radioValue: '2', onClick: onClick, checked: false },
    { radioValue: '3', onClick: onClick, checked: false },
    { radioValue: '4', onClick: onClick, checked: false }
  ]
  return (
    <>
      <S.NavIcon isOpen={isOpen} onClick={showSidebar}>
        <FontAwesomeIcon icon={faTimes} />
      </S.NavIcon>
      <S.SideNav isOpen={isOpen} className="w-full md:w-2/6">
        <S.NavWrapper>
          <S.NavInfo>Localização ou código</S.NavInfo>
          <S.NavInput
            placeholder="Bairro, endereço ou código"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          {/* <S.NavInfo>Tipo de Imóvel</S.NavInfo> */}
          {/* <S.NavInput placeholder="Selecione um tipo de imovel" /> */}

          <S.NavInfo>Tipo de imovel</S.NavInfo>
          <S.SelectDiv className="w-full">
            <select
              defaultValue=""
              className="w-full"
              value={subtipo}
              onChange={e => setSubtipo(e.target.value)}
              placeholder="Selecione um tipo de imovel"
            >
              <option value="Apartamento">Apartamento</option>
              <option value="Duplex">Duplex</option>
              <option value="Casa de Condomínio">Casa de Condomínio</option>
            </select>
          </S.SelectDiv>
          <S.InnerContainer>
            <S.InnerNavWrapper>
              <S.NavInfo>Preço Min.</S.NavInfo>
              <CurrencyInput
                mask="currency"
                prefix="R$"
                onChange={e => setNewPrice(e.target.value)}
              />
            </S.InnerNavWrapper>
            <S.InnerNavWrapper>
              <S.NavInfo>Preço Max.</S.NavInfo>
              <CurrencyInput
                mask="currency"
                prefix="R$"
                onChange={e => setNewPrice(e.target.value)}
              />{' '}
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
              <S.QuantityInput placeholder="" type="tel" />
            </S.InnerNavWrapper>
            <S.InnerNavWrapper>
              <S.NavInfo>Área Max (m2)</S.NavInfo>
              <S.QuantityInput placeholder="" type="tel" />
            </S.InnerNavWrapper>
          </S.InnerContainer>
        </S.NavWrapper>
      </S.SideNav>
    </>
  )
}
export default SideBar

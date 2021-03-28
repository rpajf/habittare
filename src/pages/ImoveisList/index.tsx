import * as S from '../../styles/ImoveisList'

import { useRouter } from 'next/router'
const ImoveisList: React.FC = () => {
  const router = useRouter()
  const { pid } = router.query

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
      <S.InnerContent>
        <S.SideNav>
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
        <S.Content>
          {pid}
          {router.query.slug}
          <S.Menu>
            <S.MenuItensWrapper>
              <S.MenuOrganizer>
                <S.LabelOn>Comprar</S.LabelOn>
                <S.LabelOff>Alugar</S.LabelOff>
              </S.MenuOrganizer>
              <S.MenuOrganizer>
                <S.MenuText>Ordenar por:</S.MenuText>
                <S.FilterText>Relevância</S.FilterText>
                <S.Btn>Ver no Mapa</S.Btn>
              </S.MenuOrganizer>
            </S.MenuItensWrapper>
            <S.MenuText>Imóveis para comprar</S.MenuText>
            <S.MenuOrganizer>
              <S.MenuBtn>Comprar</S.MenuBtn>
              <S.MenuBtn>Residencial</S.MenuBtn>
            </S.MenuOrganizer>
          </S.Menu>
        </S.Content>
      </S.InnerContent>
    </S.Container>
  )
}
export default ImoveisList
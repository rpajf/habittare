import * as S from './styles'
import Select from '../../components/Select'
import { useRouter } from 'next/router'
const ImoveisList = () => {
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
              <S.NavWrapper>
                <S.NavInfo>Preço Min.</S.NavInfo>
                <S.QuantityInput placeholder="R$" />
              </S.NavWrapper>
              <S.NavWrapper>
                <S.NavInfo>Preço Max.</S.NavInfo>
                <S.QuantityInput placeholder="R$" />
              </S.NavWrapper>
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
              <S.NavWrapper>
                <S.NavInfo>Área Min (m2)</S.NavInfo>
                <S.QuantityInput placeholder="" />
              </S.NavWrapper>
              <S.NavWrapper>
                <S.NavInfo>Área Max (m2)</S.NavInfo>
                <S.QuantityInput placeholder="" />
              </S.NavWrapper>
            </S.InnerContainer>
          </S.NavWrapper>
        </S.SideNav>
        <S.Content>
          {pid}
          {router.query.slug}
          <S.Menu>
            <S.MenuItens>
              <S.MenuOrganizer>
                <S.LabelOn>Comprar</S.LabelOn>
                <S.LabelOff>Alugar</S.LabelOff>
              </S.MenuOrganizer>
              <S.MenuOrganizer>
                <S.MenuText>Ordenar por</S.MenuText>
                <S.FilterText>Relevância</S.FilterText>
                <S.Btn>Ver no Mapa</S.Btn>
              </S.MenuOrganizer>
            </S.MenuItens>
          </S.Menu>
          <S.InnerContainer>
            <S.ImgDiv />
          </S.InnerContainer>
        </S.Content>
      </S.InnerContent>
    </S.Container>
  )
}
export default ImoveisList

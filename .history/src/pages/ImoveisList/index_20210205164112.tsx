import * as S from './styles'
import Select from '../../components/Select'

import { useRouter } from 'next/router'
const ImoveisList = () => {
  const router = useRouter()
  const { pid } = router.query

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
                <S.NavInfo>Localização ou código</S.NavInfo>
                <S.NavInput placeholder="Bairro, endereço ou código" />
              </S.NavWrapper>
            </S.InnerContainer>
          </S.NavWrapper>
          <S.InnerContent></S.InnerContent>
        </S.SideNav>
        <S.Content>
          {pid}
          {router.query.slug}
          <S.Menu>
            <S.ContentWrapper>
              <S.ContentOrganizer>
                <S.LabelOn>Comprar</S.LabelOn>

                <S.LabelOff>Alugar</S.LabelOff>
              </S.ContentOrganizer>
              <S.ContentOrganizer>
                <S.MenuText>Ordenar por</S.MenuText>
                <S.FilterText>Relevância</S.FilterText>
                <S.Btn>Ver no Mapa</S.Btn>
              </S.ContentOrganizer>
            </S.ContentWrapper>
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

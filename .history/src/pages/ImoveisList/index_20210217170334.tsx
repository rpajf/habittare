import * as S from '../../styles/'

import { useRouter } from 'next/router'
const ImoveisList: React.FC = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <S.Container>
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
        <S.CardContainer>
          <S.ImgDiv />
        </S.CardContainer>
      </S.Content>
    </S.Container>
  )
}
export default ImoveisList

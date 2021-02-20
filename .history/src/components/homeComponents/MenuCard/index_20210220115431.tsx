import * as S from './styles'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  [key: string]: string
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      }
    ],
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params
  return {
    props: {
      id: id
    }
  }
}
const MenuCard: React.FC = () => {
  return (
    <S.Container>{}
      <S.Header>
        <S.topLabel>Apartamento</S.topLabel>
        <S.BottomLabel>Venda</S.BottomLabel>
      </S.Header>
      <S.Content>
        <S.Title>Condominio Lunar Selo</S.Title>
        <S.Deion>
          <S.DeionItem>
            <S.DeionItemIcon></S.DeionItemIcon>
            <S.DeionItemMainText>
              Av. São Luis Rei de França
            </S.DeionItemMainText>
          </S.DeionItem>
          <S.DeionItem>
            <S.DeionItemIcon></S.DeionItemIcon>

            <S.DeionItemText>m²</S.DeionItemText>
            <S.DeionItemMainText>72 </S.DeionItemMainText>
          </S.DeionItem>
          <S.DeionItem>
            <S.DeionItemIcon></S.DeionItemIcon>
            <S.DeionItemText>banheiros</S.DeionItemText>
            <S.DeionItemMainText>4</S.DeionItemMainText>
          </S.DeionItem>
          <S.DeionItem>
            <S.DeionItemIcon></S.DeionItemIcon>

            <S.DeionItemText> quartos</S.DeionItemText>
            <S.DeionItemMainText>2</S.DeionItemMainText>
          </S.DeionItem>
        </S.Deion>
      </S.Content>
    </S.Container>
  )
}

export default MenuCard
export {}

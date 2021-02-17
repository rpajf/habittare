import * as S from './styles'

const MenuCard: React.FC = () => {
  return (
    <S.Container>
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

import * as S from './styles'

import InfoTextComp from '../../components/InfoTextComp'

import Slider from '../../components/homeComponents/SliderItem/Slider'
const Property: React.FC = () => {
  return (
    <S.Container>
      <Slider />
      <S.MainInfo>
        <S.MainInfoWrapper>
          <S.InfoWrapper>
            <S.Title>Condominio Portal do saber</S.Title>
            <S.SubTitle>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              earum!
            </S.SubTitle>
          </S.InfoWrapper>
        </S.MainInfoWrapper>
        <S.ButtonsWrapper>
          <S.PrimaryBtn>Venda</S.PrimaryBtn>
          <S.SecondaryBtn>Disponivel</S.SecondaryBtn>
        </S.ButtonsWrapper>
      </S.MainInfo>
      <S.Content>
        <InfoTextComp content="Visão geral do imovel">
          <S.PropertyInfoWrapper>
            <S.DataWrapper>
              <S.InfoData>Preço</S.InfoData>
              <S.InfoQuantity>R$10000</S.InfoQuantity>
            </S.DataWrapper>
            <S.DataWrapper>
              <S.InfoData>Banheiros</S.InfoData>
              <S.InfoQuantity>2</S.InfoQuantity>
            </S.DataWrapper>
            <S.DataWrapper>
              <S.InfoData>Quartos</S.InfoData>
              <S.InfoQuantity>3</S.InfoQuantity>
            </S.DataWrapper>
            <S.DataWrapper>
              <S.InfoData>Garagens</S.InfoData>

              <S.InfoQuantity>1</S.InfoQuantity>
            </S.DataWrapper>
            <S.DataWrapper>
              <S.InfoData>Localização</S.InfoData>

              <S.InfoQuantity>Bairro/cidade</S.InfoQuantity>
            </S.DataWrapper>
          </S.PropertyInfoWrapper>
        </InfoTextComp>
        <InfoTextComp content="Descrição do imovel">
          <S.InfoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eleifend varius ullamcorper. Nunc consequat ac orci ut ultrices.
            Suspendisse blandit imperdiet arcu, ac viverra lacus lobortis quis.
            Suspendisse elementum lacinia magna, pharetra interdum ante lobortis
            sed. Fusce vehicula orci sit amet magna mol
          </S.InfoText>
        </InfoTextComp>
        <InfoTextComp content="Localização"></InfoTextComp>
      </S.Content>
    </S.Container>
  )
}

export default Property

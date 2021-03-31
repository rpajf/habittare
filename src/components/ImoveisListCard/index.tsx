import * as S from './styles'
import { PropertyType } from '@/models/Property'

import Image from 'next/image'
import Button from '@/components/PrimaryBtn'
interface PropertyCardProps {
  property: PropertyType
}

const ImoveisListCard: React.FC<PropertyCardProps> = () => {
  return (
    <S.Container>
      <S.ImgArea>
        <S.PriceLabel>
          <S.SmallText>Apartamento</S.SmallText>
          <S.SmallText>R$123123</S.SmallText>
        </S.PriceLabel>
        <S.StatusLabel>
          <S.SmallText>Venda</S.SmallText>
        </S.StatusLabel>
      </S.ImgArea>
      <S.ContentInfo>
        <S.ImovelName>Condominio Barramar</S.ImovelName>
        <S.TextFoot />
        <S.HeaderWrapper>
          <Image src="/menu/pin.svg" height={20} width={20} />

          <S.ImovelLocation>R.Projetada Calhau, n.10</S.ImovelLocation>
          <S.ImovelDescription>
            Ajudar as pessoas é o nosso principal objetivo! Nós da Habittare t
          </S.ImovelDescription>
        </S.HeaderWrapper>
        <S.ContentWrapper>
          <S.ImovelInfoWrapper>
            <Image src="/menu/pin.svg" height={20} width={20} />

            <S.ImovelData>Banheiros</S.ImovelData>
            <S.ImovelInfo>4</S.ImovelInfo>
          </S.ImovelInfoWrapper>
          <S.ImovelInfoWrapper>
            <Image src="/menu/pin.svg" height={20} width={20} />

            <S.ImovelData>Quartos</S.ImovelData>
            <S.ImovelInfo>3</S.ImovelInfo>
          </S.ImovelInfoWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.ImovelInfoWrapper>
            <Image src="/menu/pin.svg" height={20} width={20} />

            <S.ImovelData>Banheiros</S.ImovelData>
            <S.ImovelInfo>4</S.ImovelInfo>
          </S.ImovelInfoWrapper>
          <S.ImovelInfoWrapper>
            <Image src="/menu/pin.svg" height={20} width={20} />

            <S.ImovelData>Quartos</S.ImovelData>
            <S.ImovelInfo>3</S.ImovelInfo>
          </S.ImovelInfoWrapper>
        </S.ContentWrapper>
        <S.ButtonsWrapper>
          <S.Button>Main detalhes</S.Button>
          <S.Button>Agendar Visita</S.Button>
        </S.ButtonsWrapper>
      </S.ContentInfo>
    </S.Container>
  )
}
export default ImoveisListCard

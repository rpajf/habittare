import Image from 'next/image'
import {
  Container,
  Card,
  CardTag,
  StatusTag,
  ImgWrapper,
  CardTitle,
  HorizontalLine,
  TitleWrapper,
  InfoWrapper,
  CardInfo,
  CardQuantity,
  InfoArea
} from './styles'
const MenuCard: React.FC = () => {
  return (
    <Container>
      <Card>
        <ImgWrapper>
          <CardTag>Apartamento</CardTag>
          <StatusTag>Venda</StatusTag>
        </ImgWrapper>
        <TitleWrapper>
          <CardTitle>Condominio lunar selo</CardTitle>
          <HorizontalLine />
        </TitleWrapper>
        <InfoArea>
          <InfoWrapper>
            <Image src="/card/Area.svg" width={12.5} height={12.5} />

            <CardQuantity>Av. São Luís Rei de França</CardQuantity>
          </InfoWrapper>
          <InfoWrapper>
            <Image src="/card/Area.svg" width={12.5} height={12.5} />
            <CardInfo>M2</CardInfo>
            <CardQuantity>72</CardQuantity>
          </InfoWrapper>
          <InfoWrapper>
            <Image src="/card/Area.svg" width={12.5} height={12.5} />
            <CardInfo>M2</CardInfo>
            <CardQuantity>72</CardQuantity>
          </InfoWrapper>
          <InfoWrapper>
            <Image src="/card/Area.svg" width={12.5} height={12.5} />
            <CardInfo>M2</CardInfo>
            <CardQuantity>72</CardQuantity>
          </InfoWrapper>
        </InfoArea>
      </Card>
      <Card>
        <ImgWrapper>
          <CardTag>Apartamento</CardTag>
          <StatusTag>Venda</StatusTag>
        </ImgWrapper>
      </Card>
    </Container>
  )
}

export default MenuCard

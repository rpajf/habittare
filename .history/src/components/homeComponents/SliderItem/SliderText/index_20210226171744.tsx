import {
  TextDiv,
  Title,
  SubTitle,
  InfoWrapper,
  SellButton,
  SubtitleWrapper,
  Line,
  InfoText
} from './styles'
import Image from 'next'

const SliderText: React.FC = () => {
  return (
    <TextDiv>
      <Title>Rua São João</Title>
      <SubtitleWrapper>
        <SubTitle>Angelim São Luis</SubTitle>
        <SellButton>Venda</SellButton>
      </SubtitleWrapper>
      <InfoWrapper>
        <Image src="/menu/icon1.svg" height={30} wid
        />
        <InfoText>
          52
          <br />
          m2
        </InfoText>
        <InfoText>
          2
          <br />
          quartos
        </InfoText>
        <InfoText>
          2
          <br />
          banheiros
        </InfoText>
      </InfoWrapper>
    </TextDiv>
  )
}

export default SliderText
export {}

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
import Image from 'next/image'

interface Props {
  next: () => void
  prev: () => void
  children?: React.ReactChild[]
}

const SliderText: React.FC<Props> = ({ next, prev }) => {
  return (
    <TextDiv>
      <div>
        <button onClick={prev}>-</button>
        <button onClick={next}>+</button>
      </div>
      <Title>Rua São João</Title>
      <SubtitleWrapper>
        <Image src="/menu/pin.svg" height={20} width={20} />

        <SubTitle>Angelim - São Luis</SubTitle>
        <SellButton>Venda</SellButton>
      </SubtitleWrapper>
      <InfoWrapper>
        <Image src="/menu/icon2.svg" height={20} width={20} />
        <InfoText>
          52
          <br />
          m2
        </InfoText>
        <Image src="/menu/icon1.svg" height={20} width={20} />

        <InfoText>
          2
          <br />
          quartos
        </InfoText>
        <Image src="/menu/icon3.svg" height={20} width={20} />

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

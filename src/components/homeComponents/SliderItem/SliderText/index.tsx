import Image from 'next/image'

import * as S from './styles'

interface Props {
  next: () => void
  prev: () => void
  children?: React.ReactChild[]
}

const SliderText: React.FC<Props> = ({ next, prev }) => {
  return (
    <S.TextDiv>
      <div>
        <button onClick={prev}>-</button>
        <button onClick={next}>+</button>
      </div>
      <S.Title>Rua São João</S.Title>
      <S.SubtitleWrapper>
        <Image src="/menu/pin.svg" height={20} width={20} />

        <S.SubTitle>Angelim - São Luis</S.SubTitle>
        <S.SellButton>Venda</S.SellButton>
      </S.SubtitleWrapper>
      <S.InfoWrapper className="flex-col items-start md:flex-row md:items-center">
        <div className="flex flex-row">
          <Image src="/menu/icon2.svg" height={20} width={20} />
          <S.InfoText>
            52
            <br />
            m2
          </S.InfoText>
        </div>
        <div className="flex flex-row">
          <Image src="/menu/icon1.svg" height={20} width={20} />

          <S.InfoText>
            2
            <br />
            quartos
          </S.InfoText>
        </div>
        <div className="flex flex-row">
          <Image src="/menu/icon3.svg" height={20} width={20} />

          <S.InfoText>
            2
            <br />
            banheiros
          </S.InfoText>
        </div>
      </S.InfoWrapper>
    </S.TextDiv>
  )
}

export default SliderText
export {}

import { PropertyType } from '@/models/Property'
import { renderArea, renderTipoContrato, renderTitle } from '@/utils/property'
import Image from 'next/image'

import * as S from './styles'

interface Props {
  property: PropertyType
  next: () => void
  prev: () => void
}

const SliderText: React.FC<Props> = ({ property, next, prev }) => {
  return (
    <S.TextDiv>
      <div>
        <button onClick={prev}>-</button>
        <button onClick={next}>+</button>
      </div>
      <S.Title>{renderTitle(property)}</S.Title>
      <S.SubtitleWrapper>
        <Image src="/menu/pin.svg" height={20} width={20} />

        <S.SubTitle>
          {property.enderecoBairro} - {property.enderecoCidade}
        </S.SubTitle>
        <S.SellButton>{renderTipoContrato(property.tipoContrato)}</S.SellButton>
      </S.SubtitleWrapper>
      <S.InfoWrapper className="flex-col items-start md:flex-row md:items-center">
        <div className="flex flex-row">
          <Image src="/menu/icon2.svg" height={20} width={20} />
          <S.InfoText>
            {renderArea(property)}
            <br />
            {property.medida}
          </S.InfoText>
        </div>
        <div className="flex flex-row">
          <Image src="/menu/icon1.svg" height={20} width={20} />

          <S.InfoText>
            {property.dormitorios}
            <br />
            quartos
          </S.InfoText>
        </div>
        <div className="flex flex-row">
          <Image src="/menu/icon3.svg" height={20} width={20} />

          <S.InfoText>
            {property.banheiros}
            <br />
            banheiros
          </S.InfoText>
        </div>
      </S.InfoWrapper>
    </S.TextDiv>
  )
}

export default SliderText

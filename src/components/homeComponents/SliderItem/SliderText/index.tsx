import Icon, { IconNames } from '@/components/Icon'
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
      <S.SubtitleWrapper className="items-center">
        <Icon name={IconNames.Pin} size={20} color="white" />

        <S.SubTitle>
          {property.enderecoBairro} - {property.enderecoCidade}
        </S.SubTitle>
        <S.SellButton>{renderTipoContrato(property.tipoContrato)}</S.SellButton>
      </S.SubtitleWrapper>
      <S.InfoWrapper className="flex-col items-start md:flex-row md:items-center">
        <div className="flex flex-row items-center">
          <Icon name={IconNames.Measure} size={20} color="white" />
          <S.InfoText>
            {renderArea(property)}
            <br />
            {property.medida}
          </S.InfoText>
        </div>
        <div className="flex flex-row items-center">
          <Icon name={IconNames.Bed} size={20} color="white" />

          <S.InfoText>
            {property.dormitorios}
            <br />
            quartos
          </S.InfoText>
        </div>
        <div className="flex flex-row items-center">
          <Icon name={IconNames.Baths} size={20} color="white" />

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

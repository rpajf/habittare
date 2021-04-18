import { useState } from 'react'
import * as S from './styles'
import { PropertyType } from '@/models/Property'

import {
  renderArea,
  renderTipoContrato,
  renderTitle,
  renderValor
} from '@/utils/property'
import Icon, { IconNames } from '../Icon'
import Link from 'next/link'
interface PropertyCardProps {
  property: PropertyType
}

const ImoveisListCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isToggled, setToggle] = useState<boolean>(false)

  return (
    <Link href={`/imoveis/${property.codigo}`}>
      <S.Container className="flex flex-col md:flex-row">
        <S.ImgArea
          style={{
            backgroundImage: `url("${property.imagens[0].link}")`
          }}
        >
          <S.PriceLabel>
            <S.SmallText>{property.subtipo}</S.SmallText>
            <S.SmallText>R$ {renderValor(property)}</S.SmallText>
          </S.PriceLabel>
          <S.StatusLabel>
            <S.SmallText>
              {renderTipoContrato(property.tipoContrato)}
            </S.SmallText>
          </S.StatusLabel>
        </S.ImgArea>
        <S.ContentInfo>
          <S.HeaderWrapper className="flex flex-col">
            <S.ImovelName>{renderTitle(property)}</S.ImovelName>
            <S.TextFoot />

            <div className="flex flex-row items-center">
              <Icon name={IconNames.Pin} size={12} color="#606060" />
              <S.ImovelLocation className="ml-2">
                {property.enderecoLogradouro}
              </S.ImovelLocation>
            </div>
            {/* <S.ImovelDescription>
            Ajudar as pessoas é o nosso principal objetivo! Nós da Habittare t
          </S.ImovelDescription> */}
          </S.HeaderWrapper>
          <S.ContentWrapper>
            <S.ImovelInfoWrapper>
              <div className="flex flex-row items-center">
                <Icon name={IconNames.Measure} size={12} color="#606060" />
                <S.ImovelData className="ml-2">
                  Area ({property.medida})
                </S.ImovelData>
              </div>
              <S.ImovelInfo>{renderArea(property)}</S.ImovelInfo>
            </S.ImovelInfoWrapper>
            <S.ImovelInfoWrapper className="last">
              <div className="flex flex-row items-center">
                <Icon name={IconNames.Bed} size={12} color="#606060" />
                <S.ImovelData className="ml-2">Quartos</S.ImovelData>
              </div>
              <S.ImovelInfo>{property.dormitorios}</S.ImovelInfo>
            </S.ImovelInfoWrapper>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.ImovelInfoWrapper>
              <div className="flex flex-row items-center">
                <Icon name={IconNames.Baths} size={12} color="#606060" />
                <S.ImovelData className="ml-2">Banheiros</S.ImovelData>
              </div>
              <S.ImovelInfo>{property.banheiros}</S.ImovelInfo>
            </S.ImovelInfoWrapper>
            <S.ImovelInfoWrapper className="last">
              <div className="flex flex-row items-center">
                <Icon name={IconNames.Garage} size={12} color="#606060" />
                <S.ImovelData className="ml-2">Garagens</S.ImovelData>
              </div>
              <S.ImovelInfo>{property.garagens}</S.ImovelInfo>
            </S.ImovelInfoWrapper>
          </S.ContentWrapper>
          <S.ButtonsWrapper>
            <S.Button>Mais detalhes</S.Button>
          </S.ButtonsWrapper>
        </S.ContentInfo>
      </S.Container>
    </Link>
  )
}
export default ImoveisListCard

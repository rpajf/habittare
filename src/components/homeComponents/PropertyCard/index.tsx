import Link from 'next/link'

import { PropertyType } from '@/models/Property'
import { renderArea, renderTipoContrato, renderTitle } from '@/utils/property'
import Icon, { IconNames } from '@/components/Icon'

import * as S from './styles'

interface PropertyCardProps {
  property: PropertyType
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/imoveis/${property.codigo}`}>
      <S.Container className="w-full md:w-1/4 lg:w-1/6">
        <S.Header
          style={{
            backgroundImage: `url("${property.imagens[0].link}")`
          }}
        >
          <S.topLabel>{property.subtipo}</S.topLabel>
          <S.BottomLabel>
            {renderTipoContrato(property.tipoContrato)}
          </S.BottomLabel>
        </S.Header>
        <S.Content>
          <S.Title>{renderTitle(property)}</S.Title>
          <S.Deion>
            <S.DeionItem>
              <Icon name={IconNames.Pin} size={12} color="#8A8A8A" />
              <S.DeionItemMainText>
                {property.enderecoLogradouro}
              </S.DeionItemMainText>
            </S.DeionItem>
            <S.DeionItem>
              <Icon name={IconNames.Measure} size={12} color="#8A8A8A" />

              <S.DeionItemText>{property.medida}</S.DeionItemText>
              <S.DeionItemMainText>{renderArea(property)}</S.DeionItemMainText>
            </S.DeionItem>
            <S.DeionItem>
              <Icon name={IconNames.Measure} size={12} color="#8A8A8A" />
              <S.DeionItemText>banheiros</S.DeionItemText>
              <S.DeionItemMainText>{property.banheiros}</S.DeionItemMainText>
            </S.DeionItem>
            <S.DeionItem>
              <Icon name={IconNames.Bed} size={12} color="#8A8A8A" />

              <S.DeionItemText>quartos</S.DeionItemText>
              <S.DeionItemMainText>{property.dormitorios}</S.DeionItemMainText>
            </S.DeionItem>
          </S.Deion>
        </S.Content>
      </S.Container>
    </Link>
  )
}

export default PropertyCard

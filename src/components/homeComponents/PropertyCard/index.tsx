import { PropertyType } from '@/models/Property'
import { renderArea, renderTipoContrato, renderTitle } from '@/utils/property'
import Link from 'next/link'
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
              <S.DeionItemIcon></S.DeionItemIcon>
              <S.DeionItemMainText>
                {property.enderecoLogradouro}
              </S.DeionItemMainText>
            </S.DeionItem>
            <S.DeionItem>
              <S.DeionItemIcon></S.DeionItemIcon>

              <S.DeionItemText>{property.medida}</S.DeionItemText>
              <S.DeionItemMainText>{renderArea(property)}</S.DeionItemMainText>
            </S.DeionItem>
            <S.DeionItem>
              <S.DeionItemIcon></S.DeionItemIcon>
              <S.DeionItemText>banheiros</S.DeionItemText>
              <S.DeionItemMainText>{property.banheiros}</S.DeionItemMainText>
            </S.DeionItem>
            <S.DeionItem>
              <S.DeionItemIcon></S.DeionItemIcon>

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

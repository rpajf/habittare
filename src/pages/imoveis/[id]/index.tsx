import * as S from '@/styles/imovel'
import { GetServerSideProps } from 'next'

import MapBox from '@/components/Map'
import InfoTextComp from '@/components/InfoTextComp'

import PrimaryButton from '@/components/Buttons/PrimaryBtn'

import ImobCarousel from '@/components/ImobCarousel'

import { geyOnePropertyByCodeOrId } from '@/services/properties'
import { PropertyType } from '@/models/Property'
import { renderTitle, renderTipoContrato } from '@/utils/property'
import PropertyMap from '@/components/PropertyMap'

import nextConnect from 'next-connect'
import databaseMiddleware from '@/middlewares/db'
import Icon, { IconNames } from '@/components/Icon'

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params
}) => {
  const handler = nextConnect().use(databaseMiddleware)
  try {
    await handler.run(req, res)

    const id = typeof params.id === 'string' ? params.id : params.id[0]
    const property = await geyOnePropertyByCodeOrId(id)

    if (!property) return { notFound: true }

    return {
      props: {
        property: JSON.parse(JSON.stringify(property))
      }
    }
  } catch (error) {
    console.log(error)
    return { notFound: true }
  }
}

interface PropertyProps {
  property: PropertyType
}

const Property: React.FC<PropertyProps> = ({ property }) => {
  return (
    <>
      <ImobCarousel imagens={property.imagens} />
      <S.Container>
        <S.MainInfo>
          <div className="container mx-auto">
            <div className="flex flex-row justify-between">
              <S.InfoWrapper>
                <S.Title>{renderTitle(property)}</S.Title>
                <S.SubTitle>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                  earum!
                </S.SubTitle>
              </S.InfoWrapper>
              <S.ButtonsWrapper>
                <S.PrimaryBtn>
                  {renderTipoContrato(property.tipoContrato)}
                </S.PrimaryBtn>
                <S.SecondaryBtn>Disponivel</S.SecondaryBtn>
              </S.ButtonsWrapper>
            </div>
          </div>
        </S.MainInfo>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <S.Content className="w-full md:w-4/5">
            <InfoTextComp content="Visão geral do imovel">
              <S.PropertyInfoWrapper>
                <S.DataWrapper>
                  <div className="flex flex-row my-2">
                    <Icon name={IconNames.Money} size={20} color="#8A8A8A" />
                    <S.InfoData className="ml-2">Preço</S.InfoData>
                  </div>
                  <S.InfoQuantity>R$ {property.valorVenda}</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <div className="flex flex-row my-2">
                    <Icon name={IconNames.Baths} size={20} color="#8A8A8A" />
                    <S.InfoData className="ml-2">Banheiros</S.InfoData>
                  </div>
                  <S.InfoQuantity>{property.banheiros}</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <div className="flex flex-row my-2">
                    <Icon name={IconNames.Bed} size={20} color="#8A8A8A" />
                    <S.InfoData className="ml-2">Quartos</S.InfoData>
                  </div>
                  <S.InfoQuantity>{property.dormitorios}</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <div className="flex flex-row my-2">
                    <Icon name={IconNames.Garage} size={20} color="#8A8A8A" />
                    <S.InfoData className="ml-2">Garagens</S.InfoData>
                  </div>

                  <S.InfoQuantity>{property.garagens}</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <div className="flex flex-row my-2">
                    <Icon name={IconNames.Pin} size={20} color="#8A8A8A" />{' '}
                    <S.InfoData className="ml-2">Localização</S.InfoData>
                  </div>

                  <S.InfoQuantity>
                    {property.enderecoLogradouro}, {property.enderecoBairro} -{' '}
                    {property.enderecoCidade}/{property.enderecoEstado}
                  </S.InfoQuantity>
                </S.DataWrapper>
              </S.PropertyInfoWrapper>
            </InfoTextComp>
            <InfoTextComp content="Descrição do imovel">
              <S.InfoText className="whitespace-pre-line">
                {property.observacoes}
              </S.InfoText>
            </InfoTextComp>
            <InfoTextComp content="Localização">
              <PropertyMap
                lat={property.lat}
                long={property.log}
                showExactly={property.geoVisivel === 1}
              />
            </InfoTextComp>
          </S.Content>
          <div className="w-full md:w-1/5">
            <S.NavWrapper>
              <S.SideNav>
                <S.NavMainText>Contato</S.NavMainText>
                <S.TextFoot />
                <S.InputArea name="nome" placeholder="Nome"></S.InputArea>
                <S.InputArea name="name" placeholder="E-mail"></S.InputArea>
                <S.InputArea name="name" placeholder="Telefone"></S.InputArea>
                <S.InputArea
                  name="name"
                  placeholder="Olá, Estou interessado no imóvel consectetur adipiscing elit"
                ></S.InputArea>
                <PrimaryButton>Agendar Visita</PrimaryButton>
              </S.SideNav>
              <S.SideNav>
                <S.InfoText>Propriedades relacionadas</S.InfoText>
              </S.SideNav>
              <S.SideNav>
                <S.InfoText>Propriedades em destaque</S.InfoText>
              </S.SideNav>
            </S.NavWrapper>
          </div>
        </div>
        <S.ContentOrganizer></S.ContentOrganizer>
      </S.Container>
    </>
  )
}

export default Property

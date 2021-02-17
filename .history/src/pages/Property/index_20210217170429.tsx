import * as S from './styles'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import MapBox from '../../components/Map'
import InfoTextComp from '../../components/InfoTextComp'
import { FormHandles } from '@unform/core'
import PrimaryButton from '../../components/Buttons/PrimaryBtn'
import { Form } from '@unform/web'
import Slider from '../../components/homeComponents/SliderItem/Slider'


const Property: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <Slider />
      <S.Container>
        <S.MainInfo>
          <S.MainInfoWrapper>
            <S.InfoWrapper>
              <S.Title>Condominio Luz do saber{pid}</S.Title>
              {router.query.slug}
              <S.SubTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                earum!
              </S.SubTitle>
            </S.InfoWrapper>
          </S.MainInfoWrapper>
          <S.ButtonsWrapper>
            <S.PrimaryBtn>Venda</S.PrimaryBtn>
            <S.SecondaryBtn>Disponivel</S.SecondaryBtn>
          </S.ButtonsWrapper>
        </S.MainInfo>
        <S.ContentOrganizer>
          <S.Content>
            <InfoTextComp content="Visão geral do imovel">
              <S.PropertyInfoWrapper>
                <S.DataWrapper>
                  <S.InfoData>Preço</S.InfoData>
                  <S.InfoQuantity>R$10000</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <S.InfoData>Banheiros</S.InfoData>
                  <S.InfoQuantity>2</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <S.InfoData>Quartos</S.InfoData>
                  <S.InfoQuantity>3</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <S.InfoData>Garagens</S.InfoData>

                  <S.InfoQuantity>1</S.InfoQuantity>
                </S.DataWrapper>
                <S.DataWrapper>
                  <S.InfoData>Localização</S.InfoData>

                  <S.InfoQuantity>Bairro/cidade</S.InfoQuantity>
                </S.DataWrapper>
              </S.PropertyInfoWrapper>
            </InfoTextComp>
            <InfoTextComp content="Descrição do imovel">
              <S.InfoText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eleifend varius ullamcorper. Nunc consequat ac orci
                ut ultrices. Suspendisse blandit imperdiet arcu, ac viverra
                lacus lobortis quis. Suspendisse elementum lacinia magna,
                pharetra interdum ante lobortis sed. Fusce vehicula orci sit
                amet magna mol
              </S.InfoText>
            </InfoTextComp>
            <InfoTextComp content="Localização">
              <MapBox />
            </InfoTextComp>
          </S.Content>
          <S.NavWrapper>
            <S.SideNav>
              <S.NavMainText>Contato</S.NavMainText>
              <S.TextFoot />
              {/* <Form ref={formRef}>
                <Input name="name" placeholder="Nome"></Input>
              </Form> */}
              <S.InputArea placeholder="Nome"></S.InputArea>
              <S.InputArea placeholder="E-mail"></S.InputArea>
              <S.InputArea placeholder="Telefone"></S.InputArea>
              <S.InputArea placeholder="Olá, Estou interessado no imóvel consectetur adipiscing elit"></S.InputArea>
              <PrimaryButton>Agendar Visita</PrimaryButton>
            </S.SideNav>
            <S.SideNav>
              <S.InfoText>Propriedades em destaque</S.InfoText>
            </S.SideNav>
            <S.SideNav>
              <S.InfoText>Propriedades em destaque</S.InfoText>
            </S.SideNav>
          </S.NavWrapper>
        </S.ContentOrganizer>
      </S.Container>
    </>
  )
}

export default Property

import { useState } from 'react'
import * as S from '@/styles/imoveis'
import { GetServerSideProps } from 'next'
import nextConnect from 'next-connect'

import databaseMiddleware from '@/middlewares/db'

import ImoveisListCard from '@/components/ImoveisListCard'
import SideNav from '@/components/CollapseSideBar/SideNav'
import ShowSideNav from '@/components/CollapseSideBar'
import { getAllProperties } from '@/services/properties'
import { PropertyType } from '@/models/Property'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const handler = nextConnect().use(databaseMiddleware)
  try {
    await handler.run(req, res)
    const properties = await getAllProperties()

    return {
      props: {
        properties: JSON.parse(JSON.stringify(properties))
      }
    }
  } catch (error) {
    console.log(error)
    return { notFound: true }
  }
}

interface ImoveisListProps {
  properties: [PropertyType]
  isDisplayed: boolean
}

const ImoveisList: React.FC<ImoveisListProps> = ({
  properties,
  isDisplayed
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const showSidebar = () => setOpen(!isOpen)

  function onClick(radioValue) {
    console.log(radioValue)
  }

  const mockedRadioValuesArray = [
    { radioValue: '1', onClick: onClick, checked: true },
    { radioValue: '2', onClick: onClick, checked: false },
    { radioValue: '3', onClick: onClick, checked: false },
    { radioValue: '4', onClick: onClick, checked: false }
  ]

  return (
    <S.Container>
      <S.InnerContent className="container mx-auto flex flex-col md:flex-row justify-between">
        <ShowSideNav isOpen={isOpen} setOpen={setOpen} />
        <SideNav isOpen={isOpen} setOpen={setOpen} />
        <S.Content isDisplayed={!isOpen} className="w-full md:w-4/6">
          <S.Menu className="w-full">
            <S.MenuItensWrapper>
              <S.MenuOrganizer>
                <S.LabelOn>Comprar</S.LabelOn>
                <S.LabelOff>Alugar</S.LabelOff>
              </S.MenuOrganizer>
              <S.MenuOrganizer>
                <S.MenuText>Ordenar por:</S.MenuText>
                <S.FilterText>Relevância</S.FilterText>
                <S.Btn>Ver no Mapa</S.Btn>
              </S.MenuOrganizer>
            </S.MenuItensWrapper>
            <S.MenuText>Imóveis para comprar</S.MenuText>
            <S.MenuOrganizer>
              <S.MenuBtn>Comprar</S.MenuBtn>
              <S.MenuBtn>Residencial</S.MenuBtn>
            </S.MenuOrganizer>
          </S.Menu>
          {properties.map(property => (
            <ImoveisListCard key={property.codigo} property={property} />
          ))}
        </S.Content>
      </S.InnerContent>
    </S.Container>
  )
}
export default ImoveisList

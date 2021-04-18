import { useEffect, useState } from 'react'
import * as S from '@/styles/imoveis'
import { GetServerSideProps } from 'next'
import nextConnect from 'next-connect'

import databaseMiddleware from '@/middlewares/db'

import ImoveisListCard from '@/components/ImoveisListCard'
import SideNav from '@/components/CollapseSideBar/SideNav'
import ShowSideNav from '@/components/CollapseSideBar'
import { getAllPropertiesWithFilter } from '@/services/properties'
import { PropertyType } from '@/models/Property'
import axios from 'axios'
import { useRouter } from 'next/router'

import { _returnStringOfQuery } from '@/utils/api/helpers'

export interface Filter {
  tipoContrato?: string
  subtipo?: string
  // tipoContrato?: string
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query
}) => {
  const handler = nextConnect().use(databaseMiddleware)
  try {
    await handler.run(req, res)

    const { tipoContrato, subtipo } = query

    const filter: Filter = {}

    if (tipoContrato) {
      filter.tipoContrato =
        typeof tipoContrato === 'string' ? tipoContrato : tipoContrato[0]
    }

    if (subtipo) {
      filter.subtipo = typeof subtipo === 'string' ? subtipo : subtipo[0]
    }

    const properties = await getAllPropertiesWithFilter(filter)

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
}

const ImoveisList: React.FC<ImoveisListProps> = ({ properties }) => {
  const router = useRouter()
  const query = router.query

  const loadedLocation = _returnStringOfQuery(query.location)
  const loadedTipoContrato = _returnStringOfQuery(query.tipoContrato)
  const loadedSubtipo = _returnStringOfQuery(query.subtipo)

  const [isOpen, setOpen] = useState<boolean>(false)
  const [loadedProperties, setLoadedProperties] = useState<[PropertyType]>(
    properties
  )

  const [location, setLocation] = useState(loadedLocation)
  // const [tipoContrato, setTipoContrato] = useState(loadedTipoContrato === 'Compra' ? true : false)
  const [subtipo, setSubtipo] = useState(loadedSubtipo)

  const [isToggled, setToggle] = useState<boolean>(
    loadedTipoContrato === 'Locação'
  )

  const showSidebar = () => setOpen(!isOpen)

  const handleSwitch = () => {
    setToggle(!isToggled)
  }

  useEffect(() => {
    fetchProps()
  }, [subtipo, isToggled])

  const fetchProps = async () => {
    const tipoContrato = !isToggled ? 'Compra' : 'Locação'
    const { data } = await axios.get('api/imoveis', {
      params: { subtipo, tipoContrato }
    })
    setLoadedProperties(data)
  }

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
        <SideNav
          isOpen={isOpen}
          setOpen={setOpen}
          location={location}
          setLocation={setLocation}
          subtipo={subtipo}
          setSubtipo={setSubtipo}
        />
        <S.Content className="w-full md:w-4/6">
          <S.Menu className="w-full">
            <S.MenuItensWrapper>
              <S.MenuOrganizer>
                <S.LabelOn isToggled={isToggled} onClick={handleSwitch}>
                  Comprar
                </S.LabelOn>
                <S.LabelOff isToggled={isToggled} onClick={handleSwitch}>
                  Alugar
                </S.LabelOff>
              </S.MenuOrganizer>
              <S.MenuOrganizer>
                {/* <S.MenuText>Ordenar por:</S.MenuText>
                <S.FilterText>Relevância</S.FilterText> */}
                <S.Btn>Ver no Mapa</S.Btn>
              </S.MenuOrganizer>
            </S.MenuItensWrapper>
            <S.MenuText>Imóveis para comprar</S.MenuText>
            {/* <S.MenuOrganizer>
              <S.MenuBtn>Comprar</S.MenuBtn>
              <S.MenuBtn>Residencial</S.MenuBtn>
            </S.MenuOrganizer> */}
          </S.Menu>
          {loadedProperties.map(property => (
            <ImoveisListCard key={property.codigo} property={property} />
          ))}
        </S.Content>
      </S.InnerContent>
    </S.Container>
  )
}
export default ImoveisList

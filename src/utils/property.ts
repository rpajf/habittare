import { PropertyType } from '@/models/Property'

export const renderTitle = (property: PropertyType): string => {
  return (property.condominioNome
    ? property.condominioNome
    : property.enderecoLogradouro
    ? property.enderecoLogradouro
    : property.tituloAnuncio
  ).toLowerCase()
}

export const renderTipoContrato = (value): string => {
  switch (value) {
    case 'Compra':
      return 'Venda'
    case 'Locação':
      return 'Locação'
    default:
      return 'Venda'
  }
}

export const renderArea = (property: PropertyType): number => {
  return property.areaTotal
    ? property.areaTotal
    : property.areaPrivativa
    ? property.areaPrivativa
    : property.areaUtil
    ? property.areaUtil
    : ''
}

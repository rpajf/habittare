/* eslint-disable indent */
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

export const renderArea = (property: PropertyType): number | string => {
  return property.areaTotal
    ? property.areaTotal
    : property.areaPrivativa
    ? property.areaPrivativa
    : property.areaUtil
    ? property.areaUtil
    : ''
}

export const renderValor = (property: PropertyType): number | string => {
  switch (property.tipoContrato) {
    case 'Compra':
      return property.valorVendaVisivel
        ? property.valorVenda.toLocaleString('pt-br', {
            minimumFractionDigits: 2
          })
        : ''
    case 'Locação':
      return property.valorLocacaoVisivel
        ? property.valorLocacao.toLocaleString('pt-br', {
            minimumFractionDigits: 2
          })
        : ''
    default:
      return ''
  }
}

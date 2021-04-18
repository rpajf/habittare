import { NextApiRequest } from 'next'

export function _returnStringOfQuery(value: string | Array<string>): string {
  return Array.isArray(value) ? value[0] : value
}

export function _mountQueryNumber(
  value: string
): string | Record<string, unknown> {
  switch (value) {
    case '4':
      return { $gte: 4 }

    default:
      return value
  }
}

export interface FilterType {
  tipo?: string | Record<string, unknown>
  subtipo?: string | Record<string, unknown>
  mobiliado?: string | Record<string, unknown>
  dormitorios?: string | Record<string, unknown>
  suites?: string | Record<string, unknown>
  banheiros?: string | Record<string, unknown>
  garagens?: string | Record<string, unknown>
  enderecoEstado?: string | Record<string, unknown>
  enderecoCidade?: string | Record<string, unknown>
  enderecoBairro?: string | Record<string, unknown>
}

export function _mountFilters(query: NextApiRequest['query']): FilterType {
  const filter: FilterType = {}

  const tipo = _returnStringOfQuery(query.tipo)
  const subtipo = _returnStringOfQuery(query.subtipo)
  const mobiliado = _returnStringOfQuery(query.mobiliado)
  const dormitorios = _returnStringOfQuery(query.dormitorios)
  const suites = _returnStringOfQuery(query.suites)
  const banheiros = _returnStringOfQuery(query.banheiros)
  const garagens = _returnStringOfQuery(query.garagens)
  const estado = _returnStringOfQuery(query.estado)
  const cidade = _returnStringOfQuery(query.cidade)
  const bairro = _returnStringOfQuery(query.bairro)

  if (tipo) filter.tipo = tipo
  if (subtipo) filter.subtipo = subtipo
  if (mobiliado) filter.mobiliado = _mountQueryNumber(mobiliado)
  if (dormitorios) filter.dormitorios = _mountQueryNumber(dormitorios)
  if (suites) filter.suites = _mountQueryNumber(suites)
  if (banheiros) filter.banheiros = _mountQueryNumber(banheiros)
  if (garagens) filter.garagens = _mountQueryNumber(garagens)
  if (estado) filter.enderecoEstado = estado
  if (cidade) filter.enderecoCidade = cidade
  if (bairro) filter.enderecoBairro = bairro

  return filter
}

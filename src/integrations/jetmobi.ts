import {
  jetmobiApiImageType,
  jetmobiPropertyType,
  PropertyImageType,
  PropertyType
} from '../models/Property'

const comodidadesHandler = (value: string): Array<string> => {
  return value.split(',')
}

const imageHandler = (
  value: Array<jetmobiApiImageType>
): Array<PropertyImageType> => {
  return value.map(image => {
    return { link: image.link, linkThumb: image.link_thumb, alt: image.titulo }
  })
}

const _values = [
  { external: 'codigo', internal: 'codigo' },
  { external: 'contrato', internal: 'tipoContato' },
  { external: 'tipo', internal: 'tipo' },
  { external: 'subtipo', internal: 'subtipo' },
  { external: 'observacoes', internal: 'observacoes' },
  { external: 'mobiliado', internal: 'mobiliado' },
  { external: 'dormitorios', internal: 'dormitorios' },
  { external: 'suites', internal: 'suites' },
  { external: 'banheiros', internal: 'banheiros' },
  { external: 'garagens', internal: 'garagens' },
  { external: 'financiavel', internal: 'financiavel' },
  { external: 'area_total', internal: 'areaTotal' },
  { external: 'area_privativa', internal: 'areaPrivativa' },
  { external: 'area_util', internal: 'areaUtil' },
  { external: 'medida', internal: 'medida' },
  { external: 'status', internal: 'status' },
  { external: 'valor_venda_visivel', internal: 'valorVendaVisivel' },
  { external: 'valor_venda', internal: 'valorVenda' },
  { external: 'valor_locacao_visivel', internal: 'valorLocacaoVisivel' },
  { external: 'valor_locacao', internal: 'valorLocacao:' },
  { external: 'valor_temporada_visivel', internal: 'valorTemporadaVisivel' },
  { external: 'valor_temporada', internal: 'valorTemporada' },
  { external: 'valor_condominio_visivel', internal: 'valorCondominioVisivel' },
  { external: 'valor_condominio', internal: 'valorCondominio' },
  { external: 'meta_description', internal: 'metaDescription' },
  { external: 'latitude', internal: 'lat' },
  { external: 'longitude', internal: 'log' },
  { external: 'condominio_nome', internal: 'condominioNome' },
  { external: 'condominio_fechado', internal: 'condominioFechado' },
  { external: 'id_condominio', internal: 'jetimobCondominioId' },
  { external: 'id_imovel', internal: 'jetimobImovelId' },
  { external: 'endereco_complemento_visivel', internal: '' },
  { external: 'endereco_numero_visivel', internal: 'EnderecoNumeroVisivel' },
  {
    external: 'endereco_referencia_visivel',
    internal: 'EnderecoReferenciaVisivel'
  },
  {
    external: 'endereco_logradouro_visivel',
    internal: 'EnderecoLogradouroVisivel'
  },
  { external: 'endereco_bairro_visivel', internal: 'EnderecoBairroVisivel' },
  { external: 'endereco_cidade_visivel', internal: 'EnderecoCidadeVisivel' },
  { external: 'endereco_estado_visivel', internal: 'EnderecoEstadoVisivel' },
  { external: 'endereco_estado', internal: 'enderecoEstado' },
  { external: 'endereco_cidade', internal: 'enderecoCidade' },
  { external: 'endereco_bairro', internal: 'enderecoBairro' },
  { external: 'endereco_logradouro', internal: 'enderecoLogradouro' },
  { external: 'endereco_cep', internal: 'enderecoCep' },
  { external: 'endereco_referencia', internal: 'EnderecoReferencia' },
  { external: 'endereco_numero', internal: 'EnderecoNumero' },
  { external: 'geoposicionamento_visivel', internal: 'geoVisivel' },
  { external: 'titulo_anuncio', internal: 'tituloAnuncio' },
  { external: 'descricao_anuncio', internal: 'descricaoAnuncio' },
  { external: 'tags', internal: 'tags' },
  {
    external: 'condominio_comodidades',
    internal: 'condominioComodidades',
    customHandler: comodidadesHandler
  },
  {
    external: 'imovel_comodidades',
    internal: 'imovelComodidades',
    customHandler: comodidadesHandler
  },
  { external: 'imagens', internal: 'imagens', customHandler: imageHandler }
]

export const mapImoveisJetimobAPIToMongo = (
  jetimobResponse: Array<jetmobiPropertyType>
): Array<PropertyType> => {
  const mapped = jetimobResponse.map(jetimobProperty => {
    const _property: PropertyType = { codigo: '' }

    _values.forEach(i => {
      if (jetimobProperty[i.external]) {
        const value = jetimobProperty[i.external]
        if (i.customHandler) {
          _property[i.internal] = i.customHandler(value)
        } else _property[i.internal] = value
      }
    })
    console.log(_property.enderecoEstado)
    return _property
  })

  return mapped
}

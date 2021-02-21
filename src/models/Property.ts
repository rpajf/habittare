/* eslint-disable camelcase */
import mongoose, { Document, ObjectId } from 'mongoose'
const { Schema } = mongoose

export interface PropertyImageType {
  link: string
  linkThumb: string
  alt: string
}

export interface PropertyType {
  jetimobImovelId?: number
  codigo: string
  tipoContrato?: ObjectId | Record<string, unknown>
  tipo?: ObjectId | Record<string, unknown>
  subtipo?: ObjectId | Record<string, unknown>
  observacoes?: string
  mobiliado?: boolean
  dormitorios?: number
  suites?: number
  banheiros?: number
  garagens?: number
  financiavel?: boolean
  areaTotal?: number
  areaPrivativa?: number
  areaUtil?: number
  medida?: string
  imovelComodidades?: Array<string>
  status?: string
  valorVendaVisivel?: boolean
  valorVenda?: number
  valorLocacaoVisivel?: boolean
  valorLocacao?: number
  valorTemporadaVisivel?: boolean
  valorTemporada?: number
  valorCondominioVisivel?: boolean
  valorCondominio?: number
  lat?: number
  log?: number
  geoVisivel?: boolean
  metaDescription?: string
  condominioNome?: string
  condominioFechado?: boolean
  condominioComodidades?: Array<string>
  jetimobCondominioId?: number
  enderecoEstado?: string
  enderecoCidade?: string
  enderecoBairro?: string
  enderecoLogradouro?: string
  enderecoCep?: string
  EnderecoReferencia?: string
  EnderecoNumero?: string
  EnderecoNumeroVisivel?: boolean
  EnderecoReferenciaVisivel?: boolean
  EnderecoLogradouroVisivel?: boolean
  EnderecoBairroVisivel?: boolean
  EnderecoCidadeVisivel?: boolean
  EnderecoEstadoVisivel?: boolean
  tituloAnuncio?: string
  descricaoAnuncio?: string
  tags?: Array<string>
  imagens?: Array<PropertyImageType>
}

export interface jetmobiApiImageType {
  link: string
  titulo: string
  link_thumb: string
}

export interface jetmobiPropertyType {
  codigo: string
  contrato: string
  tipo: string
  subtipo: string
  observacoes: string
  tipo_construcao: string
  entrega_ano: string
  entrega_mes: string
  mobiliado: boolean
  dormitorios: number
  suites: number
  banheiros: number
  garagens: number
  financiavel: number
  area_total: number
  area_privativa: number
  area_util: number
  medida: string
  tipo_piso: string
  terreno_frente: number
  terreno_fundos: number
  terreno_esquerdo: number
  terreno_direita: number
  terreno_total: number
  status: string
  valor_venda_visivel: boolean
  valor_venda: number
  valor_locacao_visivel: boolean
  valor_locacao: number
  valor_temporada_visivel: boolean
  valor_temporada: number
  valor_condominio_visivel: boolean
  valor_condominio: number
  valor_iptu_visivel: boolean
  valor_iptu: number
  periodicidade_iptu: string
  meta_description: string
  valor_seguro_incendio: number
  valor_taxa_limpeza: number
  posicao: string
  posicao_solar: string
  distancia_mar: number
  permuta: boolean
  latitude: number
  longitude: number
  situacao: string
  destaque: string
  condominio_tipo: string
  condominio_nome: string
  condominio_fechado: boolean
  id_condominio: number
  id_imovel: number
  id_corretor: number
  endereco_complemento_visivel: boolean
  andar_visivel: boolean
  endereco_numero_visivel: boolean
  endereco_referencia_visivel: boolean
  endereco_logradouro_visivel: boolean
  endereco_bairro_visivel: boolean
  endereco_cidade_visivel: boolean
  endereco_estado_visivel: boolean
  endereco_estado: string
  endereco_cidade: string
  endereco_bairro: string
  endereco_logradouro: string
  endereco_cep: string
  endereco_referencia: string
  endereco_numero: string
  andar: number
  endereco_complemento: string
  id_estado: number
  id_cidade: number
  id_bairro: number
  geoposicionamento_visivel: boolean
  titulo_anuncio: string
  descricao_anuncio: string
  tags: string
  condominio_comodidades: string
  imovel_comodidades: string
  videos: Array<string>
  imagens: Array<jetmobiApiImageType>
}

const PropertySchema = new Schema({
  jetimobImovelId: Number,
  codigo: { type: String, required: true, unique: true },
  tipoContrato: String,
  tipo: String,
  subtipo: String,
  observacoes: String,
  mobiliado: Boolean,
  dormitorios: Number,
  suites: Number,
  banheiros: Number,
  garagens: Number,
  financiavel: Boolean,
  areaTotal: Number,
  areaPrivativa: Number,
  areaUtil: Number,
  medida: String,
  imovelComodidades: Array,
  status: String,
  valorVendaVisivel: Boolean,
  valorVenda: Number,
  valorLocacaoVisivel: Boolean,
  valorLocacao: Number,
  valorTemporadaVisivel: Boolean,
  valorTemporada: Number,
  valorCondominioVisivel: Boolean,
  valorCondominio: Number,
  lat: Number,
  log: Number,
  geoVisivel: Boolean,
  metaDescription: String,
  condominioNome: String,
  condominioFechado: Boolean,
  condominioComodidades: Array,
  jetimobCondominioId: Number,
  enderecoEstado: String,
  enderecoCidade: String,
  enderecoBairro: String,
  enderecoLogradouro: String,
  enderecoCep: String,
  EnderecoReferencia: String,
  EnderecoNumero: String,
  EnderecoNumeroVisivel: Boolean,
  EnderecoReferenciaVisivel: Boolean,
  EnderecoLogradouroVisivel: Boolean,
  EnderecoBairroVisivel: Boolean,
  EnderecoCidadeVisivel: Boolean,
  EnderecoEstadoVisivel: Boolean,
  tituloAnuncio: String,
  descricaoAnuncio: String,
  tags: Array,
  imagens: Array
})

const Property =
  mongoose.models.Property ||
  mongoose.model<PropertyType & Document>('Property', PropertySchema)

export default Property

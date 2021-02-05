import Head from 'next/head'
import * as S from '../../styles/comingSoon/styles'

const ComingSoon: React.FC = () => {
  return (
    <>
      <Head>
        <title>Habittare Imobiliária</title>
        <meta
          name="description"
          content="Imóveis Prontos - Casas e Apartamentos em Condomínios"
        />
        <meta
          name="keywords"
          content="imoveis, imovel, imobiliaria, são luis, imobiliarias, casas, aluguel apartamentos, venda apartamento, compra, venda, locacao, habittare, habittareimo, habittare imobiliaria, Aluguel de casas, Venda de casas, Aluguel de apartamentos, Venda de apartamentos, Aluguel de salas comerciais, Venda de salas comerciais, apartamento para alugar em sao luis,"
        />
      </Head>
      <S.Container>
        <S.TextWrapper>
          <S.SmallCap>Nosso site sera lançado</S.SmallCap>
          <S.BigCap>Em breve</S.BigCap>
          <S.SmallCap>Fique ligado!</S.SmallCap>
        </S.TextWrapper>
        <S.SocialsWrapper>
          <S.SocialsLink
            href="https://www.instagram.com/habittare.imob/"
            target="_blank"
          >
            <S.SocialsIcon
              src="/assets/images/instagram-ico.png"
              alt="Instagram"
              width="22"
              height="22"
            />
          </S.SocialsLink>
          <S.SocialsLink href="https://bit.ly/falecomhabittare" target="_blank">
            <S.SocialsIcon
              src="/assets/images/whatsapp-ico.png"
              alt="Whatsapp"
              width="22"
              height="22"
            />
          </S.SocialsLink>
        </S.SocialsWrapper>
      </S.Container>
    </>
  )
}

export default ComingSoon

import * as S from '../../styles/Contato'
import ContactForm from './Form'
import { useRouter } from 'next/router'

const Contato: React.FC = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <S.Container>
      <S.TextWrapper>
        {pid}
        {router.query.slug}
        <S.Title>O que podemos fazer por você?</S.Title>
        <S.SubTitle>Estamos aqui para melhorar sua vida</S.SubTitle>
      </S.TextWrapper>
      <S.Content>
        <S.SideTextWrapper>
          <S.SideTittle>
            Ajudar as pessoas é<br /> nosso principal objetivo
          </S.SideTittle>
          <S.SideContent>
            Ajudar as pessoas é o nosso principal objetivo! Nós da Habittare
            temos o intuito de estar sempre próximos aos nossos clientes. Para
            isso, disponibilizamos vários canais de comunicação para oferecer o
            máximo de agilidade nos atendimentos. Você pode nos solicitar uma
            consultoria, enviar mensagens para o departamento comercial,
            contatar a diretoria, consultar oportunidades de compra e venda,
            aluguéis ou lançamentos imobiliários e até enviar um elogio para
            alguém da nossa equipe.
          </S.SideContent>
        </S.SideTextWrapper>
        <ContactForm />
      </S.Content>
    </S.Container>
  )
}
export default Contato

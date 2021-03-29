import * as S from '@/styles/contato'
import ContactForm from '../../components/ContactForm'

const Contato: React.FC = () => {
  return (
    <S.Container>
      <div className="container">
        <S.TextWrapper>
          <S.Title>O que podemos fazer por você?</S.Title>
          <S.SubTitle>Estamos aqui para melhorar sua vida</S.SubTitle>
        </S.TextWrapper>
      </div>
      <div className="container flex flex-col md:flex-row justify-between mx-auto mb-5">
        <S.SideTextWrapper className="mx-auto">
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
      </div>
    </S.Container>
  )
}
export default Contato

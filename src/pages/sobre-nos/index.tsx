import { useRouter } from 'next/router'

import * as S from '@/styles/sobre'

const AboutUs: React.FC = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <S.Container>
      <S.Content>
        <S.SideContent>
          <S.IconWrapper>
            <S.IconBorder />
            <S.IconBorder />
          </S.IconWrapper>
          <S.IconWrapper>
            <S.IconBorder />

            <S.IconBorder />
          </S.IconWrapper>
        </S.SideContent>
        <S.TextWrapper>
          <S.ItalicText>Um pouco sobre nós </S.ItalicText>
          <S.Title>Habitarre Imobilaria </S.Title>
          {pid}
          {router.query.slug}

          <S.ContentText>
            consectetur adipiscing elit. Etiam scelerisque mi quam, eu vehicula
            ligula condimentum in. Phasellus nec ligula vel orci elementum
            tincidunt. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nulla non iaculis augue, eget
            eleifend lectus. Aenean tristique pharetra sodales. Mauris bibendum
            nulla erat, nec bibendum quam euismod a. Fusce enim quam, pharetra
            non magna faucibus, maximus auctor turpis. Aenean mattis justo ut
            elementum congue. Vivamus quis mollis lorem. Proin quis lorem
            consectetur sem rutrum ornare at in turpis. Nam vitae ex elit.
            Suspendisse aliquet libero a libero congue, tempor tempus lectus
            accumsan. Mauris mattis tellus in venenatis pretium. Fusce lorem
            nulla, ullamcorper a lorem ut, facilisis suscipit massa. Maecenas
            feugiat vehicula ultricies. Aenean luctus non magna ac dignissim.
          </S.ContentText>
        </S.TextWrapper>
      </S.Content>
    </S.Container>
  )
}
export default AboutUs

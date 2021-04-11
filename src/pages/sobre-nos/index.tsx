import { useRouter } from 'next/router'
import PropertyMap from '@/components/PropertyMap'
import { PropertyType } from '@/models/Property'
import AboutUsMap from '@/components/AboutUsMap'

import * as S from '@/styles/sobre'
interface PropertyProps {
  property: PropertyType
}
const AboutUs: React.FC<PropertyProps> = ({ property }) => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <S.Container className="container">
      <S.Content className="flex-col md:flex-row px-5">
        <S.HeadTextWrapper>
          <S.ItalicText>Um pouco sobre nós </S.ItalicText>
          <S.Title>Habitarre Imobilaria </S.Title>
        </S.HeadTextWrapper>
        {pid}
        {router.query.slug}
        <S.ContentText>
          consectetur adipiscing elit. Etiam scelerisque mi quam, eu vehicula
          ligula condimentum in. Phasellus nec ligula vel orci elementum
          tincidunt. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Nulla non iaculis augue, eget eleifend
          lectus. Aenean tristique pharetra sodales. Mauris bibendum nulla erat,
          nec bibendum quam euismod a. Fusce enim quam, pharetra non magna
          faucibus, maximus auctor turpis. Aenean mattis justo ut elementum
          congue. Vivamus quis mollis lorem. Proin quis lorem consectetur sem
          rutrum ornare at in turpis. Nam vitae ex elit. Suspendisse aliquet
          libero a libero congue, tempor tempus lectus accumsan. Mauris mattis
          tellus in venenatis pretium. Fusce lorem nulla, ullamcorper a lorem
          ut, facilisis suscipit massa. Maecenas feugiat vehicula ultricies.
          Aenean luctus non magna ac dignissim.
        </S.ContentText>
        <S.FooterContent>
          <S.HeadText>Nossa localização</S.HeadText>
          <S.FooterSubtitle>São Luís,</S.FooterSubtitle>
          <S.FooterSubtitle> Rua xxxx- cohama</S.FooterSubtitle>
          <S.FooterText>
            consectetur adipiscing elit. Etiam scelerisque mi quam, eu vehicula
            ligula condimentum in. Phasellus nec ligula vel orci elementum
          </S.FooterText>
        </S.FooterContent>
      </S.Content>
      <S.SideContent>
        <div>
          <S.IconWrapper>
            <S.IconBorder />
            <S.IconBorder />
          </S.IconWrapper>
          <S.IconWrapper>
            <S.IconBorder />
            <S.IconBorder />
          </S.IconWrapper>
        </div>
        <S.MapDiv>
          <AboutUsMap lat={-2.518017} long={-44.242063} />
        </S.MapDiv>
      </S.SideContent>
    </S.Container>
  )
}
export default AboutUs

import * as S from './styles'
import img from '../../../public/imgs/home.svg'
const DefaultText: React.FC = () => {
  return (
    <S.Container>
      <S.ImageHead>{/* <img src={img} /> */}</S.ImageHead>
      <S.HeadText>Encontre sua casa</S.HeadText>
      <S.SubtitleText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, earum!
      </S.SubtitleText>
    </S.Container>
  )
}
export default DefaultText
export {}

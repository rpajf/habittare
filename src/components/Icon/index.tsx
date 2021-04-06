export enum IconNames {
  Bed = 'bed',
  Baths = 'baths',
  Measure = 'measure',
  Pin = 'pin',
  Money = 'money',
  Garage = 'garage'
}

interface IconProps {
  name: IconNames
  size: number
  color: string
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  return (
    <svg width={size} height={size} color={color}>
      <use
        width={size}
        height={size}
        xlinkHref={`/assets/icons/${name}.svg#img`}
      ></use>
    </svg>
  )
}

export default Icon

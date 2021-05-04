import { FC } from 'react'

type Props = {
  x: number
  y: number
  radius: number
  fill: string
}

const Circle: FC<Props> = ({ x, y, radius, fill }) => (
  <svg height="100" width="100">
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
)

export default Circle
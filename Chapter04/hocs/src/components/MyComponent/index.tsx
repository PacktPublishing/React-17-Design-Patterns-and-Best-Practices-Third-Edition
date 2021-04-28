import { FC } from 'react'
import withInnerWidth from './WithInnerWidth'

type Props = {
  innerWidth: number
}

const MyComponent: FC<Props> = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>


export default withInnerWidth(MyComponent)
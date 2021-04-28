// Dependencies
import { render } from 'react-dom'
import styles from './index.css'

// Components
const Button = () => <button className={styles.button}>Click me!</button>

render(<Button />, document.querySelector('#root'))
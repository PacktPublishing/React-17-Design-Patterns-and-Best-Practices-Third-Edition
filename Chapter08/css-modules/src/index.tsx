// Dependencies
import { render } from 'react-dom'
import cssModules from 'react-css-modules'
import styles from './index.css'

// Components
// onst Button = () => <button className={styles.button}>Click me!</button> // This is for css modules
const Button = () => <button styleName="button">Click me!</button> // This is for React CSS modules

const EnhancedButton = cssModules(Button, styles)

// render(<Button />, document.querySelector('#root')) // This is for css modules
render(<EnhancedButton />, document.querySelector('#root')) // This is for React CSS modules
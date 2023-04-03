import styles from './index.module.css'
import {Link} from 'react-router-dom'

const ButtonLink = ({
  text = 'Button Link',
  to = '/',
  width = 'fit-content',
  children
}) => {
  return (
    <Link style={{ width: width }} className={styles.btn__link} to={to}>
      {text}
    {children}
    </Link>
  )
}

export default ButtonLink

import styles from './index.module.css'
import {Link} from 'react-router-dom'

const ButtonLink = ({
  text = 'Button Link',
  to = '/',
  width = 'fit-content',
}) => {
  return (
    <Link style={{ width: width }} className={styles.btn__link} to={to}>
      {text}
    </Link>
  )
}

export default ButtonLink

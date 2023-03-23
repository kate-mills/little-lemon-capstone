import React from 'react'

import styles from './index.module.css'

const ButtonLink = ({
  text = 'Button Link',
  href = '/',
  width = 'fit-content',
}) => {
  return (
    <a style={{ width: width }} className={styles.btn__link} href={href}>
      {text}
    </a>
  )
}

export default ButtonLink

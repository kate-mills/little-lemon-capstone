import React from 'react'

import styles from '../assets/css/menuitem.module.css'

import grilledfish from '../assets/grilled-fish.png'
import ArrowRight from './ArrowRight'

const MenuItem = ({
  image = grilledfish,
  imageAlt = '',
  title = 'Greek Salad',
  price = '1.99',
  description = 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
}) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItem__bg}>
        <div className={styles.menuItem__Image}>
          {!!(image.length > 0) ? (
            <div className={styles.menuItem__Image__bg}>
              <img
                src={image}
                alt={imageAlt}
                className={styles.menuItem__Image__img}
              />
            </div>
          ) : (
            <DefaultMenuImg />
          )}
        </div>

        <div className={styles.menuItem__Details}>
          <div className={styles.menuItem__Details__Header}>
            <p className={styles.menuItem__Details__Header__title}>{title}</p>
            <p className={styles.menuItem__Details__Header__price}>${price}</p>
          </div>
          <div className={styles.menuItem__Details__description}>
            {description}
          </div>

          <div className={styles.menuItem__Details__Footer}>
            <div className={styles.menuItem__Details__Footer__order_a_delivery}>
              Order a delivery{' '}
            </div>
            <div className={styles.menuItem__Details__Footer__arrow}>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DefaultMenuImg = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="261"
      height="170"
      viewBox="0 0 261 170"
      fill="none"
    >
      {' '}
      <g clip-path="url(#clip0_103_238)">
        {' '}
        <path
          d="M260 0.714294H0V169.535H260V0.714294Z"
          fill="black"
          fill-opacity="0.67"
        />{' '}
        <path
          d="M1.30005 167.526L258.7 2.72388M1.30005 2.7239L260 169.536"
          stroke="black"
          stroke-opacity="0.67"
          stroke-width="1.035"
        />{' '}
      </g>{' '}
      <defs>
        {' '}
        <clipPath id="clip0_103_238">
          {' '}
          <rect width="261" height="170" fill="white" />{' '}
        </clipPath>{' '}
      </defs>{' '}
    </svg>
  )
}

export default MenuItem

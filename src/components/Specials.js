import * as React from 'react'
import MenuItem from './MenuItem'
import ButtonLink from './ButtonLink'

import styles from '../assets/css/specials.module.css'

import grilledfish from '../assets/grilled-fish.png'
import greekSalad from '../assets/greek-salad.png'

const menu_items = [
  {
    image: grilledfish,
    imageAlt: '',
    title: 'Grilled Fish',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    image: greekSalad,
    imageAlt: '',
    title: 'Greek Salad',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    image: grilledfish,
    imageAlt: '',
    title: 'Grilled Fish',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
]

const Specials = () => {
  return (
    <article id={styles.special}>
      <div className={styles.special_div}>
        <div className={styles.special__header}>
          <h2>This weeks specials!</h2>
          <ButtonLink href={'/menu'} text={'Online Menu'} />
        </div>

        <div className={styles.menu_items}>
          {menu_items.map(item => {
            return <MenuItem key={item.title} {...item} />
          })}
        </div>
      </div>
    </article>
  )
}
export default Specials

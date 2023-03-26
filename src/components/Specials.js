import ButtonLink from './ButtonLink'
import MenuItem from './MenuItem'
import Block from './Block'

import styles from '../assets/css/specials.module.css'

const Specials = ({ bg = 'var(--clr-highlight-2)', menu_items = [] }) => {
  return (
    <Block bgColor={bg}>
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
    </Block>
  )
}

export default Specials

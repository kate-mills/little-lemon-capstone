import ButtonLink from '../ButtonLink'
import MenuItem from './MenuItem'
import Block from '../Block'

import styles from './index.module.css'

const WeeklySpecials = ({ bg = 'var(--clr-highlight-2)', menu_items = [] }) => {
  return (
    <Block bgColor={bg}>
      <article id={styles.weekly_specials}>
        <div>

          <div className={styles.weekly_specials_header}>
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

export default WeeklySpecials


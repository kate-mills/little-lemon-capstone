import ButtonLink from '../ButtonLink'
import MenuItem from './MenuItem'
import Block from '../Block'

import styles from './index.module.css'

const WeeklySpecials = ({ bgColor = 'var(--clr-highlight)', menu_items = [] }) => {
  return (
    <Block bgColor={bgColor}>
      <article id={styles.weekly_specials}>
        <div>

          <div className={styles.weekly_specials_header}>
            <h2>This weeks specials!</h2>
            <ButtonLink to={'/menu'} text={'Online Menu'} />
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


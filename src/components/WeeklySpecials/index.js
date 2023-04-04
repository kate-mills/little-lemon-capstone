import ButtonLink from '../ButtonLink'
import MenuItem from './MenuItem'
import Block from '../Block'

import styles from './index.module.css'

const WeeklySpecials = ({
  bgColor = 'var(--clr-highlight)',
  menu_items = [],
  showMenu = false,
}) => {
  let title = `This weeks ${showMenu ? 'Menu' : 'Specials'}!`

  return (
    <Block bgColor={bgColor}>
      <article id={styles.weekly_specials}>
        <div>
          <div className={styles.weekly_specials_header}>
            <h2>{title}</h2>
            {!showMenu ? (
              <ButtonLink to={'/menu'} text={'Online Menu'} />
            ) : (
              <ButtonLink to={'/booking'} text={'Book A Table'} />
            )}
          </div>
          <section className={styles.menu_items}>
            {menu_items.map(item => {
              return <MenuItem key={item.title} {...item} />
            })}
          </section>
        </div>
      </article>
    </Block>
  )
}

export default WeeklySpecials

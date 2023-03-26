import ArrowRight from './ArrowRight'
import styles from '../assets/css/menuitem.module.css'

const MenuItem = ({
  image = '',
  imageAlt = '',
  title = '',
  price = '',
  description = '',
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
            null
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
export default MenuItem

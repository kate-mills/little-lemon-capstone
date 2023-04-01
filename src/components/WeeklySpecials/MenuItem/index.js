import styles from './index.module.css'

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
          ) : null}
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
              Order a delivery
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

const ArrowRight = () => {
  return (
    <svg
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.3536 4.24641C19.5488 4.05114 19.5488 3.73456 19.3536 3.5393L16.1716 0.357319C15.9763 0.162057 15.6597 0.162057 15.4645 0.357319C15.2692 0.552581 15.2692 0.869164 15.4645 1.06443L18.2929 3.89285L15.4645 6.72128C15.2692 6.91654 15.2692 7.23312 15.4645 7.42839C15.6597 7.62365 15.9763 7.62365 16.1716 7.42839L19.3536 4.24641ZM0 4.39285H19V3.39285H0V4.39285Z"
        fill="black"
      />
    </svg>
  )
}

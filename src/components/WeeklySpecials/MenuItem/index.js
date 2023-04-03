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
      <div className={styles.menuItem_bg}>
        <div>
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className={styles.menuItem_image_img}
            />
          ): <div className={styles.menuItem_image_none}>
           <p><span>Photo Coming Soon!</span></p>
            </div>
          }
        </div>
        <div className={styles.menuItem_details}>
          <div className={styles.menuItem_details_header}>
            <h5>{title}</h5>
            <p className="txt-highlight">${price}</p>
          </div>
          <div className={styles.menuItem_details_description}>
            {description}
          </div>
          <div className={styles.menuItem_details_footer}>
            <p>Order a delivery</p>
            <div className={styles.menuItem_details_footer_arrow}>
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

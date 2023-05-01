import styles from './index.module.css'

const MenuItem = ({
  image = '',
  imageAlt = '',
  title = '',
  price = '',
  blurb = '',
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
          ) : (
            <div className={styles.menuItem_image_none}>
              <p>
                <span>Photo Coming Soon!</span>
              </p>
            </div>
          )}
        </div>
        <div className={styles.menuItem_details}>
          <div className={styles.menuItem_details_header}>
            <h5>{title}</h5>
            <p className="highlight">${price}</p>
          </div>
          <div className={styles.menuItem_details_description}>
            <p>{blurb}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItem

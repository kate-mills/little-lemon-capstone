import styles from './index.module.css'
import Stars from '../Stars'

const Testimonial = ({
  rating = 5,
  image = '',
  imageAlt = '',
  name = 'Kate',
  review = 'Rave Review Rave Review Rave Review Rave Review',
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.rating}><Stars rating={rating}/> </div>

      <div className={styles.customer}>
        <img className={styles.customer_img} src={image} alt={imageAlt} />
        <p className={styles.customer_name}>{name}</p>
      </div>
      <div className={styles.customer_review}>
        <p>{review}</p>
      </div>
    </div>
  )
}

export default Testimonial


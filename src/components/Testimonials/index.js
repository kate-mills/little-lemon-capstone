import Testimonial from './Testimonial'

import Block from '../Block'
import styles from './index.module.css'
import reviews from '../../constants/customer-reviews'

const Testimonials = ({ bgColor = '#f8f2ec' }) => {
  return (
    <Block bgColor={bgColor}>
      <article id={styles.testimonials}>
        <div className={styles.testimonials__header}>
          <h2 className={styles.subtitle}>What our customers say!</h2>
        </div>
        <div className={styles.testimonial__list}>
          {reviews.map(review => {
            return <Testimonial key={review.id} {...review} />
          })}
        </div>
      </article>
    </Block>
  )
}
export default Testimonials

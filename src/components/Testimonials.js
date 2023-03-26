import Block from './Block'
import styles from '../assets/css/testimonials.module.css'

const Testimonials = () => {
  return (
    <Block bgColor="#f8f2ec">
      <article id={styles.testimonials}>
        <div className={styles.testimonials__header}>
          <h2 className={styles.subtitle}>What our customers say!</h2>
        </div>
        <div className={styles.testimonial__list}>
          <div className={styles.testimonial}>testimonial</div>
          <div className={styles.testimonial}>testimonial</div>
          <div className={styles.testimonial}>testimonial</div>
          <div className={styles.testimonial}>testimonial</div>
        </div>
      </article>
    </Block>
  )
}
export default Testimonials

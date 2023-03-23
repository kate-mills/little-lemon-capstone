import * as React from 'react'
import styles from '../assets/css/testimonials.module.css'


const Testimonials = () => {
  return (
    <>
      <article id={styles.testimonials}>
        <h2 className={styles.subtitle}>What our customers say!</h2>
      </article>

        <div className={styles.gridAdjustableColumns}>
          <div>g1</div>
          <div>g1</div>
          <div>g1</div>
          <div>g1</div>
          <div>g1</div>
          <div>g1</div>
        </div>
    </>
  )
}
export default Testimonials

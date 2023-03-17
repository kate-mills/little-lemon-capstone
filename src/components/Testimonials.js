import * as React from 'react'
import styles from '../assets/css/testimonials.module.css'

const Testimonials = () => {
  return (
    <>
      <article id={styles.testimonials}>
        <h1>Testimonials</h1>
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

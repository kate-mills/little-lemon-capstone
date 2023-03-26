import styles from '../assets/css/about.module.css'
import HeroTitle from './HeroTitle'

import BlockBg from './BlockBg'
import brothers from '../assets/brothers.png'

const About = () => {
  return (
    <BlockBg bgColor="#36433E">
      <article id={styles.about}>
        <div className={styles.text_box}>
          <HeroTitle />
          <p className={styles.paragraph_text}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className={styles.image_box}>
          <img src={brothers} alt="Photos of Adrian & Mario" />
        </div>
      </article>
    </BlockBg>
  )
}
export default About

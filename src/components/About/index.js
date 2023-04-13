import LittleLemonChicago from '../LittleLemonChicago'
import Block from '../Block'
import brothers from '../../assets/about-chefs-mario-and-adrian.png'
import styles from './index.module.css'

const About = ({ bgColor = '#36433E' }) => {
  return (
    <Block bgColor={bgColor}>
      <article id={styles.about}>
        <div className={styles.text_box}>
          <LittleLemonChicago />
          <p className={styles.paragraph_text}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className={styles.image_box}>
          <img src={brothers} alt="Photos of Adrian & Mario" />
        </div>
      </article>
    </Block>
  )
}
export default About

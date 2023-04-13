import styles from './index.module.css'

const Block = ({ bgColor = 'var(--gray)', style = {}, children }) => {
  return (
    <section style={{ background: bgColor, ...style }} className={styles.block_bg}>
      <div className={styles.block}>{children}</div>
    </section>
  )
}

export default Block

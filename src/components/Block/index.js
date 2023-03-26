import styles from './index.module.css'

const Block = ({ bgColor = 'var(--gray)', style={}, children }) => {
  return (
    <div  style={{ background: bgColor, ...style }} className={styles.block_bg}>
      <div className={styles.block}>{children}</div>
    </div>
  )
}

export default Block

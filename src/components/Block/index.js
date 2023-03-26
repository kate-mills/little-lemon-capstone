import styles from './index.module.css'

const Block = ({ bgColor = 'var(--gray)', style={}, children }) => {
  return (
    <div className={styles.block_bg} style={{ background: bgColor, ...style }}>
      <div className={styles.block}>{children}</div>
    </div>
  )
}

export default Block

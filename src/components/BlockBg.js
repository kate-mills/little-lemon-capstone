const BlockBg = ({ bgColor = 'var(--gray)', style={}, children }) => {
  return (
    <div className="block-bg" style={{ background: bgColor, ...style }}>
      <div className="block">{children}</div>
    </div>
  )
}

export default BlockBg

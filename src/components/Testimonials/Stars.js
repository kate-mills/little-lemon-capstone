const COLOR = '#EE9972' /* secondary color 2 */

const Stars = ({ rating = 5 }) => {
  const starArray = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {rating >= index + 1 ? <Star /> : <Star fill="none" />}
      </span>
    )
  })
  return <div className="stars">{starArray}</div>
}
export default Stars

const Star = ({ fill = COLOR }) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 15.698L10.9189 11.0845L11.0362 10.8025L11.3406 10.7781L16.3213 10.3788L12.5265 7.12821L12.2946 6.92953L12.3654 6.63247L13.5248 1.77217L9.26063 4.3767L9 4.53589L8.73937 4.3767L4.47522 1.77217L5.63458 6.63247L5.70544 6.92953L5.4735 7.12821L1.67875 10.3788L6.65943 10.7781L6.96385 10.8025L7.08113 11.0845L9 15.698Z"
        fill={fill}
        stroke={COLOR}
      />
    </svg>
  )
}

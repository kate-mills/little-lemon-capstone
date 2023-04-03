import Block from '../components/Block'
import ButtonLink from '../components/ButtonLink'

const ErrorPage = () => {
  return (
    <Block bgColor="var(--clr-highlight)">
      <div>
        <h1>Oops!</h1>
        <h4>We couldn't find the page you're looking for.</h4>
      </div>
      <br />
      <div>
        <ButtonLink to="/" text="Back Home" />
      </div>
    </Block>
  )
}

export default ErrorPage

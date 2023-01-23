import * as React from 'react'
import heroimg from '../assets/hero-title.svg'
const Main = () => {
  return (

    <main>
      <article>
    <img src={heroimg} width="302" alt=""/>
      <button className="btn-hero">Reserve a Table</button>

    </article>
      <article>Specials Article</article>
      <article>Testimonials Article</article>
      <article>About Article</article>
    </main>
  )
}
export default Main

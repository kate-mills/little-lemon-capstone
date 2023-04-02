import greekSalad from '../assets/menu-item-greek-salad.jpg'
import bruschetta from '../assets/menu-item-bruschetta.jpg'
import lemonCake from '../assets/menu-item-lemon-cake.jpg'

const menu_items = [
  {
    image: greekSalad,
    imageAlt: 'Greek Salad',
    title: 'Greek Salad',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    image: bruschetta,
    imageAlt: 'Bruschetta',
    title: 'Bruschetta',
    price: '12.99',
    description:
      'Freshly baked Italian bread doused in our signature olive oil and served with garlic and tomatoes.',
  },
  {
    image: lemonCake,
    imageAlt: 'Lemon Cake',
    title: 'Lemon Cake',
    price: '12.99',
    description:
      'Light, fluffy, and deliciously tangy. With four layers of the cake coated in a rich lemon-flavored cream cheese frosting, this dessert has no shortage of bright lemon flavor.',
  },
]

export default menu_items

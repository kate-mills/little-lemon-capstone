import specials from './weekly-specials'

import steamedMussels from '../assets/menu-items/steamed-mussels.jpg'
import salmon from '../assets/menu-items/grilled-salmon.jpg'
import lemonCake from '../assets/menu-items/lemon-cake.jpg'

const menu_items = [
  {
    image: steamedMussels,
    imageAlt: 'Steamed Mussels',
    title: 'Steamed Mussels',
    price: '14.50',
    blurb: 'Steamed to perfection in a fragrant broth of white wine, garlic, fresh herbs, and diced tomatoes, served with a side of crusty bread for soaking up every last drop of the flavorful broth. Sourced fresh daily!',

    description:
      'Our plump and juicy mussels are steamed to perfection in a fragrant broth of white wine, garlic, fresh herbs, and diced tomatoes, served with a side of crusty bread for soaking up every last drop of the flavorful broth. Our mussels are sourced fresh daily and pair perfectly with a crisp, refreshing glass of white wine. Enjoy the taste of the Mediterranean with every bite of our steamed mussels dish.Our plump and juicy mussels are steamed to perfection in a fragrant broth of white wine, garlic, fresh herbs, and diced tomatoes. Served with a side of crusty bread for soaking up every last drop of the flavorful broth, this dish is both satisfying and delicious. Our mussels are sourced fresh daily and pair perfectly with a crisp, refreshing glass of white wine. Enjoy the taste of the Mediterranean with every bite of our steamed mussels dish.',
  },
  {
    image: salmon,
    imageAlt: 'Grilled Salmon',
    title: 'Salmon',
    price: '14.50',
    blurb: 'Our fresh, sustainably sourced salmon fillet is marinated in lemon juice, olive oil, garlic, and Mediterranean herbs, then expertly grilled to perfection. Served atop a bed of fluffy couscous and a colorful array of roasted vegetables. A true feast for the senses.',

    description: 'Our fresh, sustainably sourced salmon fillet is marinated in lemon juice, olive oil, garlic, and Mediterranean herbs, then expertly grilled to juicy perfection. Served atop a bed of fluffy couscous and paired with a colorful array of roasted vegetables, including bell peppers, cherry tomatoes, and zucchini, this dish is a true feast for the senses. Topped with a drizzle of tangy tzatziki sauce and a sprinkle of crumbled feta cheese. It will transport you straight to the sun-drenched shores of the Mediterranean.',
  },
  {
    image: lemonCake,
    imageAlt: 'Lemon Cake',
    title: 'Lemon Cake',
    price: '6.00',
    blurb: 'Light, fluffy, and deliciously tangy. With four layers of the cake coated in a rich lemon-flavored cream cheese frosting, this dessert has no shortage of bright lemon flavor.',
    description: '',
  },
  ...specials,
]

export default menu_items

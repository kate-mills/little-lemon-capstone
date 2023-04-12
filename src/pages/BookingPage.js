import Bookings from '../components/Bookings'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

import { Navigate } from "react-router-dom";
import { useBookingContext } from '../context/book-a-table'

const BookingPage = () => {
  const {
    response: { type },
  } = useBookingContext()

  return (
    <>
      { type === 'success' && (
        <Navigate to="/booking-confirmed" />
      )}
      <Bookings />
      <Testimonials />
      <About />
    </>
  )
}

export default BookingPage

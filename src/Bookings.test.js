import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { BookingProvider } from './context/book-a-table'
import { BookingPage, ConfirmedBookingPage } from './pages/index.js'
import BookingsForm from './components/Bookings/Form.js'
import BookingsConfirmed from './components/Bookings/Confirmed.js'
import { initDateTimes } from './utils/get-reservation-dates.js'
import { fetchAPI } from './api'

test('Static text book a table being rendered in the Bookings component', () => {
  render(
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  )

  const titleElement = screen.getByText(/book a table/i)
  expect(titleElement).toBeDefined()
})

test('BookingsForm component can be submitted by the user', async () => {
  let availableTimes = fetchAPI(new Date(initDateTimes.start.iso))

  const handleSubmit = await jest.fn()

  render(
    <BookingProvider>
      <BookingsForm onSubmit={handleSubmit} />
      <ConfirmedBookingPage />
    </BookingProvider>
  )
  const submitButton = screen.getByRole('button')

  const dateInput = screen.getByLabelText(/Select Date/i)
  const timeInput = screen.getByLabelText(/Select Time/i)
  const guestInput = screen.getByLabelText(/Number Of Guests/i)
  const occasionInput = screen.getByLabelText(/Occasion/i)

  expect(submitButton).toHaveAttribute('disabled')

  await act(async () => {
    fireEvent.change(dateInput, { target: { value: initDateTimes.start.iso } })
    fireEvent.change(timeInput, { target: { value: availableTimes[0] } })
    fireEvent.change(guestInput, { target: { value: 3 } })
    fireEvent.change(occasionInput, { target: { value: 'No Occasion' } })
  })

  expect(submitButton).not.toHaveAttribute('disabled')
  expect(handleSubmit).not.toHaveBeenCalled()

  await act(async () => {
    fireEvent.submit(submitButton)
  })

  // redirects to confirmed booking page
  const confirmedHeading = screen.getByText(/Your Booked on/i)
  expect(confirmedHeading).toBeDefined()
})

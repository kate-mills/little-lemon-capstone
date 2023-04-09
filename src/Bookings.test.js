import { render, fireEvent, screen } from "@testing-library/react";

import { BookingProvider } from './context/book-a-table'
import {BookingPage} from './pages/index.js'
import BookingForm from "./components/Bookings/Form.js";
import {endDate} from './utils/get-reservation-dates.js'
import {fetchAPI} from './api'



test('Static text book a table being rendered in the Bookings component', () => {
  render(
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  );

  const titleElement = screen.getByText(/book a table/i);
  expect(titleElement).toBeDefined();
});


test('BookingsForm component can be submitted by the user', () => {

  const [time] = fetchAPI(new Date(endDate))
  const handleSubmit = jest.fn();

  render(
    <BookingProvider>
      <BookingForm onSubmit={handleSubmit} />
    </BookingProvider>
  );
  const submitButton = screen.getByRole("button")


  const dateInput = screen.getByLabelText(/Select Date/i)
  const timeInput = screen.getByLabelText(/Select Time/i)
  const guestInput = screen.getByLabelText(/Number Of Guests/i)

  expect(submitButton).toHaveAttribute("disabled")

  fireEvent.change(timeInput, {target: {value: time}})
  fireEvent.change(dateInput, {target: {value: endDate}})
  fireEvent.change(guestInput, {target: {value: 3}})

  expect(submitButton).not.toHaveAttribute("disabled")
  expect(handleSubmit).not.toHaveBeenCalled()
  fireEvent.submit(submitButton)
});


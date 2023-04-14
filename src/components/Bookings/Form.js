import { useEffect } from 'react'

import * as Yup from 'yup'
import { useBookingContext } from '../../context/book-a-table'
import { useFormik } from 'formik'

const BookingForm = props => {
  const {
    formData: { resDate, resTime, guests, occasion },
    fetchTimesWithDate,
    resetBookingForm,
    availableTimes,
    initDateTimes: { start, end },
    submitForm,
  } = useBookingContext()

  const formik = useFormik({
    initialValues: {
      resDate: resDate,
      resTime: resTime,
      guests: guests,
      occasion: occasion,
    },
    onSubmit: async (values, { setSubmitting }) => {
      await submitForm(values)
      resetBookingForm()
    },
    validationSchema: Yup.object().shape({
      resDate: Yup.date()
        .default(start.display)
        .min(start.display, `Not booking before ${start.display}`)
        .max(end.display, `Not booking after ${end.display}`)
        .required('Date is required'),
      resTime: Yup.string()
        .oneOf([...availableTimes], 'Invalid Booking Time')
        .required('Time is required'),
      guests: Yup.number()
        .min(1, `Number must be at least 1`)
        .max(10, `Number can not exceed 10`)
        .required('Number is required'),
      occasion: Yup.string()
        .oneOf(
          ['No Occasion', 'Anniversary', 'Birthday', 'Engagement'],
          'Invalid Selection'
        )
        .required('Occasion is required'),
    }),
  })

  useEffect(() => {
    fetchTimesWithDate(formik.values.resDate)
    // eslint-disable-next-line
  }, [formik.values.resDate])

  const isDisabled =
    !formik.values.resDate ||
    !formik.values.resTime ||
    !formik.values.guests ||
    !formik.values.occasion

  return (
    <>
      <form
        id="bookings"
        className="form on-dark"
        onSubmit={formik.handleSubmit}
      >
        {/* Booking Date */}
        <div className="form-control">
          <label
            data-required
            htmlFor="resDate"
            className="bold-title"
            data-invalid={!formik.values.resDate || formik.errors.resDate}
          >
            Select Date
          </label>
          <input
            id="resDate"
            name="resDate"
            type="date"
            min={start.display}
            max={end.display}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.resDate}
          />
          <div className="error">
            {!!formik.values.resDate && formik.errors.resDate
              ? formik.errors.resDate
              : formik.errors.resDate}
          </div>
        </div>

        {/* Booking Time */}
        <div className="form-control">
          <label
            data-required
            htmlFor="resTime"
            className="bold-title"
            data-invalid={!formik.values.resTime || formik.errors.resTime}
          >
            Select Time
          </label>
          <select
            data-invalid={!formik.values.resTime || formik.errors.resTime}
            id="resTime"
            name="resTime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.resTime}
          >
            <option disabled hidden value=""></option>
            {availableTimes.map(time => {
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              )
            })}
          </select>
          <div className="error">
            {formik.touched.resTime &&
              formik.errors.resTime &&
              formik.errors.resTime}
          </div>
        </div>

        {/* Number Of  Guests */}
        <div className="form-control">
          <label
            data-required
            data-invalid={!formik.values.guests || formik.errors.guests}
            htmlFor="guests"
            className="bold-title"
          >
            Number of guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={10}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guests}
          />
          <div className="error">
            {(!!String(formik.values.guests) && formik.errors.guests) ||
            (formik.touched.guests && formik.errors.guests)
              ? formik.errors.guests
              : null}
          </div>
        </div>

        {/* Booking Occasion */}
        <div className="form-control">
          <label
            data-required
            htmlFor="occasion"
            className="bold-title"
            data-invalid={!formik.values.occasion || formik.errors.occasion}
          >
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occasion}
          >
            <option disabled hidden value=""></option>
            <option value="No Occasion">No Occasion</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
          </select>
          <div className="error">
            {formik.touched.occasion && formik.errors.occasion
              ? formik.errors.occasion
              : null}
          </div>
        </div>

        {/* Submit Form*/}
        <div tabIndex={0} className="form-control submit">
          <div className="no-label"/>
            <input
              aria-label="On Click"
              type="submit"
              value={'Book Table'}
              aria-disabled={isDisabled || !formik.isValid}
              disabled={isDisabled || !formik.isValid}
            />
        </div>
      </form>
    </>
  )
}

export default BookingForm

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
    startDate,
    endDate,
    submitForm,
  } = useBookingContext()

  const formik = useFormik({
    initialValues: {
      resDate: resDate,
      resTime: resTime,
      guests: guests,
      occasion: occasion,
    },
    onSubmit: async (values, {setSubmitting}) => {
      await submitForm(values)
      resetBookingForm();
    },
    validationSchema: Yup.object().shape({
      resDate: Yup.date()
        .default(resDate)
        .min(startDate, `Date can not be before ${startDate}`)
        .max(endDate, `Date can not be after ${endDate}`)
        .required('Required'),
      resTime: Yup.string()
        .oneOf( [...availableTimes], "Invalid Booking Time")
        .required('Required'),
      guests: Yup.number()
        .min(1, `Number of guests must be at least 1`)
        .max(10, `Number of guests can't be above 10`)
        .required('Required'),
      occasion: Yup.string()
        .oneOf(
          ["No Occasion", "Anniversary", "Birthday", "Engagement"], "Invalid Selection"
        ).required('Required'),
    }),
  })

  useEffect(() => {
    fetchTimesWithDate(formik.values.resDate)
    // eslint-disable-next-line
  }, [formik.values.resDate])


  const isDisabled =
    !formik.values.resDate || !formik.values.resTime || !formik.values.guests || !formik.values.occasion

  return (
    <>
    <form id="bookings" className="form on-dark" onSubmit={formik.handleSubmit}>
      {/* Booking Date */}
      <label data-required htmlFor="resDate" className="bold-title">
        Select Date
      </label>
      <input
        id="resDate"
        name="resDate"
        type="date"
        min={startDate}
        max={endDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.resDate}
      />
      {formik.values.resDate && formik.errors.resDate ? (
        <div style={{ color: 'var(--clr-secondary-1)' }}>
          {formik.errors.resDate}
        </div>
      ) : null}
      {/* Booking Time */}
      <label data-required htmlFor="resTime" className="bold-title">
        Select Time
      </label>
      <select
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
      <div style={{ color: 'var(--clr-secondary-1)' }}>
        {(formik.touched.resTime && formik.errors.resTime) && ( formik.errors.resTime)}
      </div>

      {/* Number Of  Guests */}
      <label data-required htmlFor="guests" className="bold-title">
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
      <div style={{ color: 'var(--clr-secondary-1)' }}>
        {!!formik.values.guests && formik.errors.guests ?  formik.errors.guests : null}
      </div>

      {/* Booking Occasion */}
      <label data-required htmlFor="occasion" className="bold-title">
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
      <div style={{ color: 'var(--clr-secondary-1)' }}>
        {formik.touched.occasion && formik.errors.occasion ? formik.errors.occasion: null}
      </div>

      {/* Submit Form*/}
      <div>
        <input type="submit" value={'Book Table'} disabled={isDisabled || !formik.isValid} />
      </div>
    </form>
    </>
  )
}

export default BookingForm

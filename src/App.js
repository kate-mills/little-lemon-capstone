import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import {
  HomePage,
  AboutPage,
  MenuPage,
  BookingPage,
  ConfirmedBookingPage,
  OrderOnlinePage,
  LoginPage,
  ErrorPage,
} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/booking" element={<BookingPage />} ></Route>
          <Route path="/booking-confirmed" element={<ConfirmedBookingPage />} ></Route>
          <Route path="/order-online" element={<OrderOnlinePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

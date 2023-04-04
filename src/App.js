import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import {
  HomePage,
  AboutPage,
  MenuPage,
  BookingPage,
  OrderOnlinePage,
  LoginPage,
  ErrorPage,
} from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/order-online" element={<OrderOnlinePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ReservationsPage, HomePage } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations" element={<ReservationsPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App

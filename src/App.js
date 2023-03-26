import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import { ReservationsPage, HomePage } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reservations" element={<ReservationsPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

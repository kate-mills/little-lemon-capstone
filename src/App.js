import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ReservationsPage, HomePage } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="block-bg" style={{background: 'var(--white)'}}>
        <div className="block">
          <Header />
        </div>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reservations" element={<ReservationsPage />}></Route>
        </Routes>

      <div className="block-bg" style={{background: 'var(--gray)'}}>
        <div className="block">
        <Footer />
    </div></div>
      </main>
    </>
  )
}

export default App

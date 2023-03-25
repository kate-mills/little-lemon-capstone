import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BlockBg from './components/BlockBg'

import { ReservationsPage, HomePage } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BlockBg bgColor={'var(--white)'}>
          <Header />
      </BlockBg>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reservations" element={<ReservationsPage />}></Route>
        </Routes>
      </main>

    <BlockBg bgColor={'var(--gray)'}>
          <Footer />
    </BlockBg>
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import MainContent from './components/MainContent'
import Forecast from './components/Forecast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <CustomNavbar />
        </header>
        <main className='minHeight'>
          <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/forecast/:city' element={<Forecast />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className='App'>
      <header>
        <CustomNavbar />
      </header>
      <main className='minHeight'>
        <MainContent />
      </main>
      <footer></footer>
    </div>
  )
}

export default App

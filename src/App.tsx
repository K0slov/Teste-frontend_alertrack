import Footer from './components/footer'
import Header from './components/header'
import Statics from './pages/Statics'
import './styles/global.css'

function App() {
  return (
      <div className='flex flex-col items-center'>
        <Header />
        <Statics />
        <Footer />
      </div>
  )
}

export default App

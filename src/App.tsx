import Header from './components/header'
import Statics from './pages/Statics'
import './styles/global.css'

function App() {
  return (
      <div className='flex flex-col items-center p-0 m-0'>
        <Header />
        <Statics />
      </div>
  )
}

export default App

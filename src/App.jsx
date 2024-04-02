import Calculadora from './Calculadora'
import Clock from './Clock'

function App() {

  return (
    // <h1>Our first test</h1>
    <div className='h-screen w-full flex flex-col justify-center item-center'>
      <div>
        <Calculadora/>
        <Clock/>
      </div>
    </div>
  )
}

export default App

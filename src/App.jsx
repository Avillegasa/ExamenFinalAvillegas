import './App.css'
import Header from './Components/Header'
import Tarjeta from './Components/Tarjeta'
import {tarjetita} from './assets/TarjetaAPI.js'


function App() {
  

  return (
      <div className='app-container'>
        <Header>Exercicios</Header>
        <Tarjeta tarjetita = {tarjetita}/>
      </div>
  )
}

export default App

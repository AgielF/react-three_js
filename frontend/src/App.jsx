import Canvas from './canvas/index'
import Costumizer from './pages/Costumizer'
import Home from './pages/Home'
import './index.css'


function App() {
    return(
      <main className="app transition-all ease-in">
        <Home></Home>
        <Canvas></Canvas>
        <Costumizer></Costumizer>
      </main>
    )

 
}

export default App

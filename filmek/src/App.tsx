
import { FILMLISTA } from './adat'
import './App.css'
import Filmek from './component/Filmek'

function App() {

  return (
    <>
      <header><h1>Film</h1></header>
        <article>
          <Filmek lista = {FILMLISTA}/>
        </article>
        <footer><p>Molnár Beatrix</p></footer>
    </>
  )
}

export default App

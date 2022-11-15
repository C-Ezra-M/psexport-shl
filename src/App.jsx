import PSExportFormatEditor from './assets/editor'
import 'normalize.css'
import './App.css'
import 'highlight.js/styles/default.css'

function App() {
  return (
    <div className="App">
      <h2>
        <a href="https://pokemonshowdown.com/">Pokémon Showdown</a> export format syntax highlighter
      </h2>
      <PSExportFormatEditor />
      <footer>

      </footer>
    </div>
  )
}

export default App

import Pokemon from './components/Pokemon';
import PokemonAxios from './components/Pokemon_axios';
import './App.css';

function App() {
  return (
    <div className="App">
        <div style={{
          display: "inline-block"
        }}>
          <PokemonAxios/>
        </div>
        <div style={{
          display: "inline-block"}}>
      <Pokemon/>
        </div>
    </div>
  );
}

export default App;

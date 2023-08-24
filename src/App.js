import logo from './logo.svg';
import './App.css';
import AppRouter from './Router/AppRouter';
import Pokedex from './Components/Pokedex';
import Header from './Components/Header';

function App() {
  return (
    <header>
      <div>
      <AppRouter/>
      </div>
    </header>
    );
}

export default App;

import logo from './imagens/logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <p><strong>Alura Books</strong></p>
        </div>
      </header>
    </div>
  );
}

export default App;

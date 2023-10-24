
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header text-center">
      Hello
      <a href='/' className='btn btn-primary'>Again</a>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='App-footer'>Coded by Ana FM Tavares</footer>
    </div>
    </div>
  );
}

export default App;


import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className='container'>
          <header className="App-header text-center">
          Dictionary
          </header>
          <main>
          <Dictionary defaultKeyword="vibe" />
          </main>
      <footer className='App-footer'>This page was coded by Ana FM Tavares and is open-sourced on <a href='https://github.com/anafmt/dictionary-project' target='_blank' rel="noreferrer">Github</a></footer>
    </div>
    </div>
  );
}

export default App;

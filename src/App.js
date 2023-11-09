
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
      <footer className='App-footer'>This page was coded by <a href="https://www.linkedin.com/in/ana-fm-tavares/" target='_blank' rel="noreferrer" className='linkedin'>Ana FM Tavares</a> and is open-sourced on <a href='https://github.com/anafmt/dictionary-project' target='_blank' rel="noreferrer">Github</a></footer>
    </div>
    </div>
  );
}

export default App;

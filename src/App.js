import './App.css';
import Categories from '/Users/steven/Documents/my-app/src/Categories.css';
import config_json from './review_temp/config_momo.json'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header">{"Movie Template "}</h2>
        <p className="App-header">☑ Awesome</p>
      </header>

      <div className="categories-container">
        <Categories props={config_json.categories} />
      </div>

      <footer className="App-footer">
        <p className="signature">Steven,Pierre</p>
      </footer>
    </div>
  );
}

export default App;

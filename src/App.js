import "./App.css";
import ReviewForm from "./ReviewForm";
import config from "./config/template.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header">Movie & TV Review Template</h2>
      </header>

      <ReviewForm categories={config.categories} />

      <footer className="App-footer">
        <p className="signature">
          Steven Pierre, {new Date().getFullYear()} (If you like this, check out
          <a href="https://vojtastruhar.github.io/steam-review-template/"> here</a>)
        </p>
      </footer>
    </div>
  );
}

export default App;

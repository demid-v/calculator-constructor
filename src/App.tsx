import ModeSelector from "./components/ModeSelector";
import "./styles/app.css";
import Panels from "./components/Panels";

function App() {
  return (
    <div className="app">
      <div className="container">
        <ModeSelector />
        <Panels />
      </div>
    </div>
  );
}

export default App;

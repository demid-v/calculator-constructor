import "../styles/modes.css";

import runtimeImg from "../assets/runtime.svg";
import constructorImg from "../assets/constructor.svg";

function ModeSelector() {
  return (
    <header className="modes">
      <button className="mode mode-runtime">
        <img className="runtime-img" src={runtimeImg} alt="" />
        <span className="mode-sym">Runtime</span>
      </button>
      <button className="mode mode-constructor mode-active">
        <img className="constructor-img" src={constructorImg} alt="" />
        <span className="mode-sym">Constructor</span>
      </button>
    </header>
  );
}

export default ModeSelector;

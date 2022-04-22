import Display from "./Display";
import Symbols from "./Symbols";
import Operators from "./Operators";
import Result from "./Result";
import "../styles/constructorPanel.css";

function ConstructorPanel() {
  return (
    <div className="constructor">
      <Display />
      <Operators />
      <Symbols />
      <Result />
    </div>
  );
}

export default ConstructorPanel;

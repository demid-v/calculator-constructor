import Indicator from "./Indicator";
import Symbols from "./NumericPanel";
import Operators from "./OperatorPanel";
import Result from "./Result";
import "../styles/constructorPanel.css";

function ConstructorPanel() {
  return (
    <aside className="constructor">
      <Indicator />
      <Operators />
      <Symbols />
      <Result />
    </aside>
  );
}

export default ConstructorPanel;

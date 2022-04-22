import "../styles/operators.css";

function Operators() {
  return (
    <div id="operators" className="operators">
      <button className="operator-field">
        <div className="operator-sym">/</div>
      </button>
      <button className="operator-field">
        <div className="operator-sym">*</div>
      </button>
      <button className="operator-field">
        <div className="operator-sym">-</div>
      </button>
      <button className="operator-field">
        <div className="operator-sym">+</div>
      </button>
    </div>
  );
}

export default Operators;

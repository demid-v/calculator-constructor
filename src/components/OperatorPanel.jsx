import "../styles/operators.css";

function Operators() {
  return (
    <div className="operators">
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

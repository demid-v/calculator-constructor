import "../styles/dropPanel.css";
import dropHere from "../assets/drop-here.svg";

function DropPanel() {
  return (
    <div className="drop-panel">
      <div className="drop-field">
        <img className="drop-field-img" src={dropHere} alt="" />
        <p className="primary-text">Перетащите сюда</p>
        <p className="secondary-text">любой элемент из этой панели</p>
      </div>
    </div>
  );
}

export default DropPanel;

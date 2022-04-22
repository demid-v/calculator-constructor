import "../styles/dropPanel.css";
import dropHereImg from "../assets/drop-here.svg";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { State } from "../state/reducers/dragReducer";
import { Component, useEffect } from "react";
import m from "../utils/globals";
import Display from "./Display";

function DropPanel() {
  function dragOver(event) {
    event.preventDefault();
  }

  function dragEnter(event) {
    // event.preventDefault();
  }

  const dispatch = useDispatch();
  const { setDrop } = bindActionCreators(actionCreators, dispatch);
  function drop(event) {
    event.preventDefault();

    setDrop();
  }

  const { elementId, dropped } = useSelector(
    (state: { drag: State }) => state.drag
  );
  useEffect(() => console.log("changed:", dropped), [dropped]);

  return (
    <div
      className={"drop-panel " + (!dropped && "drop-panel_empty")}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDrop={drop}
    >
      <div className="drop-field">
        {!dropped && (
          <>
            <img className="drop-field-img" src={dropHereImg} alt="" />
            <p className="primary-text">Перетащите сюда</p>
            <p className="secondary-text">любой элемент из этой панели</p>
          </>
        )}
        {dropped && <Display />}
      </div>
    </div>
  );
}

export default DropPanel;

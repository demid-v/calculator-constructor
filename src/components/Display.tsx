import "../styles/display.css";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

function Display() {
  // const state = useSelector((state) => state);
  // console.log(state);

  const dispatch = useDispatch();
  const { setDrag } = bindActionCreators(actionCreators, dispatch);
  function dragStart(event) {
    setDrag(event.target.id);
  }

  return (
    <div id="display" className="display" draggable onDragStart={dragStart}>
      <div className="display-field">
        <div className="display-result">0</div>
      </div>
    </div>
  );
}

export default Display;

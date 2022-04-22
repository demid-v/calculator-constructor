function setDrag(draggedElement: string) {
  return (dispatch) => {
    dispatch({ type: "setDrag", payload: draggedElement });
  };
}

function setDrop() {
  return (dispatch) => {
    dispatch({ type: "setDrop" });
  };
}

export { setDrag, setDrop };

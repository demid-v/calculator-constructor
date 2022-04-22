type State = { elementId: string; dropped: boolean };

const initialState: State = {
  elementId: null,
  dropped: false,
};

function dragReducer(state = initialState, action) {
  switch (action.type) {
    case "setDrag":
      return { ...state, elementId: action.payload, dropped: false };
    case "setDrop":
      return { ...state, dropped: true };
    default:
      return state;
  }
}

export { State, dragReducer };

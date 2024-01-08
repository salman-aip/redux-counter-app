import { legacy_createStore as createStore } from "redux";

const initialState = {
  counter: 0,
};

const reducerFn = (state = initialState, action: any): { counter: number } => {
  if (action.type == "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type == "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type == "ADD10") {
    return { counter: state.counter + action.payload };
  }

  return state;
};

export const store = createStore(reducerFn);

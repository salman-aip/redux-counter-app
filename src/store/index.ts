/*

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

*/

// ============================ redux tool kit ====================

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    add10(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

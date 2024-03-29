"use client";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INC" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DEC" });
  };

  const addBy10 = () => {
    dispatch({ type: "ADD10", payload: 10 });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      Redux
      <h1>Counter</h1>
      <h2 className="text-5xl">{counter}</h2>
      <div className="flex gap-x-12">
        <button onClick={handleIncrement} className="border px-2 py-3 rounded-lg">
          Increment
        </button>
        <button onClick={handleDecrement} className="border px-2 py-3 rounded-lg">
          Decrement
        </button>
        <button onClick={addBy10} className="border px-2 py-3 rounded-lg">
          ADD 10
        </button>
      </div>
    </main>
  );
}

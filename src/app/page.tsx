"use client";

import { decrement, increment, reset } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Dispatch, AnyAction } from "redux"

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch() as Dispatch<AnyAction>;

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <main>
      <div>
        <h4>{count}</h4>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </main>
  );
}

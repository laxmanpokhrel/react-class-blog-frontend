import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
} from '../../store/slice/counterSlice';
import { useMemo, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [countValue, setCountValue] = useState(1);

  // expensive functions
  const expHandlerFunction = () => {
    let count = 1000;
    for (let i = 0; i < count; i++) {
      console.log(i, ': Count', countValue);
    }
  };

  const expCalculatorFunction = () => {
    let count = 50;
    for (let i = 0; i < count; i++) {
      console.log(i, ': Count expCalculatorFunction');
    }
    return count;
  };

  // const memoizedExpFunction = useCallback(expHandlerFunction, []);
  const memoizedExpValue = useMemo(expCalculatorFunction, []);
  // const memoizedExpValue = expCalculatorFunction();

  // expFunction();
  expHandlerFunction;
  // expensively calculated value

  return (
    <div className="flex items-center justify-center p-4 flex-col gap-4 h-full ">
      <h1 className="text-4xl font-bold text-gray-900 font-roboto">
        Welcome to my website
      </h1>
      <button
        type="button"
        className=" p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => navigate('/blog')}
      >
        Read my blogs
      </button>
      <div className="flex items-center gap-4">
        <input
          type="number"
          className="border rounded-2xl h-[2rem]"
          onChange={(e) => {
            setCountValue(e.target.value);
            // memoizedExpFunction();
          }}
          value={countValue}
        />
        {/* {random} */}
        <button
          type="button"
          className=" p-2 bg-gray-200 rounded-lg cursor-pointer"
          onClick={() => {
            dispatch(incrementByAmount(Number(countValue)));
          }}
        >
          Add
        </button>
        <button
          type="button"
          className=" p-2 bg-gray-200 rounded-lg cursor-pointer"
          onClick={() => {
            dispatch(resetCount());
          }}
        >
          Reset
        </button>
      </div>
      {memoizedExpValue}
      <button
        type="button"
        className=" p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => {
          dispatch(increment());
          // memoizedExpFunction();
        }}
      >
        Increment
      </button>
      <p>{count}</p>
      <button
        type="button"
        className=" p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
} from '../../store/slice/counterSlice';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [countValue, setCountValue] = useState(0);

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
          onChange={(e) => setCountValue(e.target.value)}
          value={countValue}
        />
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
      <button
        type="button"
        className=" p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => {
          dispatch(increment());
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

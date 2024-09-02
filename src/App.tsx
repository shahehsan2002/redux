
import { decrement, increment } from "./redux/features/counterSlice.ts";
import { useAppDispatch, useAppSelector } from "./redux/hook.ts";

function App() {
  const {count} = useAppSelector((state) =>state.counter );
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 rounded-md bg-slate-300">
        <button 
        onClick ={() => dispatch(increment())} 
        className="px-3 py-2 rounded-md bg-green-400 text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button 
        onClick={()=> dispatch (decrement())}
        className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

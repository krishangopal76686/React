import { useState } from "react";

function App() {
const [counter,setcounter]=useState(0);

  return (
 
<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">React Counter</h1>

      <div className="text-6xl font-semibold text-blue-600 mb-6">{counter}</div>

      <div className="flex space-x-4">
        <button
          onClick={() => setcounter(counter - 1)}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>

        <button
          onClick={() => setcounter(counter + 1)}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default App

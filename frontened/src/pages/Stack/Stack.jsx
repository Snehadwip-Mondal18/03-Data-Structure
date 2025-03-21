import { useState } from "react";

export default function Stack() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add a new falling div with input value
  const addDiv = () => {
    if (!inputValue.trim()) return; // Prevent empty values
    setItems((prev) => [...prev, { id: Date.now(), value: inputValue }]);
    setInputValue(""); // Clear input after adding
  };

  // Remove the topmost (last) div (pop operation)
  const removeDiv = () => {
    setItems((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
      {/* Input field */}
      <input
        type="text"
        placeholder="Enter value to push into the stack"
        className="w-96 h-8 p-2 m-4 border-blue-600 border-2 rounded-md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Buttons to add and remove divs */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={addDiv}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
        >
          Push
        </button>
        <button
          onClick={removeDiv}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md"
          disabled={items.length === 0}
        >
          Pop
        </button>
      </div>

      {/* Stack Container */}
      <div className="relative w-60 h-96 border-2 border-gray-400 bg-white overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="absolute left-2 w-56 h-14 bg-blue-300 rounded-lg shadow-lg flex items-center justify-center text-lg font-bold transition-all duration-500"
            style={{ bottom: `${index * 60}px` }}
          >
            {item.value} {/* Display user input value */}
          </div>
        ))}
      </div>
    </div>
  );
}

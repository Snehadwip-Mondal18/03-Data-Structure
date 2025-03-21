import { useState } from "react";

export default function SimpleQueue() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [positions, setPositions] = useState({});
  const [message, setMessage] = useState(""); // For overflow/underflow messages
  const MAX_ITEMS = 5; // Maximum allowed items in the queue

  // Add a new div to the queue
  const addDiv = () => {
    if (!inputValue.trim()) return;
    if (items.length >= MAX_ITEMS) {
      setMessage("Overflow: Queue is full!");
      return;
    }

    const id = Date.now();
    const newPosition = Object.keys(positions).length * 60; // Calculate position
    setItems((prev) => [...prev, { id, value: inputValue }]);

    setPositions((prev) => ({
      ...prev,
      [id]: newPosition, // Assign the position to the new div
    }));

    setMessage(""); // Clear any previous messages
    setInputValue("");
  };

  // Remove the first div without shifting others
  const removeDiv = () => {
    if (items.length === 0) {
      setMessage("Underflow: Queue is empty!");
      return;
    }

    const firstItem = items[0];
    setItems((prev) => prev.slice(1));
    setPositions((prev) => {
      const updatedPositions = { ...prev };
      delete updatedPositions[firstItem.id]; // Remove the position of the dequeued item
      return updatedPositions;
    });

    setMessage(""); // Clear any previous messages
  };

  const frontPosition =
    items.length > 0 ? positions[items[0].id] : -1; // Position of the front
  const rearPosition =
    items.length > 0 ? positions[items[items.length - 1].id] : -1; // Position of the rear

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
      {/* Display Queue Information */}
      <div className="mb-4 text-gray-700 font-bold">
        <div>Front Position: {frontPosition !== -1 ? frontPosition / 60 : frontPosition}</div>
        <div>Rear Position: {rearPosition !== -1 ? rearPosition / 60 : rearPosition}</div>
        <div>MaxSize: {MAX_ITEMS}</div>
      </div>

      {/* Input field */}
      <input
        type="text"
        placeholder="Enter value to push into the queue"
        className="w-96 h-8 p-2 m-4 border-blue-600 border-2 rounded-md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={addDiv}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
        >
          Enqueue
        </button>
        <button
          onClick={removeDiv}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md"
          disabled={items.length === 0}
        >
          Dequeue
        </button>
      </div>

      {/* Overflow/Underflow Message */}
      {message && (
        <div className="mb-4 text-red-600 font-bold">{message}</div>
      )}

      {/* Queue Container */}
      <div className="relative w-6xl block h-20 border-2 border-gray-400 bg-white overflow-hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute w-20 h-16 bg-blue-300 rounded-lg shadow-lg flex flex-col text-lg font-bold transition-all duration-500"
            style={{ left: `${positions[item.id]}px` }} // Keep position fixed
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}

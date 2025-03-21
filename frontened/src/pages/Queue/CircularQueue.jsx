import { useState } from "react";

export default function CircularQueue() {
  const queueSize = 5; // Set the fixed queue size
  const [items, setItems] = useState(Array(queueSize).fill(null)); // Circular storage
  const [front, setFront] = useState(-1);
  const [rear, setRear] = useState(-1);
  const [inputValue, setInputValue] = useState("");

  // Check if queue is full
  const isFull = () => (rear + 1) % queueSize === front;

  // Check if queue is empty
  const isEmpty = () => front === -1;

  // Enqueue operation
  const enqueue = () => {
    if (!inputValue.trim()) return;
    if (isFull()) {
      alert("Queue is Full!");
      return;
    }

    let newRear = (rear + 1) % queueSize;
    let newFront = front === -1 ? 0 : front; // If first item, set front

    let newItems = [...items];
    newItems[newRear] = inputValue; // Insert at rear

    setItems(newItems);
    setFront(newFront);
    setRear(newRear);
    setInputValue("");
  };

  // Dequeue operation
  const dequeue = () => {
    if (isEmpty()) {
      alert("Queue is Empty!");
      return;
    }

    let newItems = [...items];
    newItems[front] = null; // Remove item at front

    let newFront = front === rear ? -1 : (front + 1) % queueSize; // Reset if last element removed
    let newRear = front === rear ? -1 : rear; // Reset rear if last element removed

    setItems(newItems);
    setFront(newFront);
    setRear(newRear);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter value to enqueue"
        className="w-96 h-8 p-2 m-4 border-blue-600 border-2 rounded-md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={enqueue}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
          disabled={isFull()}
        >
          Enqueue
        </button>
        <button
          onClick={dequeue}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md"
          disabled={isEmpty()}
        >
          Dequeue
        </button>
      </div>

      {/* Queue Container */}
      <div className="relative w-[400px] h-20 border-2 border-gray-400 bg-white flex justify-between px-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-20 h-16 ${
              item ? "bg-blue-300" : "bg-gray-300"
            } rounded-lg shadow-lg flex items-center justify-center text-lg font-bold`}
          >
            {item || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

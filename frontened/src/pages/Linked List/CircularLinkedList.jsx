import { useState } from "react";

const Node = ({ value }) => (
  <div className="flex items-center gap-2">
    <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-md shadow-md text-lg font-semibold">
      {value}
    </div>
    <span className="text-xl">→</span>
  </div>
);

const CircularLinkedList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [afterInsertValue, setAfterInsertValue] = useState("");
  const [afterDeleteValue, setAfterDeleteValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInsertBegin = () => {
    if (input) {
      setList([parseInt(input), ...list]);
      setInput("");
      setMessage("");
    }
  };

  const handleInsertEnd = () => {
    if (input) {
      setList([...list, parseInt(input)]);
      setInput("");
      setMessage("");
    }
  };

  const handleInsertMiddle = () => {
    if (input && afterInsertValue) {
      const index = list.indexOf(parseInt(afterInsertValue));
      if (index !== -1) {
        const newList = [...list];
        newList.splice(index + 1, 0, parseInt(input));
        setList(newList);
        setMessage("");
      } else {
        setMessage(`Value ${afterInsertValue} not found for insertion!`);
      }
      setInput("");
      setAfterInsertValue("");
    }
  };

  const handleDeleteBegin = () => {
    if (list.length > 0) {
      setList(list.slice(1));
      setMessage("");
    }
  };

  const handleDeleteEnd = () => {
    if (list.length > 0) {
      setList(list.slice(0, -1));
      setMessage("");
    }
  };

  const handleDeleteMiddle = () => {
    if (afterDeleteValue) {
      const filteredList = list.filter((val) => val !== parseInt(afterDeleteValue));
      if (filteredList.length === list.length) {
        setMessage(`Value ${afterDeleteValue} not found for deletion!`);
      } else {
        setList(filteredList);
        setMessage("");
      }
      setAfterDeleteValue("");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold">Circular Linked List</h2>

      {/* Insert Section */}
      <div className="p-4 border rounded-lg w-full max-w-lg">
        <h3 className="font-semibold text-lg mb-2">Insert Node</h3>
        <div className="flex gap-2 mb-2">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter value"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={handleInsertBegin} className="bg-green-500 text-white px-4 py-2 rounded">
            Insert Begin
          </button>
          <button onClick={handleInsertEnd} className="bg-green-500 text-white px-4 py-2 rounded">
            Insert End
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <input
            type="number"
            value={afterInsertValue}
            onChange={(e) => setAfterInsertValue(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Insert after value"
          />
          <button onClick={handleInsertMiddle} className="bg-green-500 text-white px-4 py-2 rounded">
            Insert Middle
          </button>
        </div>
      </div>

      {/* Delete Section */}
      <div className="p-4 border rounded-lg w-full max-w-lg">
        <h3 className="font-semibold text-lg mb-2">Delete Node</h3>
        <div className="flex flex-wrap gap-2">
          <button onClick={handleDeleteBegin} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete Begin
          </button>
          <button onClick={handleDeleteEnd} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete End
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <input
            type="number"
            value={afterDeleteValue}
            onChange={(e) => setAfterDeleteValue(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter value to delete"
          />
          <button onClick={handleDeleteMiddle} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete Middle
          </button>
        </div>
      </div>

      {/* Display List */}
      <div className="p-4 w-full flex justify-center border rounded">
        {list.length > 0 ? (
          <div className="flex gap-2 items-center">
            {list.map((value, index) => (
              <Node key={index} value={value} />
            ))}
            {list.length > 1 && <span className="text-xl text-gray-500">↺</span>} {/* Circular Arrow */}
          </div>
        ) : (
          <p>No nodes in list</p>
        )}
      </div>

      {/* Message Display */}
      {message && <div className="text-red-500 font-semibold">{message}</div>}
    </div>
  );
};

export default CircularLinkedList;

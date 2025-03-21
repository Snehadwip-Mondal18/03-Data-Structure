import React, { useState } from "react";

const ArrayComponent = () => {
  const [size, setSize] = useState(""); // Stores the array size
  const [array, setArray] = useState([]); // Stores the actual array elements
  const [inputValues, setInputValues] = useState([]); // Stores inputs for elements

  // Function to create an array with a given size
  const createArray = () => {
    const numSize = parseInt(size, 10);
    if (!isNaN(numSize) && numSize > 0) {
      setArray(Array(numSize).fill("")); // ✅ Create empty array correctly
      setInputValues(Array(numSize).fill("")); // ✅ Create empty input values
    }
  };

  // Function to handle input change for elements
  const handleInputChange = (index, value) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  // Function to submit elements into the array
  const submitElements = () => {
    setArray([...inputValues]); // ✅ Update array with input values
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Dynamic Array Input</h2>

      {/* Input field for array size */}
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border p-2 rounded-lg flex-grow"
          placeholder="Enter array size"
        />
        <button
          onClick={createArray}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Set Size
        </button>
      </div>

      {/* Input fields for array elements */}
      {array.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Enter Elements:</h3>
          {array.map((_, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={inputValues[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="border p-2 rounded-lg flex-grow"
                placeholder={`Element ${index}`}
              />
            </div>
          ))}
          <button
            onClick={submitElements}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Submit Elements
          </button>
        </div>
      )}

      {/* Display array elements */}
      {array.length > 0 && (
        <div className="flex flex-row bg-gray-100 shadow-md">
          {array.map((value, index) => (
            <div
              key={index}
              className="p-4 text-center border w-2xl bg-white"
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArrayComponent;

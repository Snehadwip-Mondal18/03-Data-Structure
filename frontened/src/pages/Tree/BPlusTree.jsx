import { useState } from "react";

const TreeNode = ({ node }) => {
  return (
    <div className="flex flex-col items-center border p-2 rounded bg-gray-200 m-2">
      <div className="flex gap-2">
        {node.keys.map((key, index) => (
          <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded">
            {key}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-2">
        {node.children.map((child, index) => (
          <TreeNode key={index} node={child} />
        ))}
      </div>
    </div>
  );
};

const BPlusTree = () => {
  const [tree, setTree] = useState(null);
  const [input, setInput] = useState("");
  const order = 3; // B+ Tree Order

  const createNode = (keys = [], children = []) => ({ keys, children });

  const insertNode = (root, key) => {
    if (!root) return createNode([key]);

    let newRoot = { ...root };
    newRoot.keys = [...newRoot.keys, key].sort((a, b) => a - b);
    
    if (newRoot.keys.length >= order) {
      const mid = Math.floor(newRoot.keys.length / 2);
      const left = createNode(newRoot.keys.slice(0, mid));
      const right = createNode(newRoot.keys.slice(mid + 1));
      return createNode([newRoot.keys[mid]], [left, right]);
    }
    return newRoot;
  };

  const handleInsert = () => {
    if (input) {
      setTree((prev) => insertNode(prev, parseInt(input)));
      setInput("");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleInsert}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Insert Node
        </button>
      </div>
      <div className="p-4 w-full flex justify-center border rounded">
        {tree ? <TreeNode node={tree} /> : <p>No nodes in tree</p>}
      </div>
    </div>
  );
};

export default BPlusTree;

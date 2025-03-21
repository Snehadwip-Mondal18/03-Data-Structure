import { useState } from "react";

const TreeNode = ({ node, onDelete }) => {
  if (!node) return null;
  return (
    <div className="flex flex-col items-center relative">
      <div className="bg-blue-500 text-white p-4 rounded-full shadow-md relative">
        {node.data}
        <button
          className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full"
          onClick={() => onDelete(node.data)}
        >
          ✕
        </button>
      </div>
      <div className="flex gap-4 mt-4 relative">
        {node.left && <div className="absolute left-[-20px] top-5 w-8 h-8 border-t-2 border-l-2 border-black"></div>}
        {node.right && <div className="absolute right-[-20px] top-5 w-8 h-8 border-t-2 border-r-2 border-black"></div>}
      </div>
      <div className="flex gap-4 mt-4">
        {node.left && <TreeNode node={node.left} onDelete={onDelete} />}
        {node.right && <TreeNode node={node.right} onDelete={onDelete} />}
      </div>
    </div>
  );
};

const BST = () => {
  const [tree, setTree] = useState(null);
  const [input, setInput] = useState("");

  const createNode = (data) => ({ data, left: null, right: null });

  const insertNode = (root, data) => {
    if (!root) return createNode(data);
    if (data < root.data) {
      root.left = insertNode(root.left, data);
    } else if (data > root.data) {
      root.right = insertNode(root.right, data);
    }
    return root;
  };

  const deleteNode = (root, key) => {
    if (!root) return null;
    if (key < root.data) {
      root.left = deleteNode(root.left, key);
    } else if (key > root.data) {
      root.right = deleteNode(root.right, key);
    } else {
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      let temp = root.right;
      while (temp.left) temp = temp.left;
      root.data = temp.data;
      root.right = deleteNode(root.right, temp.data);
    }
    return root;
  };

  const handleInsert = () => {
    if (input) {
      setTree((prev) => insertNode(prev, parseInt(input)));
      setInput("");
    }
  };

  const handleDelete = (key) => {
    setTree((prev) => deleteNode(prev, key));
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
        <button onClick={handleInsert} className="bg-green-500 text-white px-4 py-2 rounded">
          Insert Node
        </button>
      </div>
      <div className="p-4 w-full flex justify-center border rounded">
        {tree ? <TreeNode node={tree} onDelete={handleDelete} /> : <p>No nodes in tree</p>}
      </div>
    </div>
  );
};

export default BST;

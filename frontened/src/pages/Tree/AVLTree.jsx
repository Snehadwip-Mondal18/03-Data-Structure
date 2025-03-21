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
        {node.left && <TreeNode node={node.left} onDelete={onDelete} />}
        {node.right && <TreeNode node={node.right} onDelete={onDelete} />}
      </div>
    </div>
  );
};

const AVLTree = () => {
  const [tree, setTree] = useState(null);
  const [input, setInput] = useState("");

  const createNode = (data) => ({ data, left: null, right: null, height: 1 });

  const getHeight = (node) => (node ? node.height : 0);

  const getBalance = (node) => (node ? getHeight(node.left) - getHeight(node.right) : 0);

  const rotateRight = (y) => {
    let x = y.left;
    let T2 = x.right;
    x.right = y;
    y.left = T2;
    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
    x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;
    return x;
  };

  const rotateLeft = (x) => {
    let y = x.right;
    let T2 = y.left;
    y.left = x;
    x.right = T2;
    x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;
    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
    return y;
  };

  const insertNode = (node, data) => {
    if (!node) return createNode(data);
    if (data < node.data) {
      node.left = insertNode(node.left, data);
    } else if (data > node.data) {
      node.right = insertNode(node.right, data);
    } else {
      return node;
    }
    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    let balance = getBalance(node);

    if (balance > 1 && data < node.left.data) return rotateRight(node);
    if (balance < -1 && data > node.right.data) return rotateLeft(node);
    if (balance > 1 && data > node.left.data) {
      node.left = rotateLeft(node.left);
      return rotateRight(node);
    }
    if (balance < -1 && data < node.right.data) {
      node.right = rotateRight(node.right);
      return rotateLeft(node);
    }
    return node;
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
        <button onClick={handleInsert} className="bg-green-500 text-white px-4 py-2 rounded">
          Insert Node
        </button>
      </div>
      <div className="p-4 w-full flex justify-center border rounded">
        {tree ? <TreeNode node={tree} onDelete={() => {}} /> : <p>No nodes in tree</p>}
      </div>
    </div>
  );
};

export default AVLTree;

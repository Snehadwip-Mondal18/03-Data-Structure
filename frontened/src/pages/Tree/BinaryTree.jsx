import { useState } from "react";

const TreeNode = ({ node }) => {
  if (!node) return null;
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-500 text-white p-4 rounded-full shadow-md">
        {node.data}
      </div>
      <div className="flex gap-4 mt-4">
        {node.left && <TreeNode node={node.left} />}
        {node.right && <TreeNode node={node.right} />}
      </div>
    </div>
  );
};

const BinaryTree = () => {
  const [tree, setTree] = useState(null);
  const [input, setInput] = useState("");

  const createNode = (data) => ({ data, left: null, right: null });

  const insertNode = (root, data) => {
    if (!root) return createNode(data);

    // Create a deep copy of the tree to avoid direct mutation
    const newTree = JSON.parse(JSON.stringify(root));

    const queue = [newTree];
    while (queue.length) {
      let temp = queue.shift();
      if (!temp.left) {
        temp.left = createNode(data);
        break;
      } else queue.push(temp.left);
      if (!temp.right) {
        temp.right = createNode(data);
        break;
      } else queue.push(temp.right);
    }
    return newTree;
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

export default BinaryTree;
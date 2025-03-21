// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Data Structure Visualizer</h1>
//       <p className="text-lg text-gray-700 mb-6">Define, Input, and Visualize Data Structure Dynamically</p>
//       <Link to="/array" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
//         Get Started
//       </Link>
//     </div>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Folder Navigation</h1>
      <p className="text-lg text-gray-700 mb-6">Click a folder to view pages inside.</p>
      <div className="flex space-x-4">
        <Link to="/folder/folder1" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
          Array
        </Link>
        <Link to="/folder/folder2" className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-700">
          Stack
        </Link>
        <Link to="/folder/folder3" className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">
          Queue
        </Link>
        <Link to="/folder/folder4" className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">
          Linked List
        </Link>
      </div>
    </div>
  );
};

export default Home;

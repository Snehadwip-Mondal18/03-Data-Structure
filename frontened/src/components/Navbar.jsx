import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* <h1 className="text-xl font-bold">Data Structure Visualizer</h1> */}
        <h1 className="text-xl font-bold">Folder Navigation</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          {/* <Link to="/array" className="hover:text-gray-300">Array Page</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


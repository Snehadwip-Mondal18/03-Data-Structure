// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Array from "./pages/Array/Array";
// import LinkedList from "./pages/Linked List/SinglyLinkedList"
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Array" element={<Array />} />
//         <Route path="/LinkedList" element={<LinkedList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FolderPage from "./pages/FolderPage";
import Array from "./pages/Array/Array";
import Stack from "./pages/Stack/Stack"
import SimpleQueue from "./pages/Queue/SimpleQueue";
import CircularQueue from "./pages/Queue/CircularQueue";
import SinglyLinkedList from "./pages/Linked List/SinglyLinkedList";
import CircularLinkedList from "./pages/Linked List/CircularLinkedList";
import DoublyLinkedList from "./pages/Linked List/DoublyLinkedList";
// import PageD from "./pages/Folder2/PageD";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/folder/:folderName" element={<FolderPage />} />
        <Route path="/Array/Array" element={<Array />} />
        <Route path="/Stack/Stack" element={<Stack />} />
        <Route path="/Queue/SimpleQueue" element={<SimpleQueue />} />
        <Route path="/Queue/CircularQueue" element={<CircularQueue />} />
        <Route path="/Linked List/SinglyLinkedList" element={<SinglyLinkedList />} />
        <Route path="/Linked List/CircularLinkedList" element={<CircularLinkedList />} />
        <Route path="/Linked List/DoublyLinkedList" element={<DoublyLinkedList />} />
        {/* <Route path="/folder2/pageD" element={<PageD />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

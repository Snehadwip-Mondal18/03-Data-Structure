import { useParams, Link } from "react-router-dom";

const FolderPage = () => {
  const { folderName } = useParams();

  const folderTitles = {
    folder1: "Array",
    folder2: "Stack",
    folder3: "Queue",
    folder4: "Linked List",
  };

  // Define folder contents
  const folders = {
    folder1: [
      { name: "Array",
        path: "/Array/Array",
      },
    ],
    folder2: [
      { name: "Stack",
        path: "/Stack/Stack",
      },
    ],
    folder3: [
      { name: "Simple Queue", 
        path: "/Queue/SimpleQueue" 
      },
      { name: "Circular Queue", 
        path: "/Queue/CircularQueue" 
      },
    ],
    folder4: [
      { name: "Single Linked List",
        path: "/Linked List/SinglyLinkedList"
      },
      { name: "Circular Linked List",
        path: "/Linked List/CircularLinkedList"
      },
      { name: "Double Linked List",
        path: "/Linked List/DoublyLinkedList"
      },
    ]
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">{folderName.toUpperCase()}</h2> */}
      <h2 className="text-2xl font-bold mb-4 text-center">{folderTitles[folderName] || folderName.toUpperCase()}</h2>
      <div className="flex flex-col gap-4">
        {folders[folderName]?.map((page, index) => (
          <Link
            key={index}
            to={page.path}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 text-center"
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default FolderPage;

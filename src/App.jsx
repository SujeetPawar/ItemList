import React, { useState } from "react";

function App() {
  const [item, setItem] = useState(""); 
  const [items, setItems] = useState([]); 

  const handleAddItem = () => {
    if (item.trim()) {
      setItems([...items, item]); 
      setItem(""); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Item List Manager</h1>

        {/* Input and Button Section can make another component but not need */}
        <div className="flex mb-4">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item..."
          />
          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </div>

        {/* List Section */}
        {items.length === 0 ? (
          <p className="text-center text-gray-500">No items in the list yet.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-lg text-gray-800">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

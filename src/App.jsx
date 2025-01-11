import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]); 

  // Add a new item to the list
  const handleAddItem = () => {
    if (item.trim()) {
      setItems([...items, item]);
      setItem(""); 
    }
  };

  
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Item List Manager</h1>

        {/* Input and Button Section */}
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
              <li key={index} className="flex justify-between items-center text-lg text-gray-800">
                <span>{item}</span>
                <button
                  onClick={() => handleRemoveItem(index)} // Call remove function with the item index
                  className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

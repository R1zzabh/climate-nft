import React, { useState } from "react";
import Navbar from "./components/navbar";
import CardPage from "./components/card";
import Sidebar from "./components/sidebar";

function App() {
  const [visible, setVisible] = useState(false);
  
  const toggleIsVisible = () => {
    setVisible(!visible);
  }

  return (
    <div className="flex bg-black"> {/* added bg-black to the outermost div */}
      <Sidebar visible={visible} />
      <button className="w-16 h-16 bg-transparent" onClick={toggleIsVisible}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </button>
      <div className="flex-1">
        <Navbar /> 
        <CardPage/>
        <div className="p-6 text-red-600"> {/* added text-red-600 to the container div */}
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>Your content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
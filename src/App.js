import React from "react";
import Navbar from "./components/Navbar";
// import Chat from "./components/Chat";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      {/* <main className="container">
        <Chat />
      </main> */}
    </>
  );
}

export default App;

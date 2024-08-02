
import React from "react";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/shriharithamlandingpage" element={<Home />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
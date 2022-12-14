import React from "react";
import Header from "./components/Header";
import WritePost from "./pages/WritePost";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/posts/write" element={<WritePost />} />
      </Routes>
    </div>
  );
}

export default App;

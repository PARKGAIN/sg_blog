import React from "react";
// import WritePost from "./pages/WritePost";
import { Routes, Route } from "react-router-dom";
import ControlPosts from "./components/ControlPosts";
import Editor from "./pages/Editor";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/write" element={<Editor />} />
        <Route path="/manage/posts" element={<ControlPosts />} />
      </Routes>
    </div>
  );
}

export default App;

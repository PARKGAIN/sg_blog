import React from "react";
// import WritePost from "./pages/WritePost";
import { Routes, Route } from "react-router-dom";
import Editor from "./pages/Editor";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/write" element={<Editor />} />
        <Route path="/aaadddmin" element={<LoginPage />} />
        <Route path="/manage/posts" element={<PostListPage />} />
        <Route path="/:Id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;

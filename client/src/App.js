import React from "react";
// import WritePost from "./pages/WritePost";
import { Routes, Route } from "react-router-dom";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import EditPage from "./pages/EditPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/write" element={<WritePage />} />
        <Route path="/aaadddmin" element={<LoginPage />} />
        <Route path="/posts/manage" element={<PostListPage />} />
        <Route path="/posts/put/:id" element={<EditPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;

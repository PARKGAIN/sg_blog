import React from "react";
import { Routes, Route } from "react-router-dom";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import EditPage from "./pages/EditPage";
import DeletePost from "./components/DeletePost";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/write" element={<WritePage />} />
        {/* 이거 아마 aaadddmin 에다가 버튼 옮기면 /aaadddmin/앞에 써줘야할듯 */}
        <Route path="/aaadddmin" element={<LoginPage />} />
        <Route path="/posts/manage" element={<PostListPage />} />
        <Route path="/posts/manage/:unq" element={<EditPage />} />
        <Route path="/posts/:unq" element={<PostPage />} />
        <Route path="/posts/delete/:unq" element={<DeletePost />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import WritePage from "./pages/WritePage";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/Home/MainPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import EditPage from "./pages/EditPage";
import DeletePost from "./components/DeletePost";
import PaginatedMainPage from "./pages/Home/PaginatedMainPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:page" element={<PaginatedMainPage />} />
        <Route path="/posts/write" element={<WritePage />} />
        <Route path="/aaadddmin" element={<AdminPage />} />
        <Route path="/posts/manage" element={<PostListPage />} />
        <Route path="/posts/manage/:unq" element={<EditPage />} />
        <Route path="/posts/:unq" element={<PostPage />} />
        <Route path="/posts/delete/:unq" element={<DeletePost />} />
      </Routes>
    </div>
  );
}

export default App;

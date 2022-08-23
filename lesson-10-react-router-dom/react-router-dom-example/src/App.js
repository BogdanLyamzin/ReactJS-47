import {Routes, Route} from "react-router-dom";

import Menu from "./modules/Menu/Menu";

import HomePage from './pages/HomePage/HomePage';
import PostsPage from './pages/PostsPage/PostsPage';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import "./shared/styles/style.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

import Posts from "./modules/Posts";
import PostsSearch from "./modules/PostsSearch";
import MyBooks from "./modules/MyBooks";

import './App.css';

function App() {
  return (
    <div className="App">
       <Posts />
       <PostsSearch />
    </div>
  );
}

export default App;

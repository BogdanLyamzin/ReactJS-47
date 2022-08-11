import Vote from "./modules/Vote";
import ToggleButton from "./shared/components/ToggleButton";
import HeaderMenu from "./modules/HeaderMenu";
import MyBooks from "./modules/MyBooks";
import PostsSearch from "./modules/PostsSearch/PostsSearch";
import Tabs from "./modules/Tabs";

import './App.css';

import menuItems from "./data/menu.json";
import tabsItems from "./data/tabs.json"

function App() {
  return (
    <div className="App">
      {/* <Tabs items={tabsItems} /> */}
      {/* <Vote /> */}
      {/* <ToggleButton text="Click me" /> */}
      {/* <HeaderMenu items={menuItems} /> */}
      {/* <MyBooks /> */}
      <PostsSearch />
    </div>
  );
}

export default App;

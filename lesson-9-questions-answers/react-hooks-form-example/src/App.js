import MyBooks from "./modules/MyBooks";
import RegisterForm from "./modules/RegisterForm";

import './App.css';

import menuItems from "./data/menu.json"

function App() {

  return (
    <div className="App">
      <MyBooks />
      <RegisterForm/>
    </div>
  );
}

export default App;

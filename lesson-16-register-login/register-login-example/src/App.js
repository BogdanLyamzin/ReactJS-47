import Navbar from "./modules/Navbar/Navbar";
import UserRoutes from "./UserRoutes";

import "./shared/styles/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserRoutes />
    </div>
  );
}

export default App;

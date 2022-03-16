import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Home />
      <ToastContainer autoClose={5000} style={{ width: "400px" }} />
    </div>
  );
}

export default App;

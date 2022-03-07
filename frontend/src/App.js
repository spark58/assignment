import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
  

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
  
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
            
          <Route path="/register" element={<Register/>} />
            
          <Route path="/dashboard" element={<Dashboard/>} />
            
        </Routes>
    </Router>
  );
}
  
export default App;
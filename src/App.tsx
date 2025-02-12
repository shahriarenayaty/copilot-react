import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentPage from "./pages/DocumentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:myid" element={<DocumentPage />} />
      </Routes>
    </Router>
  );
}

export default App;

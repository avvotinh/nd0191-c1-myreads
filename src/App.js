import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./pages/ListBooks";
import SearchBooks from "./pages/SearchBooks";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;

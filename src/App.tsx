import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route></Route>
      </Routes>
    </main>
  );
}

export default App;

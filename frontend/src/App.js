import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./page/create/Create";
import Update from "./page/update/UpdateComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

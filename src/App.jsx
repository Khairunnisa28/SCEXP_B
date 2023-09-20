import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Create />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
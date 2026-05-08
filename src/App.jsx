import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DochomePage from "./pages/doctors/DochomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/" element={<Login />} />

        {/* DOCTOR HOME PAGE */}
        <Route path="/doctor" element={<DochomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
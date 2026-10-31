import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PainelAdmin from "./pagess/PainelAdmin";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/painel" replace />} />
        <Route path="/painel" element={<PainelAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
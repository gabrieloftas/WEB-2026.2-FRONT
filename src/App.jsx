import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PainelUsuarios from "./pages/PainelUsuarios";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/usuarios" replace />} />
        <Route path="/usuarios" element={<PainelUsuarios />} />
        <Route path="*" element={<Navigate to="/usuarios" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
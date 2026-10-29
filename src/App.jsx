import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GerenciamentoJogos from "./Pages/GerenciamentoJogos";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/jogos" replace />} />
        <Route path="/jogos" element={<GerenciamentoJogos />} />
        <Route path="*" element={<Navigate to="/jogos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
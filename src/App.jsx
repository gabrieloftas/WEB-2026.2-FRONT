import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeCatalogo from './pages/HomeCatalogo';
import DetalhesJogo from './pages/DetalhesJogo';
import Ranking from './pages/Ranking';
import Perfil from './pages/Perfil';
import PartidaEmAndamento from './pages/PartidaEmAndamento'; // 1. Importe a tela

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
        {/* Telas do sistema */}
        <Route path="/home" element={<HomeCatalogo />} />
        <Route path="/dashboard" element={<HomeCatalogo />} />
        <Route path="/detalhes-jogo" element={<DetalhesJogo />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/partida" element={<PartidaEmAndamento />} /> {/* 2. Adicione a rota */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
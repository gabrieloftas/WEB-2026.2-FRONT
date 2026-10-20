import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeCatalogo from './pages/HomeCatalogo';
import DetalhesJogo from './pages/DetalhesJogo';
import Ranking from './pages/Ranking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Agora a raiz "/" abre o Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
        {/* Demais telas do sistema */}
        <Route path="/home" element={<HomeCatalogo />} />
        <Route path="/dashboard" element={<HomeCatalogo />} />
        <Route path="/detalhes-jogo" element={<DetalhesJogo />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
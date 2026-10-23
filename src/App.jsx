import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';

// Páginas
import Login from './pages/Login';
import HomeCatalogo from './pages/HomeCatalogo';
import DetalhesJogo from './pages/DetalhesJogo';
import Ranking from './pages/Ranking';
import Perfil from './pages/Perfil';
import PartidaEmAndamento from './pages/PartidaEmAndamento';
import PartidaConcluida from './pages/PartidaConcluida';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas SEM a Navbar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas COM a Navbar (Aninhadas no MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomeCatalogo />} />
          <Route path="/dashboard" element={<HomeCatalogo />} />
          <Route path="/detalhes-jogo" element={<DetalhesJogo />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/partida" element={<PartidaEmAndamento />} />
          <Route path="/partida-concluida" element={<PartidaConcluida />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
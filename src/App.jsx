import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeCatalogo from './pages/HomeCatalogo';
import DetalhesJogo from './pages/DetalhesJogo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCatalogo />} />
        <Route path="/home" element={<HomeCatalogo />} />     {/* <-- Adicione esta linha para aceitar /home */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<HomeCatalogo />} />
        <Route path="/detalhes-jogo" element={<DetalhesJogo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
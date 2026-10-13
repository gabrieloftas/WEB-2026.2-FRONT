import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeCatalogo from './pages/HomeCatalogo'; // Importe a nova tela

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<HomeCatalogo />} /> {/* Nova rota adicionada */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
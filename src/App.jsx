import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Recovery from "./pages/Recovery";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/recovery" replace />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="*" element={<Navigate to="/recovery" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
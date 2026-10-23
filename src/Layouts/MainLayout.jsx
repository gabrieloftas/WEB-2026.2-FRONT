import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col min-h-screen">
        {/* Navbar fixa para todas as telas dentro deste Layout */}
        <Navbar />

        {/* Conteúdo dinâmico da rota atual */}
        <Outlet />
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/150/1d4ed8/FFFFFF?text=Avatar';
  };

  // Função auxiliar para definir as classes do Tailwind baseada no estado ativo da rota
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-[#1d4ed8] font-bold no-underline border-b-2 border-[#1d4ed8] pb-1'
      : 'text-[#4a4742] font-bold no-underline hover:text-[#1d4ed8] transition-colors pb-1';

  return (
    <header className="w-full h-20 bg-white border-b border-[#ebe5df] px-6 md:px-10 flex items-center justify-between sticky top-0 z-50">
      {/* Marca / Logo */}
      <Link to="/dashboard" className="flex items-center gap-2 no-underline">
        <div className="w-9 h-9 flex items-center justify-center bg-[#facc15] rounded-xl shadow-sm">
          <svg className="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
        <span className="font-outfit text-2xl font-normal text-[#2a2927]">Kiddos</span>
      </Link>

      {/* Links de Navegação Dinâmicos */}
      <nav className="hidden md:flex items-center gap-8 font-outfit font-bold text-base">
        <NavLink to="/dashboard" className={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/ranking" className={navLinkStyle}>
          Ranking
        </NavLink>
        <NavLink to="/perfil" className={navLinkStyle}>
          Perfil
        </NavLink>
        <NavLink to="/configuracoes" className={navLinkStyle}>
          Configurações
        </NavLink>
      </nav>

      {/* Ações do Usuário */}
      <div className="flex items-center gap-4">
        {/* Busca */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#faf8f2] rounded-full w-64 border border-transparent focus-within:border-[#1d4ed8] transition-all">
          <svg className="w-4 h-4 text-[#7d7b77]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar jogos..."
            className="bg-transparent text-sm text-[#2a2927] placeholder-[#7d7b77] outline-none w-full font-figtree"
          />
        </div>

        {/* Notificação */}
        <button aria-label="Notificações" className="relative w-10 h-10 flex items-center justify-center bg-[#faf8f2] rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-[#2a2927]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#f25c5c] rounded-full ring-2 ring-white"></span>
        </button>

        {/* Perfil */}
        <div className="flex items-center gap-3">
          <img
            src="/images/avatar-23.png"
            onError={handleImageError}
            alt="Léo Santos"
            className="w-10 h-10 rounded-full object-cover border border-[#ebe5df]"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-outfit font-bold text-sm text-[#2a2927]">Léo Santos</span>
            <span className="font-figtree font-bold text-[11px] text-[#1d4ed8]">Nível 12 • Explorador</span>
          </div>
        </div>
      </div>
    </header>
  );
}
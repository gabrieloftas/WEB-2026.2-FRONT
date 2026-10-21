import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Perfil() {
  const [activeTab, setActiveTab] = useState('conquistas');
  const [searchTerm, setSearchTerm] = useState('');

  // Função auxiliar para carregar imagens ou fallback com iniciais/cor
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/150/1d4ed8/FFFFFF?text=Avatar';
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col bg-[#f8fbff]">

        {/* 1. NAVBAR REUTILIZÁVEL */}
        <header className="w-full h-20 bg-white border-b border-[#ebe5df] px-6 md:px-10 flex items-center justify-between sticky top-0 z-50">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 flex items-center justify-center bg-[#facc15] rounded-xl shadow-sm">
              <svg className="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <span className="font-outfit text-2xl font-bold text-[#2a2927]">Kiddos</span>
          </Link>

          {/* Links de Navegação */}
          <nav className="hidden md:flex items-center gap-8 font-outfit font-bold text-base">
            <Link to="/dashboard" className="text-[#4a4742] hover:text-[#1d4ed8] transition-colors no-underline">Home</Link>
            <Link to="/perfil" className="text-[#1d4ed8] no-underline">Perfil</Link>
            <Link to="/ranking" className="text-[#4a4742] hover:text-[#1d4ed8] transition-colors no-underline">Ranking</Link>
            <Link to="/configuracoes" className="text-[#4a4742] hover:text-[#1d4ed8] transition-colors no-underline">Configurações</Link>
          </nav>

          {/* Ações da Navbar */}
          <div className="flex items-center gap-6">
            {/* Campo de Busca */}
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

            {/* Ícone de Notificação */}
            <button aria-label="Notificações" className="relative w-10 h-10 flex items-center justify-center bg-[#faf8f2] rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-[#2a2927]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#f25c5c] rounded-full ring-2 ring-white"></span>
            </button>

            {/* Perfil Simplificado */}
            <div className="flex items-center gap-3">
              <img
                src="/images/avatarwrapper-23.png"
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

        {/* 2. CONTEÚDO PRINCIPAL DO PERFIL */}
        <main className="flex flex-col items-center gap-8 px-6 lg:px-24 py-10 w-full">
          
          {/* Cartão de Cabeçalho do Usuário */}
          <section className="w-full bg-white border border-[#ebe5df] rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="relative">
                <img
                  src="/images/avatarwrapper-23.png"
                  onError={handleImageError}
                  alt="Léo Santos"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#facc15] object-cover shadow-md"
                />
                <span className="absolute bottom-0 right-0 bg-[#1d4ed8] text-white p-2 rounded-full shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-outfit text-2xl md:text-3xl font-bold text-[#2a2927]">Léo Santos</h1>
                <p className="font-figtree text-sm text-[#7d7b77]">@leo_explorador • Entrou em Setembro de 2026</p>
                <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] font-outfit font-bold text-xs rounded-full">
                    Nível 12 • Explorador Cósmico
                  </span>
                  <span className="px-3 py-1 bg-[#facc15]/20 text-[#1e3a8a] font-outfit font-bold text-xs rounded-full">
                    #5 no Ranking
                  </span>
                </div>
              </div>
            </div>

            {/* Ações do Perfil */}
            <div className="flex items-center gap-3">
              <Link
                to="/configuracoes"
                className="px-5 py-2.5 bg-[#faf8f2] hover:bg-[#ebe5df] text-[#2a2927] font-outfit font-bold text-sm rounded-xl transition-colors no-underline border border-[#ebe5df]"
              >
                Editar Perfil
              </Link>
            </div>
          </section>

          {/* Abas do Perfil */}
          <div className="w-full flex items-center gap-2 border-b border-[#ebe5df] pb-4">
            <button
              onClick={() => setActiveTab('conquistas')}
              className={`px-6 py-2.5 rounded-xl font-outfit font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'conquistas'
                  ? 'bg-[#facc15] text-[#1e3a8a] shadow-sm'
                  : 'text-[#7d7b77] hover:text-[#2a2927] hover:bg-gray-100'
              }`}
            >
              Conquistas & Selos
            </button>
            <button
              onClick={() => setActiveTab('historico')}
              className={`px-6 py-2.5 rounded-xl font-outfit font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'historico'
                  ? 'bg-[#facc15] text-[#1e3a8a] shadow-sm'
                  : 'text-[#7d7b77] hover:text-[#2a2927] hover:bg-gray-100'
              }`}
            >
              Jogos Finalizados
            </button>
          </div>

          {/* Grade de Conquistas */}
          {activeTab === 'conquistas' && (
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 bg-[#fff9e6] border border-[#facc15] rounded-2xl flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-base text-[#2a2927]">Explorador Cósmico</h3>
                  <p className="font-figtree text-xs text-[#7d7b77]">Concluiu 8 jogos de ciência espacial.</p>
                </div>
              </div>

              <div className="bg-white border border-[#ebe5df] rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 bg-[#eef2ff] border border-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl">
                  📐
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-base text-[#2a2927]">Mestre da Geometria</h3>
                  <p className="font-figtree text-xs text-[#7d7b77]">Acertou 100% dos desafios de matemática.</p>
                </div>
              </div>

              <div className="bg-white border border-[#ebe5df] rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 bg-[#fef2f2] border border-[#f25c5c] rounded-2xl flex items-center justify-center text-2xl">
                  🔥
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-base text-[#2a2927]">Imparável</h3>
                  <p className="font-figtree text-xs text-[#7d7b77]">Entrou 7 dias seguidos no Kiddos.</p>
                </div>
              </div>

            </section>
          )}

          {/* Histórico de Jogos */}
          {activeTab === 'historico' && (
            <section className="w-full bg-white border border-[#ebe5df] rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="font-outfit font-bold text-lg text-[#2a2927]">Últimas Atividades</h3>
              <ul className="divide-y divide-[#ebe5df] font-figtree text-sm">
                <li className="py-3 flex justify-between items-center">
                  <span className="font-bold text-[#2a2927]">Aventura Espacial dos Números</span>
                  <span className="text-[#1d4ed8] font-bold">+600 XP</span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  <span className="font-bold text-[#2a2927]">Desafio das Frações Mágicas</span>
                  <span className="text-[#1d4ed8] font-bold">+450 XP</span>
                </li>
              </ul>
            </section>
          )}

        </main>
      </div>
    </div>
  );
}
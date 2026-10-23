import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PartidaEmAndamento() {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para tratar erros de carregamento de imagem (fallback)
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/150/1d4ed8/FFFFFF?text=Avatar';
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col bg-[#f8fbff] min-h-screen">

       

        {/* 2. CONTEÚDO DA PARTIDA */}
        <main className="flex flex-col gap-6 px-6 md:px-14 py-8 w-full">
          
          {/* Cabeçalho da Partida e Botões de Ação */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 w-full">
            <div className="flex flex-col gap-1">
              <span className="font-outfit font-bold text-xs text-[#1d4ed8] uppercase tracking-wide">
                Home › Matemática › Soma Frenética
              </span>
              <h1 className="font-outfit text-3xl md:text-4xl font-normal text-[#2a2927]">Soma Frenética</h1>
              <p className="font-figtree text-sm text-[#7d7b77]">
                Partida de <strong className="text-[#2a2927]">Léo Santos</strong> • progresso salvo no perfil
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex items-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#ebe5df] rounded-2xl hover:bg-gray-50 transition-colors shadow-sm font-outfit font-bold text-sm text-[#2a2927] cursor-pointer">
                <svg className="w-4 h-4 text-[#2a2927]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reiniciar Partida
              </button>

              <Link to="/dashboard" className="flex items-center gap-2 px-5 py-2.5 bg-[#faf8f2] border border-[#ebe5df] rounded-2xl hover:bg-[#ebe5df] transition-colors shadow-sm font-outfit font-bold text-sm text-[#2a2927] no-underline">
                <svg className="w-4 h-4 text-[#2a2927]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sair com segurança
              </Link>
            </div>
          </div>

          {/* Painel Principal e Resumo Lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
            
            {/* Painel do Jogo (Esquerda / Principal) */}
            <div className="lg:col-span-8 bg-white border border-[#ebe5df] rounded-3xl p-6 shadow-md flex flex-col gap-6">
              
              {/* Estado da Partida */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 w-full">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#41cd93] rounded-full animate-pulse"></span>
                  <span className="font-outfit font-bold text-xs text-[#41cd93] tracking-wide">PARTIDA EM ANDAMENTO</span>
                </div>
                <span className="font-figtree text-xs text-[#7d7b77]">Estoure as bolhas que somam 12!</span>
              </div>

              {/* Área do Jogo (Simulação das Bolhas Interativas) */}
              <div className="relative w-full h-[380px] bg-gradient-to-b from-[#f0f7ff] to-[#e6f0fa] rounded-2xl overflow-hidden flex flex-col items-center justify-between p-6 border border-[#dcecfb]">
                
                {/* Desafio Central */}
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-[#ebe5df] flex flex-col items-center">
                  <span className="font-figtree font-bold text-[11px] text-[#7d7b77] tracking-wider">ESTOURE A SOMA</span>
                  <span className="font-outfit text-3xl font-bold text-[#1d4ed8]">12</span>
                </div>

                {/* Bolhas Numéricas espalhadas */}
                <div className="absolute inset-0 flex items-center justify-around pointer-events-none p-4">
                  <div className="pointer-events-auto cursor-pointer w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-outfit text-xl font-bold shadow-lg border-2 border-white/80 hover:scale-110 transition-transform">
                    7
                  </div>
                  <div className="pointer-events-auto cursor-pointer w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center font-outfit text-xl font-bold shadow-lg border-2 border-white/80 hover:scale-110 transition-transform">
                    5
                  </div>
                  <div className="pointer-events-auto cursor-pointer w-18 h-18 bg-[#facc15] text-[#1e3a8a] rounded-full flex items-center justify-center font-outfit text-2xl font-bold shadow-lg border-2 border-white/80 hover:scale-110 transition-transform animate-bounce">
                    12
                  </div>
                  <div className="pointer-events-auto cursor-pointer w-16 h-16 bg-[#41cd93] text-white rounded-full flex items-center justify-center font-outfit text-xl font-bold shadow-lg border-2 border-white/80 hover:scale-110 transition-transform">
                    9
                  </div>
                  <div className="pointer-events-auto cursor-pointer w-16 h-16 bg-[#f25c5c] text-white rounded-full flex items-center justify-center font-outfit text-xl font-bold shadow-lg border-2 border-white/80 hover:scale-110 transition-transform">
                    3
                  </div>
                </div>

                {/* Indicador de Sequência de Desafios */}
                <div className="self-center bg-black/70 backdrop-blur-sm px-4 py-1.5 rounded-full z-10">
                  <span className="font-outfit font-bold text-xs text-white">DESAFIO 4 DE 10</span>
                </div>

              </div>

            </div>

            {/* Resumo Lateral (Direita) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Perfil em Jogo */}
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                <img
                  src="/images/avatar-68.png"
                  onError={handleImageError}
                  alt="Léo Santos"
                  className="w-12 h-12 rounded-full border-2 border-[#ffc83b] object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-outfit font-bold text-base text-[#2a2927]">Léo Santos</span>
                  <span className="font-figtree text-xs text-[#1d4ed8]">@leo_explorador</span>
                </div>
              </div>

              {/* Indicador: Pontuação */}
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-[#fff9e6] rounded-xl flex items-center justify-center text-[#ffc83b]">
                  ⭐
                </div>
                <div className="flex flex-col">
                  <span className="font-figtree font-bold text-xs text-[#7d7b77]">Pontuação</span>
                  <span className="font-outfit font-bold text-xl text-[#2a2927]">1.280 pts</span>
                </div>
              </div>

              {/* Indicador: Tempo Restante */}
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center text-[#1d4ed8]">
                  ⏰
                </div>
                <div className="flex flex-col">
                  <span className="font-figtree font-bold text-xs text-[#7d7b77]">Tempo restante</span>
                  <span className="font-outfit font-bold text-xl text-[#2a2927]">06:42</span>
                </div>
              </div>

              {/* Indicador: Acertos Seguidos */}
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-[#e8faf2] rounded-xl flex items-center justify-center text-[#41cd93]">
                  ⚡
                </div>
                <div className="flex flex-col">
                  <span className="font-figtree font-bold text-xs text-[#7d7b77]">Acertos seguidos</span>
                  <span className="font-outfit font-bold text-xl text-[#2a2927]">7</span>
                </div>
              </div>

              {/* Dica de Segurança */}
              <div className="bg-[#ebf5ff] border border-[#d2e8ff] rounded-2xl p-4 flex flex-col gap-2">
                <span className="font-outfit font-bold text-sm text-[#2563eb]">Pode sair tranquilo!</span>
                <p className="font-figtree text-xs text-[#4a4742] leading-relaxed">
                  Ao sair, confirmaremos antes e guardaremos o que já foi conquistado.
                </p>
              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
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
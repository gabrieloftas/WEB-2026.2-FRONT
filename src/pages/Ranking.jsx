import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ranking() {
  const [activeTab, setActiveTab] = useState('semanal');

  // Dados mockados para a tabela
  const leaderboardData = [
    {
      pos: '#4',
      name: 'Pedro Cunha',
      avatar: '/images/frame-77.png',
      badge: 'Colecionador de Ouro',
      xp: '4.850 XP',
      games: '12 jogos finalizados',
      isCurrentUser: false,
    },
    {
      pos: '#5',
      name: 'Léo Santos (Você)',
      avatar: '/images/frame-85.png',
      badge: 'Explorador Cósmico',
      xp: '4.800 XP',
      games: '8 jogos finalizados',
      isCurrentUser: true,
    },
    {
      pos: '#6',
      name: 'Alice Barbosa',
      avatar: '/images/frame-96.png',
      badge: 'Aventureira Estelar',
      xp: '4.100 XP',
      games: '9 jogos finalizados',
      isCurrentUser: false,
    },
    {
      pos: '#7',
      name: 'Felipe Soares',
      avatar: '/images/frame-104.png',
      badge: 'Mestre das Frações',
      xp: '3.950 XP',
      games: '6 jogos finalizados',
      isCurrentUser: false,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col bg-[#f8fbff]">

       

        {/* 2. CORPO PRINCIPAL DO RANKING */}
        <main className="flex flex-col items-center gap-10 px-6 lg:px-28 py-10 w-full">
          
          {/* Cabeçalho da Página e Abas */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-outfit text-3xl md:text-4xl font-normal text-[#2a2927]">Melhores Exploradores</h1>
              <p className="font-figtree text-sm md:text-base text-[#7d7b77]">Aprenda de montão e mostre sua sabedoria no topo do mundo!</p>
            </div>

            {/* Abas Alternáveis */}
            <div className="flex items-center gap-2 p-1.5 bg-white border border-[#ebe5df] rounded-2xl shadow-sm">
              <button
                onClick={() => setActiveTab('semanal')}
                className={`px-5 py-2 rounded-xl font-outfit font-bold text-sm transition-all cursor-pointer ${
                  activeTab === 'semanal'
                    ? 'bg-[#facc15] text-[#1e3a8a] shadow-sm'
                    : 'text-[#7d7b77] hover:text-[#2a2927]'
                }`}
              >
                Semanal
              </button>
              <button
                onClick={() => setActiveTab('geral')}
                className={`px-5 py-2 rounded-xl font-outfit font-bold text-sm transition-all cursor-pointer ${
                  activeTab === 'geral'
                    ? 'bg-[#facc15] text-[#1e3a8a] shadow-sm'
                    : 'text-[#7d7b77] hover:text-[#2a2927]'
                }`}
              >
                Geral
              </button>
            </div>
          </div>

          {/* 3. PÓDIO DE VENCEDORES (1º, 2º e 3º lugares) */}
          <section className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-center md:items-end gap-6 my-4">
            
            {/* 2º Lugar - Prata */}
            <div className="order-2 md:order-1 w-full md:w-1/3 bg-white border border-[#ebe5df] rounded-3xl p-6 shadow-md flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform">
              <img src="/images/avatarwrap-39.png" alt="Mariana Alves" className="w-20 h-20 rounded-full border-4 border-[#ebe5df] object-cover" />
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-outfit font-bold text-lg text-[#2a2927]">Mariana Alves</span>
                <span className="font-figtree text-sm text-[#7d7b77]">@mari_astronoma</span>
              </div>
              <div className="w-full py-3 bg-[#faf8f2] rounded-2xl flex justify-center items-center gap-2">
                <svg className="w-5 h-5 text-[#7d7b77]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="font-outfit font-bold text-base text-[#2a2927]">#2 • 5.920 XP</span>
              </div>
            </div>

            {/* 1º Lugar - Ouro (Destaque Maior no Centro) */}
            <div className="order-1 md:order-2 w-full md:w-1/3 bg-white border-2 border-[#ffc83b] rounded-[28px] p-8 shadow-xl flex flex-col items-center gap-4 relative -mt-4 hover:-translate-y-1 transition-transform">
              <div className="absolute -top-6 text-[#ffc83b]">
                <svg className="w-8 h-8 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 11a2 2 0 012-2h10a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z"/></svg>
              </div>
              <img src="/images/avatarwrap-50.png" alt="Thiago Mendes" className="w-24 h-24 rounded-full border-4 border-[#ffc83b] object-cover mt-2" />
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-outfit font-bold text-xl text-[#2a2927]">Thiago Mendes</span>
                <span className="font-figtree text-sm text-[#7d7b77]">@thi_cientista</span>
              </div>
              <div className="w-full py-4 bg-[#fff9e6] rounded-2xl flex justify-center items-center gap-2">
                <svg className="w-6 h-6 text-[#ffc83b]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="font-outfit font-bold text-xl text-[#2a2927]">#1 • 6.450 XP</span>
              </div>
            </div>

            {/* 3º Lugar - Bronze */}
            <div className="order-3 w-full md:w-1/3 bg-white border border-[#ebe5df] rounded-3xl p-6 shadow-md flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform">
              <img src="/images/avatarwrap-59.png" alt="Gabi Lima" className="w-20 h-20 rounded-full border-4 border-[#ebe5df] object-cover" />
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-outfit font-bold text-lg text-[#2a2927]">Gabi Lima</span>
                <span className="font-figtree text-sm text-[#7d7b77]">@gabi_gamer</span>
              </div>
              <div className="w-full py-3 bg-[#faf8f2] rounded-2xl flex justify-center items-center gap-2">
                <svg className="w-5 h-5 text-[#1d4ed8]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="font-outfit font-bold text-base text-[#2a2927]">#3 • 5.100 XP</span>
              </div>
            </div>

          </section>

          {/* 4. TABELA DE CLASSIFICAÇÃO */}
          <section className="w-full bg-white border border-[#ebe5df] rounded-3xl shadow-lg overflow-hidden">
            
            {/* Cabeçalho da Tabela */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#faf8f2] border-b border-[#ebe5df] font-outfit font-bold text-xs md:text-sm text-[#2a2927]">
              <div className="col-span-1">POSIÇÃO</div>
              <div className="col-span-4 md:col-span-3">HERÓI</div>
              <div className="hidden md:block col-span-3">CONQUISTA</div>
              <div className="col-span-4 md:col-span-2">XP SEMANAL</div>
              <div className="col-span-3 md:col-span-3 text-right md:text-left">JOGOS ATIVOS</div>
            </div>

            {/* Linhas da Tabela */}
            <div className="divide-y divide-[#ebe5df]">
              {leaderboardData.map((user, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 items-center transition-colors ${
                    user.isCurrentUser
                      ? 'bg-[#fff9e6] border-y border-[#ffc83b]'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Posição */}
                  <div className={`col-span-1 font-outfit font-bold text-base ${user.isCurrentUser ? 'text-[#1d4ed8]' : 'text-[#7d7b77]'}`}>
                    {user.pos}
                  </div>

                  {/* Herói (Avatar + Nome) */}
                  <div className="col-span-4 md:col-span-3 flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                    <div className="flex items-center gap-2">
                      <span className={`font-outfit text-sm md:text-base ${user.isCurrentUser ? 'font-normal' : 'font-bold'} text-[#2a2927]`}>
                        {user.name}
                      </span>
                      {user.isCurrentUser && (
                        <span className="px-2 py-0.5 bg-[#facc15] text-[#1e3a8a] font-outfit font-bold text-[10px] rounded-md">
                          VOCÊ
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Conquista */}
                  <div className={`hidden md:block col-span-3 font-figtree text-sm ${user.isCurrentUser ? 'font-bold text-[#2a2927]' : 'text-[#7d7b77]'}`}>
                    {user.badge}
                  </div>

                  {/* XP */}
                  <div className="col-span-4 md:col-span-2 font-outfit font-bold text-sm md:text-base text-[#2a2927]">
                    {user.xp}
                  </div>

                  {/* Jogos Ativos */}
                  <div className={`col-span-3 md:col-span-3 text-right md:text-left font-figtree text-xs md:text-sm ${user.isCurrentUser ? 'font-bold text-[#2a2927]' : 'text-[#7d7b77]'}`}>
                    {user.games}
                  </div>
                </div>
              ))}
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}
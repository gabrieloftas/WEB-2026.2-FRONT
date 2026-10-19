import React from 'react';
import { Link } from 'react-router-dom';

export default function DetalhesJogo() {
  return (
    <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center">
      <div className="w-full max-w-[1440px] min-h-[1400px] flex flex-col bg-[#f8fbff] px-4 md:px-10">
        
        {/* Navbar */}
        <header className="w-full h-20 bg-white border-b border-[#ebe5df] px-6 md:px-10 flex items-center justify-between">
          {/* Logo e Marca */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 flex items-center justify-center bg-[#facc15] rounded-xl">
              <svg className="w-4 h-4 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <span className="font-outfit text-xl font-bold text-[#2a2927]">Kiddos</span>
          </Link>

          {/* Links de Navegação */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-outfit font-bold text-base text-[#1d4ed8] no-underline">Home</Link>
            <Link to="/perfil" className="font-outfit font-bold text-base text-[#4a4742] no-underline hover:text-[#1d4ed8]">Perfil</Link>
            <Link to="/ranking" className="font-outfit font-bold text-base text-[#4a4742] no-underline hover:text-[#1d4ed8]">Ranking</Link>
            <Link to="/configuracoes" className="font-outfit font-bold text-base text-[#4a4742] no-underline hover:text-[#1d4ed8]">Configurações</Link>
          </nav>

          {/* Ações da Navbar (Busca, Notificação, Perfil do Usuário) */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#faf8f2] rounded-full w-64 border border-transparent focus-within:border-[#1d4ed8]">
              <svg className="w-4 h-4 text-[#7d7b77]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Buscar jogos..." className="bg-transparent text-sm text-[#7d7b77] outline-none w-full" />
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center bg-[#faf8f2] rounded-full cursor-pointer">
              <svg className="w-5 h-5 text-[#2a2927]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#f25c5c] rounded-full ring-2 ring-white"></span>
            </div>

            <div className="flex items-center gap-3">
              <img src="/images/avatarwrapper-23.png" alt="Avatar Léo Santos" className="w-10 h-10 rounded-full object-cover" />
              <div className="hidden sm:flex flex-col">
                <span className="font-outfit font-bold text-sm text-[#2a2927]">Léo Santos</span>
                <span className="font-figtree font-bold text-[11px] text-[#1d4ed8]">Nível 12 • Explorador</span>
              </div>
            </div>
          </div>
        </header>

        {/* Corpo Principal da Página de Detalhes */}
        <main className="flex flex-col gap-10 py-10 w-full">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-outfit font-bold">
            <Link to="/" className="text-[#1d4ed8] no-underline hover:underline">Home</Link>
            <svg className="w-4 h-4 text-[#7d7b77]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            <span className="text-[#7d7b77]">Matemática</span>
            <svg className="w-4 h-4 text-[#7d7b77]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            <span className="text-[#1d4ed8]">Soma Frenética</span>
          </nav>

          {/* Cartão de Destaque do Jogo */}
          <section className="bg-white border border-[#ebe5df] rounded-[28px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row gap-10 items-center">
            
            {/* Imagem de Pré-visualização */}
            <div className="w-full lg:w-[47%]">
              <img src="/images/previewpane-37.png" alt="Pré-visualização Soma Frenética" className="w-full h-auto rounded-[20px] object-cover" />
            </div>

            {/* Informações e Ações do Jogo */}
            <div className="w-full lg:flex-1 flex flex-col justify-between gap-6">
              
              <div className="flex flex-col gap-3">
                {/* Badges / Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#fef9c3] border border-[#1d4ed8] rounded-xl font-outfit font-bold text-xs text-[#1d4ed8]">Matemática</span>
                  <span className="px-3 py-1.5 bg-[#eff6ff] border border-[#2563eb] rounded-xl font-outfit font-bold text-xs text-[#2563eb]">Recomendado para você</span>
                  <span className="px-3 py-1.5 bg-[#e8faf2] border border-[#41cd93] rounded-xl font-outfit font-bold text-xs text-[#41cd93]">Idade: 8-12 anos</span>
                </div>
                <h1 className="font-outfit font-normal text-3xl md:text-4xl text-[#2a2927]">Soma Frenética</h1>
              </div>

              {/* Estatísticas Rápidas */}
              <div className="flex flex-wrap gap-8 py-2 border-y border-[#ebe5df]">
                <div className="flex flex-col gap-1">
                  <span className="font-outfit font-bold text-xs text-[#7d7b77] tracking-wider">AVALIAÇÃO</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#ffc83b]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <span className="font-outfit font-bold text-base text-[#2a2927]">4.8 / 5.0</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-outfit font-bold text-xs text-[#7d7b77] tracking-wider">JOGADAS</span>
                  <span className="font-outfit font-bold text-base text-[#2a2927]">12.4K partidas</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-outfit font-bold text-xs text-[#7d7b77] tracking-wider">TEMPO MÉDIO</span>
                  <span className="font-outfit font-bold text-base text-[#2a2927]">10 minutos</span>
                </div>
              </div>

              {/* Descrição */}
              <p className="font-figtree text-sm md:text-base leading-relaxed text-[#7d7b77]">
                Estoure bolhas de ar coloridas que flutuam na tela! Cada bolha carrega um número secreto. Seu herói precisa estourar a combinação exata de bolhas para que a soma delas bata com o número do desafio. Cuidado com as bolhas de água, elas reduzem o tempo limite!
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#facc15] hover:bg-[#f8c900] text-[#1e3a8a] font-outfit font-bold text-base rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-all cursor-pointer">
                  <svg className="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
                  Jogar Agora!
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-[#ebe5df] hover:bg-gray-50 text-[#2a2927] font-outfit font-bold text-base rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.1)] transition-all cursor-pointer">
                  <svg className="w-5 h-5 text-[#2a2927]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  Reiniciar Partida
                </button>
              </div>

            </div>
          </section>

          {/* Seção de Jogos Similares */}
          <section className="flex flex-col gap-6 mt-6">
            <h2 className="font-outfit font-bold text-2xl text-[#2a2927]">Jogos Similares de Matemática & Lógica</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card Similar 1 */}
              <div className="bg-white border border-[#ebe5df] rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] flex flex-col">
                <img src="/images/gamethumbnail-75.png" alt="Subtração Submarina" className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 text-[#ffc83b]">
                        {[...Array(4)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                        <svg className="w-3.5 h-3.5 text-[#ebe5df]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#7d7b77]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <span>8 min</span>
                      </div>
                    </div>
                    <h3 className="font-outfit font-bold text-lg text-[#2a2927]">Subtração Submarina</h3>
                    <p className="font-figtree text-xs text-[#7d7b77] leading-relaxed">Navegue o submarino herói desviando de obstáculos e estourando peixes numéricos.</p>
                  </div>
                  <div className="pt-3 border-t border-[#ebe5df] flex justify-between items-center cursor-pointer group">
                    <span className="font-outfit font-bold text-sm text-[#1d4ed8]">Jogar Agora</span>
                    <svg className="w-4 h-4 text-[#1d4ed8] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>

              {/* Card Similar 2 */}
              <div className="bg-white border border-[#ebe5df] rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] flex flex-col">
                <img src="/images/gamethumbnail-100.png" alt="Multiplica-Gemas" className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 text-[#ffc83b]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#7d7b77]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <span>15 min</span>
                      </div>
                    </div>
                    <h3 className="font-outfit font-bold text-lg text-[#2a2927]">Multiplica-Gemas</h3>
                    <p className="font-figtree text-xs text-[#7d7b77] leading-relaxed">Estoure minerais raros em forma de gemas geométricas multiplicando seus pontos.</p>
                  </div>
                  <div className="pt-3 border-t border-[#ebe5df] flex justify-between items-center cursor-pointer group">
                    <span className="font-outfit font-bold text-sm text-[#1d4ed8]">Jogar Agora</span>
                    <svg className="w-4 h-4 text-[#1d4ed8] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>

              {/* Card Similar 3 */}
              <div className="bg-white border border-[#ebe5df] rounded-[24px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.04)] flex flex-col">
                <img src="/images/gamethumbnail-125.png" alt="Divisão das Frações" className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 text-[#ffc83b]">
                        {[...Array(4)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                        <svg className="w-3.5 h-3.5 text-[#ebe5df]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#7d7b77]">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <span>12 min</span>
                      </div>
                    </div>
                    <h3 className="font-outfit font-bold text-lg text-[#2a2927]">Divisão das Frações</h3>
                    <p className="font-figtree text-xs text-[#7d7b77] leading-relaxed">Ajude o mestre cuca a dividir as fatias de pizza corretamente para os clientes comilões.</p>
                  </div>
                  <div className="pt-3 border-t border-[#ebe5df] flex justify-between items-center cursor-pointer group">
                    <span className="font-outfit font-bold text-sm text-[#1d4ed8]">Jogar Agora</span>
                    <svg className="w-4 h-4 text-[#1d4ed8] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
 
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PartidaConcluida() {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para tratar erros de carregamento de imagem (fallback)
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/150/1d4ed8/FFFFFF?text=Avatar';
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col bg-[#f8fbff] min-h-screen">

       

        {/* 2. CONTEÚDO DA PARTIDA CONCLUÍDA */}
        <main className="flex flex-col items-center justify-center px-4 md:px-56 py-12 w-full flex-grow">
          
          {/* Cartão de Conclusão */}
          <div className="w-full max-w-3xl bg-white border border-[#ebe5df] rounded-[32px] p-8 md:p-12 shadow-xl flex flex-col items-center gap-8">
            
            {/* Ícone de Troféu */}
            <div className="w-20 h-20 bg-[#fff9e6] border-2 border-[#ffc83b] rounded-full flex items-center justify-center text-[#1d4ed8] shadow-md">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m0-11V4m-3 3h6m-7 3a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            {/* Mensagem de Parabéns */}
            <div className="flex flex-col items-center text-center gap-2">
              <h1 className="font-outfit text-3xl md:text-4xl font-normal text-[#2a2927]">Mandou bem, Léo!</h1>
              <p className="font-figtree text-base text-[#7d7b77]">
                Você concluiu Soma Frenética e bateu seu melhor combo.
              </p>
            </div>

            {/* Caixa de Feedback de Sucesso */}
            <div className="w-full bg-[#e8faf2] border border-[#41cd93] rounded-2xl p-4 flex items-center gap-4">
              <div className="w-8 h-8 bg-[#41cd93] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                ✓
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-sm text-[#41cd93]">Pontuação salva com sucesso</span>
                <p className="font-figtree text-xs text-[#4a4742]">
                  O resultado foi vinculado automaticamente ao perfil de Léo Santos.
                </p>
              </div>
            </div>

            {/* Indicadores / Estatísticas da Partida (Grid de 3 itens) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              
              {/* Pontuação Final */}
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-[#fff9e6] rounded-xl flex items-center justify-center text-[#ffc83b] flex-shrink-0">
                  ⭐
                </div>
                <div className="flex flex-col">
                  <span className="font-figtree font-bold text-xs text-[#7d7b77]">Pontuação final</span>
                  <span className="font-outfit font-normal text-2xl text-[#2a2927]">2.450 pts</span>
                </div>
              </div>

              {/* Tempo Total */}
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center text-[#1d4ed8] flex-shrink-0">
                  ⏰
                </div>
                <div className="flex flex-col">
                  <span className="font-figtree font-bold text-xs text-[#7d7b77]">Tempo total</span>
                  <span className="font-outfit font-normal text-2xl text-[#2a2927]">08:17</span>
                </div>
              </div>

              {/* XP Recebido */}
              <div className="bg-white border border-[#ebe5df] rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-[#e8faf2] rounded-xl flex items-center justify-center text-[#41cd93] flex-shrink-0">
                  ✨
                </div>
                <div className="flex flex-col">
                  <span className="font-figtree font-bold text-xs text-[#7d7b77]">XP recebido</span>
                  <span className="font-outfit font-normal text-2xl text-[#2a2927]">+180 XP</span>
                </div>
              </div>

            </div>

            {/* Conquista / Medalha */}
            <div className="w-full bg-[#fef9c3] rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#facc15] rounded-xl flex items-center justify-center text-[#1e3a8a] flex-shrink-0 shadow-sm">
                🏆
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-base text-[#2a2927]">Novo recorde pessoal</span>
                <p className="font-figtree text-xs text-[#7d7b77]">Você ganhou a medalha Mestre da Soma!</p>
              </div>
            </div>

            {/* Botões de Ação Finais */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-[#facc15] hover:bg-[#eab308] transition-colors rounded-2xl shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)] font-outfit font-bold text-base text-[#1e3a8a] cursor-pointer">
                <svg className="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Jogar novamente
              </button>

              <Link to="/dashboard" className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-white border border-[#ebe5df] hover:bg-gray-50 transition-colors rounded-2xl shadow-sm font-outfit font-bold text-base text-[#2a2927] no-underline">
                <svg className="w-5 h-5 text-[#2a2927]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Voltar ao catálogo
              </Link>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
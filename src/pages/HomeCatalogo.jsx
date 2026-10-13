import React from 'react'
import logoIcon from '../assets/images/vector-9.svg'
import bannerImage from '../assets/images/bannerimage-36.png'
import gameThumb1 from '../assets/images/gamethumbnail-68.png'
import gameThumb2 from '../assets/images/gamethumbnail-93.png'
import gameThumb3 from '../assets/images/gamethumbnail-118.png'
import gameThumb4 from '../assets/images/gamethumbnail-144.png'
import gameThumb5 from '../assets/images/gamethumbnail-169.png'
import gameThumb6 from '../assets/images/gamethumbnail-194.png'
import profileAvatar from '../assets/images/profileavatar-220.png'
import miniThumb1 from '../assets/images/minithumb-248.png'
import miniThumb2 from '../assets/images/minithumb-255.png'

function HomeCatalogo() {
  const jogosRecomendados = [
    {
      id: 1,
      titulo: 'Soma Frenética',
      descricao: 'Estoure bolhas com os números corretos para resolver somas matemáticas dinâmicas!',
      tempo: '10 min',
      imagem: gameThumb1,
      tags: ['Mais Jogado', 'Matemática'],
    },
    {
      id: 2,
      titulo: 'Detetive das Palavras',
      descricao: 'Encontre as letras escondidas no cenário para preencher as lacunas e desvendar o mistério.',
      tempo: '15 min',
      imagem: gameThumb2,
      tags: ['Recomendado', 'Português'],
    },
    {
      id: 3,
      titulo: 'O Reino dos Átomos',
      descricao: 'Combine elementos da tabela periódica para criar reações mágicas e defender o reino científico.',
      tempo: '12 min',
      imagem: gameThumb3,
      tags: ['Novo!', 'Ciências'],
    },
    {
      id: 4,
      titulo: 'Cavaleiro do Código',
      descricao: 'Escreva sequências lógicas com blocos visuais para guiar o pequeno cavaleiro até o castelo.',
      tempo: '20 min',
      imagem: gameThumb4,
      tags: ['Lógica'],
    },
    {
      id: 5,
      titulo: 'Super Memória Animal',
      descricao: 'Encontre os pares corretos de animais raros antes que o tempo acabe e aprenda curiosidades!',
      tempo: '8 min',
      imagem: gameThumb5,
      tags: ['Lógica'],
    },
    {
      id: 6,
      titulo: 'Ecos do Passado',
      descricao: 'Explore ruínas antigas respondendo perguntas sobre história global e arqueologia.',
      tempo: '25 min',
      imagem: gameThumb6,
      tags: ['Novo!', 'Ciências'],
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col items-center">
      {/* Barra de Navegação */}
      <nav className="w-full bg-white border-b border-[#ebe5df] px-10 h-20 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[38px] flex items-center justify-center bg-[#facc15] rounded-xl">
            <img src={logoIcon} alt="Logo Kiddos" className="w-5 h-5" />
          </div>
          <span className="text-[22px] font-bold text-[#2a2927]">Kiddos</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-base font-bold text-[#1d4ed8]">Home</a>
          <a href="#" className="text-base font-bold text-[#4a4742] hover:text-[#1d4ed8]">Perfil</a>
          <a href="#" className="text-base font-bold text-[#4a4742] hover:text-[#1d4ed8]">Ranking</a>
          <a href="#" className="text-base font-bold text-[#4a4742] hover:text-[#1d4ed8]">Configurações</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 bg-[#faf8f2] px-4 py-2 rounded-full w-64 border border-[#ebe5df]">
            <svg className="w-4 h-4 text-[#7d7b77]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" placeholder="Buscar jogos..." className="bg-transparent text-sm text-[#7d7b77] outline-none w-full" />
          </div>

          <button className="relative p-2.5 bg-[#faf8f2] rounded-full hover:bg-gray-100 transition">
            <svg className="w-5 h-5 text-[#2a2927]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f25c5c] rounded-full"></span>
          </button>

          <div className="flex items-center gap-3">
            <img src={profileAvatar} alt="Léo Santos" className="w-10 h-10 rounded-full object-cover border-2 border-[#facc15]" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#2a2927]">Léo Santos</p>
              <p className="text-[11px] font-bold text-[#1d4ed8]">Nível 12 • Explorador</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Corpo Principal */}
      <main className="w-full max-w-[1440px] px-10 py-10 flex gap-8 items-start">
        
        {/* Conteúdo Esquerdo / Central */}
        <div className="flex-1 flex flex-col gap-10">
          
          {/* Banner de Desafio da Semana */}
          <section className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-[28px] p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex flex-col gap-3 max-w-lg">
              <div className="bg-[#2a2927] text-[#ffc83b] text-xs font-bold px-3 py-1.5 rounded-xl self-start tracking-wide">
                DESAFIO DA SEMANA
              </div>
              <h1 className="text-3xl font-bold">Labirinto Matemático: Alge-Maze!</h1>
              <p className="text-sm opacity-90 leading-relaxed">
                Resolva problemas de álgebra rápida para achar a saída do calabouço e ganhe 2x XP!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img src={bannerImage} alt="Baú do Tesouro" className="w-60 rounded-2xl shadow-lg object-cover" />
              <button className="bg-[#f25c5c] hover:bg-[#e04848] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.3)] transition active:translate-y-0.5">
                Jogar Agora
              </button>
            </div>
          </section>

          {/* Categorias de Aprendizado */}
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-[#2a2927]">Categorias de Aprendizado</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-4 bg-[#ff9494]/20 border-2 border-[#b00000] rounded-2xl cursor-pointer hover:bg-[#ff9494]/30 transition">
                <div className="w-10 h-10 bg-[#facc15] rounded-xl flex items-center justify-center font-bold text-[#1e3a8a]">+</div>
                <span className="font-bold text-[#2a2927]">Matemática</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-200 border-2 border-black rounded-2xl cursor-pointer hover:bg-gray-300 transition">
                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold">🧩</div>
                <span className="font-bold text-[#2a2927]">Lógica</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#ebf5ff] border-2 border-[#2563eb] rounded-2xl cursor-pointer hover:bg-[#dbeafe] transition">
                <div className="w-10 h-10 bg-[#2563eb] text-white rounded-xl flex items-center justify-center font-bold">📖</div>
                <span className="font-bold text-[#2a2927]">Português</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#e8faf2] border-2 border-[#41cd93] rounded-2xl cursor-pointer hover:bg-[#d1fae5] transition">
                <div className="w-10 h-10 bg-[#41cd93] text-white rounded-xl flex items-center justify-center font-bold">🧪</div>
                <span className="font-bold text-[#2a2927]">Ciências</span>
              </div>
            </div>
          </section>

          {/* Seus Jogos Recomendados */}
          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#2a2927]">Seus Jogos Recomendados</h2>
              <a href="#" className="text-sm font-bold text-[#1d4ed8] hover:underline">Ver todos os jogos →</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jogosRecomendados.map((jogo) => (
                <div key={jogo.id} className="bg-white border border-[#ebe5df] rounded-[24px] overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition">
                  <div>
                    <div className="relative">
                      <img src={jogo.imagem} alt={jogo.titulo} className="w-full h-44 object-cover" />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        {jogo.tags.map((tag, idx) => (
                          <span key={idx} className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex text-[#ffc83b] text-sm">★★★★★</div>
                        <div className="flex items-center gap-1 text-xs text-[#7d7b77]">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          <span>{jogo.tempo}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#2a2927]">{jogo.titulo}</h3>
                      <p className="text-xs text-[#7d7b77] leading-relaxed">{jogo.descricao}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-3 border-t border-[#ebe5df] flex justify-between items-center">
                    <button className="text-sm font-bold text-[#1d4ed8] hover:underline">Jogar Agora</button>
                    <span className="text-[#1d4ed8] font-bold">→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Barra Lateral Direita (Sidebar Dashboard) */}
        <aside className="w-full lg:w-80 bg-white border border-[#ebe5df] rounded-[28px] p-6 shadow-lg flex flex-col gap-8 shrink-0">
          {/* Perfil Header */}
          <div className="flex flex-col items-center text-center gap-3">
            <img src={profileAvatar} alt="Léo Santos" className="w-20 h-20 rounded-full border-4 border-[#ffc83b] object-cover shadow-sm" />
            <div>
              <h3 className="text-lg font-bold text-[#2a2927]">Léo Santos</h3>
              <p className="text-xs text-[#7d7b77]">@leo_explorador</p>
            </div>

            <div className="w-full flex flex-col gap-1.5 mt-2 bg-[#faf8f2] p-3 rounded-2xl">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#1d4ed8]">XP • Nível 12</span>
                <span className="text-[#7d7b77]">4.800 / 6.000 XP</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#facc15] h-full w-[80%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Medalhas Recentes */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#2a2927]">Medalhas Recentes</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#faf8f2] p-3 rounded-2xl flex flex-col items-center text-center gap-1.5 border border-[#ebe5df]">
                <div className="text-xl">🏆</div>
                <span className="text-[11px] font-bold text-[#2a2927]">Mestre Soma</span>
              </div>
              <div className="bg-[#faf8f2] p-3 rounded-2xl flex flex-col items-center text-center gap-1.5 border border-[#ebe5df]">
                <div className="text-xl">🧠</div>
                <span className="text-[11px] font-bold text-[#2a2927]">Pense Rápido</span>
              </div>
              <div className="bg-[#faf8f2] p-3 rounded-2xl flex flex-col items-center text-center gap-1.5 border border-[#ebe5df]">
                <div className="text-xl">⚛️</div>
                <span className="text-[11px] font-bold text-[#2a2927]">Cientista</span>
              </div>
            </div>
          </div>

          {/* Continue Jogando */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#2a2927]">Continue Jogando</h4>
            
            <div className="flex items-center gap-3 p-2 bg-[#faf8f2] rounded-2xl border border-[#ebe5df] cursor-pointer hover:bg-gray-100 transition">
              <img src={miniThumb1} alt="Miniatura" className="w-12 h-12 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#2a2927] truncate">Cavaleiro do Código</p>
                <p className="text-[10px] text-[#7d7b77]">Última vez há 2 horas</p>
              </div>
              <span className="text-[#1d4ed8] font-bold pr-2">›</span>
            </div>

            <div className="flex items-center gap-3 p-2 bg-[#faf8f2] rounded-2xl border border-[#ebe5df] cursor-pointer hover:bg-gray-100 transition">
              <img src={miniThumb2} alt="Miniatura" className="w-12 h-12 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#2a2927] truncate">Soma Frenética</p>
                <p className="text-[10px] text-[#7d7b77]">Última vez ontem</p>
              </div>
              <span className="text-[#1d4ed8] font-bold pr-2">›</span>
            </div>
          </div>
        </aside>

      </main>
    </div>
  )
}

export default HomeCatalogo
import { useState } from 'react';

/* ============ ÍCONES (SVG dentro do próprio arquivo) ============ */
const svgBase = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function EditIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function TrashIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M3 6h18" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function BellIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}

function LogoIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Kiddos">
      <rect width="48" height="48" rx="13" fill="#F7C915" />
      <rect
        x="11"
        y="13"
        width="26"
        height="22"
        rx="5"
        fill="none"
        stroke="#1E3A9F"
        strokeWidth="3.2"
      />
      <path
        d="M16.5 24h7M20 20.5v7"
        stroke="#1E3A9F"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="29.5" cy="22" r="1.9" fill="#1E3A9F" />
      <circle cx="26.5" cy="27" r="1.9" fill="#1E3A9F" />
    </svg>
  );
}

/* ============ DADOS DE EXEMPLO (depois vêm do back-end) ============ */
const USUARIO = { nome: 'Léo Santos', nivel: 12, titulo: 'Explorador', avatar: null };

const JOGOS_INICIAIS = [
  {
    id: 1,
    titulo: 'Soma Frenética',
    categoria: 'Matemática',
    descricao: 'Resolva somas rápidas e dinâmicas antes que o tempo acabe.',
    status: 'Ativo',
    cor: 'from-sky-300 to-purple-300',
  },
  {
    id: 2,
    titulo: 'Memória Animal',
    categoria: 'Lógica',
    descricao: 'Encontre os pares corretos de animais raros antes que o tempo acabe.',
    status: 'Ativo',
    cor: 'from-amber-200 to-emerald-300',
  },
];

const CATEGORIAS = ['Todas', 'Matemática', 'Lógica', 'Português', 'Ciências'];

/* ============ TELA ============ */
export default function GerenciamentoJogos() {
  const [jogos, setJogos] = useState(JOGOS_INICIAIS);
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [jogoParaExcluir, setJogoParaExcluir] = useState(null);

  const jogosFiltrados = jogos.filter((j) => {
    const texto = `${j.titulo} ${j.categoria} ${j.descricao}`.toLowerCase();
    const bateBusca = texto.includes(busca.toLowerCase());
    const bateCategoria = categoria === 'Todas' || j.categoria === categoria;
    return bateBusca && bateCategoria;
  });

  const confirmarExclusao = () => {
    setJogos((atual) => atual.filter((j) => j.id !== jogoParaExcluir.id));
    setJogoParaExcluir(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-8">
        <a href="#home" className="flex items-center gap-2.5">
          <LogoIcon className="w-9 h-9" />
          <span className="font-extrabold text-xl tracking-tight text-[#1a1a1a]">
            Kiddos
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-xs font-semibold text-gray-600">
          <li><a href="#home" className="hover:text-gray-900">Home</a></li>
          <li><a href="#painel" className="text-blue-600">Painel de Controle</a></li>
          <li><a href="#relatorios" className="hover:text-gray-900">Relatórios</a></li>
          <li><a href="#config" className="hover:text-gray-900">Configurações</a></li>
        </ul>

        <div className="ml-auto flex items-center gap-4">
          <span className="bg-blue-600 text-white text-[9px] font-bold px-2.5 py-1 rounded-full">
            ADMINISTRADOR
          </span>

          <input
            type="text"
            placeholder="Buscar..."
            className="hidden md:block w-44 bg-[#f6f4ef] rounded-full px-4 py-2 text-xs focus:outline-none"
          />

          <button
            aria-label="Notificações"
            className="relative w-10 h-10 rounded-full bg-[#f6f4ef] hover:bg-gray-200 text-[#1a1a1a] flex items-center justify-center transition-colors"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#f6f4ef]" />
          </button>

          <div className="flex items-center gap-3">
            {USUARIO.avatar ? (
              <img
                src={USUARIO.avatar}
                alt={USUARIO.nome}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500" />
            )}
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-bold text-[#1a1a1a]">{USUARIO.nome}</p>
              <p className="text-xs font-semibold text-blue-600">
                Nível {USUARIO.nivel} • {USUARIO.titulo}
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1a1a1a]">Gerenciamento de Jogos</h1>
            <p className="text-xs text-gray-500 mt-1">
              Cadastre, edite e remova os desafios educativos da plataforma.
            </p>
          </div>
          <button className="bg-[#FFC107] hover:bg-[#ffb300] text-[#1a1a1a] font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors">
            + Adicionar Novo Jogo
          </button>
        </div>

        {/* FILTROS */}
        <div className="mt-6 flex flex-wrap gap-3">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Filtrar por nome, categoria ou palavra-chave..."
            className="flex-1 min-w-[240px] bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-yellow-400"
          >
            {CATEGORIAS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* TABELA */}
        <div className="mt-5 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#fdf3d8] text-[10px] font-bold text-gray-700 uppercase">
              <tr>
                <th className="px-5 py-3">Preview</th>
                <th className="px-5 py-3">Título</th>
                <th className="px-5 py-3">Categoria</th>
                <th className="px-5 py-3 hidden md:table-cell">Descrição</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {jogosFiltrados.map((jogo) => (
                <tr key={jogo.id} className="border-t border-gray-100">
                  <td className="px-5 py-3">
                    <div className={`w-14 h-10 rounded-lg bg-gradient-to-br ${jogo.cor}`} />
                  </td>
                  <td className="px-5 py-3 text-xs font-bold">{jogo.titulo}</td>
                  <td className="px-5 py-3">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      {jogo.categoria}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-[11px] text-gray-500 hidden md:table-cell">
                    {jogo.descricao}
                  </td>
                  <td className="px-5 py-3">
                    <span className="bg-green-50 text-green-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      {jogo.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        aria-label={`Editar ${jogo.titulo}`}
                        className="w-10 h-10 rounded-xl bg-[#f3f1ee] hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
                      >
                        <EditIcon />
                      </button>
                      <button
                        aria-label={`Excluir ${jogo.titulo}`}
                        onClick={() => setJogoParaExcluir(jogo)}
                        className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {jogosFiltrados.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-xs text-gray-400">
                    Nenhum jogo encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* MODAL DE EXCLUSÃO */}
      {jogoParaExcluir && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-xs p-6 text-center shadow-xl">
            <div className="w-11 h-11 mx-auto rounded-full bg-red-50 text-red-500 flex items-center justify-center">
              <TrashIcon className="w-5 h-5" />
            </div>
            <h2 className="mt-3 text-sm font-bold">Confirmar Exclusão?</h2>
            <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
              Tem certeza que deseja apagar o jogo "{jogoParaExcluir.titulo}"? Esta ação não
              poderá ser desfeita.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setJogoParaExcluir(null)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-semibold py-2.5 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarExclusao}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-[11px] font-semibold py-2.5 rounded-xl transition-colors"
              >
                Confirmar Exclusão
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import { useState } from 'react';


const svgBase = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function LogoIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Kiddos">
      <rect width="48" height="48" rx="13" fill="#F7C915" />
      <rect x="11" y="13" width="26" height="22" rx="5" fill="none" stroke="#1E3A9F" strokeWidth="3.2" />
      <path d="M16.5 24h7M20 20.5v7" stroke="#1E3A9F" strokeWidth="3" strokeLinecap="round" />
      <circle cx="29.5" cy="22" r="1.9" fill="#1E3A9F" />
      <circle cx="26.5" cy="27" r="1.9" fill="#1E3A9F" />
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

function SearchIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

/* ============ AVATAR: foto (se houver URL) ou iniciais do nome ============ */
function iniciais(nome) {
  const partes = nome.trim().split(/\s+/);
  const primeira = partes[0]?.[0] ?? '';
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : '';
  return (primeira + ultima).toUpperCase();
}

function Avatar({ nome, src, cor = 'from-gray-300 to-gray-500', className = 'w-9 h-9 text-xs' }) {
  if (src) {
    return <img src={src} alt={nome} className={`${className} rounded-full object-cover shrink-0`} />;
  }
  return (
    <div
      aria-label={nome}
      className={`${className} rounded-full bg-gradient-to-br ${cor} text-white font-bold flex items-center justify-center shrink-0`}
    >
      {iniciais(nome)}
    </div>
  );
}

/* ============ DADOS DE EXEMPLO (depois vêm do back-end) ============ */
const ADMIN = { nome: 'Léo Santos', nivel: 12, titulo: 'Explorador', avatar: null };

const USUARIOS_INICIAIS = [
  {
    id: 1,
    nome: 'Léo Santos',
    nickname: 'leo_explorador',
    email: 'leo_explorador@eduplay.com',
    cadastro: '20 Fev 2026',
    status: 'Ativo',
    partidas: 38,
    cor: 'from-orange-300 to-orange-500',
  },
  {
    id: 2,
    nome: 'Mariana Alves',
    nickname: 'mari_astronoma',
    email: 'mari_astronoma@eduplay.com',
    cadastro: '18 Fev 2026',
    status: 'Ativo',
    partidas: 42,
    cor: 'from-purple-300 to-purple-500',
  },
  {
    id: 3,
    nome: 'Gabi Lima',
    nickname: 'gabi_gamer',
    email: 'gabi_gamer@eduplay.com',
    cadastro: '10 Fev 2026',
    status: 'Inativo',
    partidas: 12,
    cor: 'from-amber-400 to-amber-600',
  },
];

const FILTROS_STATUS = ['Todos os Status', 'Ativo', 'Inativo'];

/* ============ TELA ============ */
export default function PainelUsuarios() {
  const [usuarios, setUsuarios] = useState(USUARIOS_INICIAIS);
  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos os Status');

  const usuariosFiltrados = usuarios.filter((u) => {
    const texto = `${u.nome} ${u.email} ${u.nickname}`.toLowerCase();
    const bateBusca = texto.includes(busca.toLowerCase());
    const bateStatus = filtroStatus === 'Todos os Status' || u.status === filtroStatus;
    return bateBusca && bateStatus;
  });

  // TODO: chamar a API (PATCH /usuarios/:id) quando o back-end estiver pronto.
  const alternarStatus = (id) => {
    setUsuarios((atual) =>
      atual.map((u) =>
        u.id === id ? { ...u, status: u.status === 'Ativo' ? 'Inativo' : 'Ativo' } : u
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-8 py-3 flex items-center gap-8">
        <a href="#home" className="flex items-center gap-2.5">
          <LogoIcon className="w-9 h-9" />
          <span className="font-extrabold text-xl tracking-tight text-[#1a1a1a]">Kiddos</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-500">
          <li><a href="#home" className="hover:text-gray-900">Home</a></li>
          <li><a href="#painel" className="text-blue-700">Painel de Controle</a></li>
          <li><a href="#relatorios" className="hover:text-gray-900">Relatórios</a></li>
          <li><a href="#config" className="hover:text-gray-900">Configurações</a></li>
        </ul>

        <div className="ml-auto flex items-center gap-4">
          <span className="bg-blue-600 text-white text-[9px] font-bold px-3 py-1.5 rounded-full">
            ADMINISTRADOR
          </span>

          <div className="hidden md:flex items-center gap-2 w-52 bg-[#f6f4ef] rounded-full px-4 py-2 text-xs text-gray-500">
            <SearchIcon className="w-3.5 h-3.5" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent flex-1 min-w-0 focus:outline-none placeholder-gray-500"
            />
          </div>

          <button
            aria-label="Notificações"
            className="relative w-10 h-10 rounded-full bg-[#f6f4ef] hover:bg-gray-200 text-[#1a1a1a] flex items-center justify-center transition-colors"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#f6f4ef]" />
          </button>

          <div className="flex items-center gap-2.5">
            <Avatar
              nome={ADMIN.nome}
              src={ADMIN.avatar}
              cor="from-orange-300 to-orange-500"
              className="w-10 h-10 text-sm"
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-xs font-bold text-[#1a1a1a]">{ADMIN.nome}</p>
              <p className="text-[10px] font-semibold text-blue-600">
                Nível {ADMIN.nivel} • {ADMIN.titulo}
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <main className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-3xl font-extrabold text-[#1a1a1a]">Painel de Usuários</h1>
        <p className="text-xs text-gray-500 mt-1">
          Visualize heróis ativos, desative contas e acompanhe o engajamento geral.
        </p>

        {/* FILTROS */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex-1 min-w-[260px] flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-4 py-3 focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-400">
            <SearchIcon className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisar por nome, e-mail ou nickname do aluno..."
              className="flex-1 min-w-0 text-xs focus:outline-none placeholder-gray-400"
            />
          </div>

          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-medium text-gray-700 focus:outline-none focus:border-yellow-400"
          >
            {FILTROS_STATUS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* TABELA */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#fff7dc] text-[10px] font-bold text-[#1a1a1a] uppercase">
              <tr>
                <th className="px-5 py-3.5">Avatar Aluno</th>
                <th className="px-5 py-3.5">E-mail</th>
                <th className="px-5 py-3.5">Cadastro</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Partidas</th>
                <th className="px-5 py-3.5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuariosFiltrados.map((u) => {
                const ativo = u.status === 'Ativo';
                return (
                  <tr key={u.id} className={`border-t border-gray-100 ${ativo ? '' : 'opacity-70'}`}>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <Avatar nome={u.nome} src={u.avatar} cor={u.cor} className="w-9 h-9 text-xs" />
                        <span className="text-xs font-bold text-[#1a1a1a]">{u.nome}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-[11px] text-gray-500">{u.email}</td>
                    <td className="px-5 py-3.5 text-[11px] text-gray-500">{u.cadastro}</td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-md ${
                          ativo ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[11px] text-gray-700">{u.partidas} jogos</td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                        onClick={() => alternarStatus(u.id)}
                        className={`text-[10px] font-semibold px-3 py-1.5 rounded-md border transition-colors ${
                          ativo
                            ? 'border-red-300 bg-red-50 text-red-500 hover:bg-red-100'
                            : 'border-gray-300 bg-white text-[#1a1a1a] hover:bg-gray-100'
                        }`}
                      >
                        {ativo ? 'Desativar' : 'Reativar'}
                      </button>
                    </td>
                  </tr>
                );
              })}
              {usuariosFiltrados.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-xs text-gray-400">
                    Nenhum usuário encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
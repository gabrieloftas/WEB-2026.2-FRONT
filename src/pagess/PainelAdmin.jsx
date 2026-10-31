/* ============ ÍCONES (SVG dentro do próprio arquivo) ============ */
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

function GamepadIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <rect x="2" y="6" width="20" height="12" rx="4" />
      <path d="M7 10v4M5 12h4" />
      <circle cx="15.5" cy="11" r="0.8" fill="currentColor" />
      <circle cx="18" cy="13" r="0.8" fill="currentColor" />
    </svg>
  );
}

function UsersIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ActivityIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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

function ShieldCheckIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ChartIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

/* ============ DADOS DE EXEMPLO (depois vêm do back-end) ============ */
const USUARIO = { nome: 'Léo Santos', detalhe: 'Acesso exclusivo', avatar: null };

const ATIVIDADE = 'Soma Frenética foi atualizado hoje às 09:20.';

/* ============ COMPONENTES DA TELA ============ */
function CartaoEstatistica({ rotulo, valor, icone, corIcone }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="flex items-start justify-between">
        <span className="text-xs text-gray-500">{rotulo}</span>
        <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${corIcone}`}>
          {icone}
        </span>
      </div>
      <p className="mt-3 text-3xl font-extrabold text-[#1a1a1a]">{valor}</p>
    </div>
  );
}

function CartaoAcesso({ icone, corIcone, titulo, descricao, href, rotuloLink }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6">
      <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${corIcone}`}>
        {icone}
      </span>
      <h3 className="mt-5 text-xl font-extrabold text-[#1a1a1a]">{titulo}</h3>
      <p className="mt-2 text-xs text-gray-500 leading-relaxed">{descricao}</p>
      <a
        href={href}
        className="mt-5 inline-block text-xs font-bold text-blue-700 hover:text-blue-900"
      >
        {rotuloLink} →
      </a>
    </div>
  );
}

/* ============ TELA ============ */
export default function PainelAdmin() {
  const primeiroNome = USUARIO.nome.split(' ')[0];

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-8 py-3 flex items-center">
        <a href="/painel" className="flex items-center gap-2.5">
          <LogoIcon className="w-9 h-9" />
          <span className="font-extrabold text-xl tracking-tight text-[#1a1a1a]">Kiddos</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-500 mx-auto">
          <li><a href="/painel" className="hover:text-gray-900">Home</a></li>
          <li><a href="/painel" className="text-blue-700">Painel de Controle</a></li>
          <li><a href="/relatorios" className="hover:text-gray-900">Relatórios</a></li>
          <li><a href="/configuracoes" className="hover:text-gray-900">Configurações</a></li>
        </ul>

        <div className="ml-auto md:ml-0 flex items-center gap-4">
          <span className="bg-blue-600 text-white text-[9px] font-bold px-3 py-1.5 rounded-full">
            ADMINISTRADOR
          </span>
          <div className="flex items-center gap-2.5">
            {USUARIO.avatar ? (
              <img src={USUARIO.avatar} alt={USUARIO.nome} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500" />
            )}
            <div className="hidden sm:block leading-tight">
              <p className="text-xs font-bold text-[#1a1a1a]">{USUARIO.nome}</p>
              <p className="text-[10px] text-blue-600">{USUARIO.detalhe}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <main className="max-w-6xl mx-auto px-8 py-8 flex flex-col gap-6">
        {/* BANNER */}
        <section className="relative overflow-hidden rounded-3xl bg-[#2563eb] px-8 py-8 text-white">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold tracking-wide">
            ÁREA EXCLUSIVA • ADMINISTRADOR
          </span>
          <h1 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight">
            Olá, {primeiroNome}! O universo Kiddos está sob seus cuidados.
          </h1>
          <p className="mt-2 text-xs text-blue-100">
            Este painel contém ferramentas exclusivas para organizar jogos, usuários e a segurança
            da plataforma.
          </p>

          <div className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/40 bg-white/10 items-center justify-center">
            <ShieldCheckIcon className="w-9 h-9" />
          </div>
        </section>

        {/* ESTATÍSTICAS */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CartaoEstatistica
            rotulo="Jogos publicados"
            valor="24"
            corIcone="bg-[#fff6b8] text-[#1a1a1a]"
            icone={<GamepadIcon className="w-5 h-5" />}
          />
          <CartaoEstatistica
            rotulo="Usuários ativos"
            valor="1.248"
            corIcone="bg-blue-50 text-blue-700"
            icone={<UsersIcon className="w-5 h-5" />}
          />
          <CartaoEstatistica
            rotulo="Partidas hoje"
            valor="386"
            corIcone="bg-green-50 text-green-600"
            icone={<ActivityIcon className="w-5 h-5" />}
          />
          <CartaoEstatistica
            rotulo="Ações pendentes"
            valor="3"
            corIcone="bg-blue-50 text-blue-700"
            icone={<BellIcon className="w-5 h-5" />}
          />
        </section>

        {/* ACESSOS RÁPIDOS */}
        <section>
          <h2 className="text-xl font-extrabold text-[#1a1a1a]">Acessos rápidos</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <CartaoAcesso
              corIcone="bg-[#F7C915] text-[#1a1a1a]"
              icone={<GamepadIcon className="w-6 h-6" />}
              titulo="Gerenciar jogos"
              descricao="Adicione novos desafios, atualize conteúdos e controle quais jogos estão ativos."
              href="/jogos"
              rotuloLink="Abrir jogos"
            />
            <CartaoAcesso
              corIcone="bg-[#2563eb] text-white"
              icone={<UsersIcon className="w-6 h-6" />}
              titulo="Gerenciar usuários"
              descricao="Consulte perfis, acompanhe o engajamento e desative contas quando necessário."
              href="/usuarios"
              rotuloLink="Abrir usuários"
            />
            <CartaoAcesso
              corIcone="bg-[#2563eb] text-white"
              icone={<ChartIcon className="w-6 h-6" />}
              titulo="Ver relatórios"
              descricao="Acompanhe desempenho, categorias populares e evolução de aprendizagem."
              href="/relatorios"
              rotuloLink="Abrir relatórios"
            />
          </div>
        </section>

        {/* ÚLTIMA ATIVIDADE */}
        <section className="flex flex-wrap items-center justify-between gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4">
          <div>
            <p className="text-sm font-bold text-[#1a1a1a]">Última atividade administrativa</p>
            <p className="text-[11px] text-gray-500 mt-0.5">{ATIVIDADE}</p>
          </div>
          <a href="/historico" className="text-xs font-bold text-blue-700 hover:text-blue-900">
            Ver histórico →
          </a>
        </section>
      </main>
    </div>
  );
}
import { useState } from 'react';

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

function AlertIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v5M12 16.5v.01" />
    </svg>
  );
}

function InfoIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8v.01" />
    </svg>
  );
}

function SaveIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...svgBase}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <path d="M17 21v-8H7v8M7 3v5h8" />
    </svg>
  );
}

/* ============ DADOS ============ */
const USUARIO = { nome: 'Léo Santos', detalhe: 'Acesso exclusivo', avatar: null };
const CATEGORIAS = ['Matemática', 'Lógica', 'Português', 'Ciências'];
const FORM_VAZIO = { titulo: '', categoria: '', descricao: '', link: '' };

/* ============ VALIDAÇÃO ============ */
function validar(form) {
  const erros = {};
  if (!form.titulo.trim()) erros.titulo = 'Informe o título do jogo.';
  if (!form.categoria) erros.categoria = 'Escolha uma categoria.';
  if (form.descricao.trim().length < 20) {
    erros.descricao = 'Escreva uma descrição com pelo menos 20 caracteres.';
  }
  if (!/^https:\/\/\S+\.\S+/.test(form.link.trim())) {
    erros.link = 'Insira um link válido começando com https://';
  }
  return erros;
}

/* ============ CAMPO REUTILIZÁVEL ============ */
function Campo({ rotulo, erro, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-[#1a1a1a]">{rotulo} *</label>
      {children}
      {erro && <span className="text-[11px] text-red-500">{erro}</span>}
    </div>
  );
}

const estiloCampo = (erro) =>
  `w-full rounded-xl border px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
    erro
      ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-300'
      : 'border-gray-200 bg-white focus:border-yellow-400 focus:ring-yellow-400'
  }`;

/* ============ TELA ============ */
export default function AdicionarJogo() {
  const [form, setForm] = useState(FORM_VAZIO);
  const [tentouSalvar, setTentouSalvar] = useState(false);
  const [salvo, setSalvo] = useState(false);

  const erros = validar(form);
  const mostrarErros = tentouSalvar ? erros : {};
  const temErro = Object.keys(mostrarErros).length > 0;
  const temRascunho = Object.values(form).some((v) => v.trim() !== '');

  const atualizar = (campo) => (e) => {
    setSalvo(false);
    setForm((atual) => ({ ...atual, [campo]: e.target.value }));
  };

  const salvar = (e) => {
    e.preventDefault();
    setTentouSalvar(true);
    if (Object.keys(erros).length > 0) return;

    // TODO: enviar para a API (POST /jogos) quando o back-end estiver pronto.
    console.log('Jogo salvo:', form);
    setSalvo(true);
    setForm(FORM_VAZIO);
    setTentouSalvar(false);
  };

  const cancelar = () => {
    setForm(FORM_VAZIO);
    setTentouSalvar(false);
    window.history.back();
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-8 py-3 flex items-center">
        <a href="#home" className="flex items-center gap-2.5">
          <LogoIcon className="w-9 h-9" />
          <span className="font-extrabold text-xl tracking-tight text-[#1a1a1a]">Kiddos</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-500 mx-auto">
          <li><a href="#home" className="hover:text-gray-900">Home</a></li>
          <li><a href="#painel" className="text-blue-700">Painel de Controle</a></li>
          <li><a href="#relatorios" className="hover:text-gray-900">Relatórios</a></li>
          <li><a href="#config" className="hover:text-gray-900">Configurações</a></li>
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
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <p className="text-[10px] font-semibold text-blue-700">
          Painel de Controle <span className="mx-1">›</span> Jogos <span className="mx-1">›</span> Novo jogo
        </p>

        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1a1a1a]">Adicionar Novo Jogo</h1>
            <p className="text-xs text-gray-500 mt-1">
              Cadastre um novo desafio educativo no catálogo Kiddos.
            </p>
          </div>
          <span className="bg-red-50 text-red-500 text-[10px] font-semibold px-3 py-1 rounded-full">
            * Campos obrigatórios
          </span>
        </div>

        {/* CARD DO FORMULÁRIO */}
        <form
          onSubmit={salvar}
          noValidate
          className="mt-6 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col gap-5"
        >
          {salvo && (
            <div className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-xs font-semibold text-green-700">
              Jogo salvo com sucesso!
            </div>
          )}

          {temErro && (
            <div className="flex items-center gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3">
              <span className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center shrink-0">
                <AlertIcon className="w-4 h-4" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-red-500">Revise os campos obrigatórios</p>
                <p className="text-[11px] text-red-500">Ainda faltam informações para salvar este jogo.</p>
              </div>
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <Campo rotulo="Título" erro={mostrarErros.titulo}>
              <input
                type="text"
                value={form.titulo}
                onChange={atualizar('titulo')}
                placeholder="Preencha este campo"
                className={estiloCampo(mostrarErros.titulo)}
              />
            </Campo>

            <Campo rotulo="Categoria" erro={mostrarErros.categoria}>
              <select
                value={form.categoria}
                onChange={atualizar('categoria')}
                className={estiloCampo(mostrarErros.categoria)}
              >
                <option value="">Selecione uma categoria</option>
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </Campo>
          </div>

          <Campo rotulo="Descrição" erro={mostrarErros.descricao}>
            <textarea
              rows={4}
              value={form.descricao}
              onChange={atualizar('descricao')}
              placeholder="Preencha este campo"
              className={`${estiloCampo(mostrarErros.descricao)} resize-none`}
            />
          </Campo>

          <Campo rotulo="Link do jogo" erro={mostrarErros.link}>
            <input
              type="text"
              value={form.link}
              onChange={atualizar('link')}
              placeholder="https://"
              className={estiloCampo(mostrarErros.link)}
            />
          </Campo>

          {/* Aviso informativo */}
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3 text-[11px] text-gray-600">
            <InfoIcon className="w-4 h-4 text-blue-600 shrink-0" />
            O jogo ficará como rascunho até que todos os campos sejam validados. Use uma descrição
            curta, divertida e adequada para crianças.
          </div>

          {/* Rodapé */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-[10px] text-gray-400">
              {temRascunho ? 'Último rascunho salvo agora' : 'Nenhum rascunho ainda'}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={cancelar}
                className="rounded-xl bg-[#f3f1ee] hover:bg-gray-200 px-6 py-3 text-xs font-semibold text-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-[#FFC107] hover:bg-[#ffb300] px-6 py-3 text-xs font-bold text-[#1a1a1a] shadow-sm transition-colors"
              >
                <SaveIcon className="w-4 h-4" />
                Salvar jogo
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
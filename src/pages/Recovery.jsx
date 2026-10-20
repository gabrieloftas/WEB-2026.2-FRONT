import { useState } from 'react';

export default function Recovery() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(true);

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleRecovery = async () => {
    if (!validateEmail(email)) {
      setError(true);
      return;
    }
    
    setError(false);
    setIsLoading(true);

    // Simula resposta do servidor
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    alert(`Sucesso! Um link de recuperação foi enviado para ${email}.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9fa] font-sans">
  <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
        
        {/* HEADER */}
        <header className="bg-[#1f1f1f] text-white flex items-center justify-center p-4 relative h-14">
          <button
            aria-label="Menu"
            className="absolute left-4 p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-sm font-semibold tracking-widest">
            KIDDOS
          </h1>
        </header>

        {/* ÁREA PRINCIPAL */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
          <div className="bg-white w-full max-w-[440px] mx-auto rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-5">
            <div className="text-center">
              <h2 className="text-[#1a1a1a] font-bold text-lg">
                Esqueceu a chave secreta?
              </h2>
              <p className="text-gray-400 text-[11px] mt-1">
                Digite seu e-mail cadastrado.
              </p>
            </div>

            {/* CAMPO DE EMAIL */}
            <div className="flex flex-col gap-1.5 mt-2 w-full">
              <label htmlFor="email" className="text-[10px] font-bold text-gray-800 ml-1">
                E-mail de Cadastro
              </label>
              <input
                id="email"
                type="email"
                placeholder="exemplo@estuplay.com.br"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-700 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
              />
              {error && (
                <span className="text-[10px] text-red-500 ml-1">
                  Por favor, insira um e-mail válido.
                </span>
              )}
            </div>

            {/* BOTÃO */}
            <button
              onClick={handleRecovery}
              disabled={isLoading}
              className="w-full bg-[#FFC107] hover:bg-[#ffb300] text-black font-semibold text-xs py-3 rounded-xl transition-colors flex justify-center items-center"
            >
              {isLoading ? 'Enviando...' : 'Enviar Link de Recuperação'}
            </button>

            {/* VOLTAR */}
            <div className="text-center mt-1">
              <a href="#login" className="text-[11px] text-gray-500 hover:text-gray-800 flex items-center justify-center gap-1 font-medium transition-colors">
                <span>&larr;</span> Voltar ao Login
              </a>
            </div>
          </div>
        </main>

       <footer className="w-full bg-[#f3f1ee] py-5 flex items-center justify-center gap-10">
  <button className="bg-[#2196F3] hover:bg-[#1e88e5] text-white font-semibold text-sm py-3 px-12 rounded-xl transition-colors">
    Crie sua conta
  </button>
  <button className="text-gray-800 font-medium text-sm hover:underline">
    Entrar
  </button>
</footer>

      </div>
    </div>
  );
}

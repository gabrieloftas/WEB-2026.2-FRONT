
import heroImage from '../assets/images/heroimage-3.png'
import logoIcon from '../assets/images/vector-9.svg'

function Login() {
  return (
    <main className="flex w-screen h-screen overflow-hidden">
      <section className="w-1/2 h-full max-[700px]:hidden">
        <img
          src={heroImage}
          alt="Ilustração educativa do Kiddos"
          className="block w-full h-full object-cover"
        />
      </section>

      <section className="w-1/2 h-full flex items-center justify-center bg-[#f8fbff] max-[700px]:w-full">
        <div className="w-[61%] max-w-[440px] bg-white border border-[#dce8ff] rounded-[24px] shadow-[0_8px_24px_rgba(30,58,138,0.10)] max-[900px]:w-[70%] max-[700px]:w-[90%] max-[700px]:max-w-[400px]">
          <div className="flex items-center gap-2 mx-10 mt-8 text-base font-bold text-[#1e3a8a]">
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#facc15] rounded-lg">
              <img
                src={logoIcon}
                alt="Logo Kiddos"
                className="w-5 h-5"
              />
            </div>

            <span>Kiddos</span>
          </div>

          <form action="/login" method="POST" className="px-10 pt-6 pb-[30px]">
            <h1 className="mb-5 text-[22px] font-bold text-[#1e3a8a]">
              Bem-vindo de volta!
            </h1>

            <div className="mb-[14px]">
              <label
                htmlFor="email"
                className="block mb-[5px] text-[10px] font-bold text-[#1e3a8a]"
              >
                E-mail do Aluno ou Responsável
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="leo_explorador@eduplay.com"
                autoComplete="email"
                required
                className="w-full h-9 px-3 bg-white border border-[#ebe5df] rounded-lg text-[10px] text-[#1e3a8a] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
              />
            </div>

            <div className="mb-[14px]">
              <label
                htmlFor="senha"
                className="block mb-[5px] text-[10px] font-bold text-[#1e3a8a]"
              >
                Senha
              </label>

              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="Digite sua senha"
                autoComplete="current-password"
                required
                className="w-full h-9 px-3 bg-white border border-[#ebe5df] rounded-lg text-[10px] text-[#1e3a8a] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
              />

              <p className="hidden mt-1 text-[8px] text-[#f25c5c]">
                E-mail ou senha incorretos
              </p>
            </div>

            <div className="flex flex-col gap-[14px] mt-[18px]">
              <a
                href="/recuperar-senha"
                className="text-[9px] font-bold text-[#3b82f6] no-underline hover:underline"
              >
                Esqueceu a senha?
              </a>

              <button
                type="submit"
                className="w-full h-9 border-0 rounded-[9px] bg-[#facc15] text-[10px] font-bold text-[#1e3a8a] cursor-pointer hover:bg-[#f8c900] active:scale-[0.99]"
              >
                Entrar na Aventura
              </button>

              <p className="text-center text-[9px] text-[#7d7b77]">
                Não tem uma conta?{' '}
                <a
                  href="/cadastro"
                  className="font-bold text-[#3b82f6] no-underline hover:underline"
                >
                  Cadastre-se agora
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login

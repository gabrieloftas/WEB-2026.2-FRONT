import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Check } from 'lucide-react'
import heroImage from '../assets/images/heroimage-2.png' // Ajuste o caminho se necessário
import logoIcon from '../assets/images/vector-9.svg'

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Requisitos da senha
  const passwordRequirements = {
    length: formData.senha.length >= 8,
    uppercase: /[A-Z]/.test(formData.senha),
    number: /[0-9]/.test(formData.senha),
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de cadastro aqui
  }

  return (
    <main className="flex w-screen h-screen overflow-hidden">
      {/* Seção da Imagem Lateral */}
      <section className="w-1/2 h-full max-[700px]:hidden">
        <img
          src={heroImage}
          alt="Ilustração de cadastro do Kiddos"
          className="block w-full h-full object-cover"
        />
      </section>

      {/* Seção do Formulário */}
      <section className="w-1/2 h-full flex items-center justify-center bg-[#f8fbff] max-[700px]:w-full overflow-y-auto">
        <div className="w-[61%] max-w-[440px] bg-white border border-[#dce8ff] rounded-[24px] shadow-[0_8px_24px_rgba(30,58,138,0.10)] max-[900px]:w-[70%] max-[700px]:w-[90%] max-[700px]:max-w-[400px] my-auto">
          
          {/* Logo do Topo */}
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

          <form onSubmit={handleSubmit} className="px-10 pt-6 pb-[30px]">
            <h1 className="mb-1 text-[22px] font-bold text-[#1e3a8a]">
              Criar Nova Conta
            </h1>
            <p className="mb-4 text-[9px] text-[#7d7b77]">
              Cadastre-se gratuitamente para começar sua jornada de conhecimento.
            </p>

            {/* Campo: Nome Completo */}
            <div className="mb-3">
              <label
                htmlFor="nome"
                className="block mb-[5px] text-[10px] font-bold text-[#1e3a8a]"
              >
                Nome Completo do Aluno
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Como quer ser chamado?"
                autoComplete="name"
                required
                className="w-full h-9 px-3 bg-white border border-[#ebe5df] rounded-lg text-[10px] text-[#1e3a8a] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
              />
            </div>

            {/* Campo: E-mail */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-[5px] text-[10px] font-bold text-[#1e3a8a]"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="contato@exemplo.com"
                autoComplete="email"
                required
                className="w-full h-9 px-3 bg-white border border-[#ebe5df] rounded-lg text-[10px] text-[#1e3a8a] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
              />
            </div>

            {/* Campos de Senha em Linha */}
            <div className="flex gap-3 mb-3">
              {/* Senha */}
              <div className="w-1/2">
                <label
                  htmlFor="senha"
                  className="block mb-[5px] text-[10px] font-bold text-[#1e3a8a]"
                >
                  Senha
                </label>
                <div className="relative flex items-center">
                  <input
                    id="senha"
                    name="senha"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Senha ultra secreta"
                    autoComplete="new-password"
                    required
                    className="w-full h-9 pl-3 pr-8 bg-white border border-[#ebe5df] rounded-lg text-[10px] text-[#1e3a8a] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 text-[#7d7b77] hover:text-[#1e3a8a] focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              {/* Confirmar Senha */}
              <div className="w-1/2">
                <label
                  htmlFor="confirmarSenha"
                  className="block mb-[5px] text-[10px] font-bold text-[#1e3a8a]"
                >
                  Confirmar Senha
                </label>
                <div className="relative flex items-center">
                  <input
                    id="confirmarSenha"
                    name="confirmarSenha"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    placeholder="Repita a senha"
                    autoComplete="new-password"
                    required
                    className="w-full h-9 pl-3 pr-8 bg-white border border-[#ebe5df] rounded-lg text-[10px] text-[#1e3a8a] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2.5 text-[#7d7b77] hover:text-[#1e3a8a] focus:outline-none"
                  >
                    {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Caixa de Requisitos da Senha */}
            <div className="mb-[14px] bg-[#eff6ff] rounded-lg p-2.5">
              <p className="mb-1 text-[9px] font-bold text-[#1e3a8a]">
                Requisitos de uma senha forte:
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <div className="flex items-center gap-1">
                  <Check
                    size={10}
                    className={passwordRequirements.length ? 'text-[#41cd93]' : 'text-[#7d7b77]'}
                  />
                  <span className="text-[8px] text-[#7d7b77]">8+ caracteres</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check
                    size={10}
                    className={passwordRequirements.uppercase ? 'text-[#41cd93]' : 'text-[#7d7b77]'}
                  />
                  <span className="text-[8px] text-[#7d7b77]">1 letra maiúscula</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check
                    size={10}
                    className={passwordRequirements.number ? 'text-[#41cd93]' : 'text-[#7d7b77]'}
                  />
                  <span className="text-[8px] text-[#7d7b77]">1 número</span>
                </div>
              </div>
            </div>

            {/* Botões e Links de Rodapé do Form */}
            <div className="flex flex-col gap-[14px]">
              <button
                type="submit"
                className="w-full h-9 border-0 rounded-[9px] bg-[#facc15] text-[10px] font-bold text-[#1e3a8a] cursor-pointer hover:bg-[#f8c900] active:scale-[0.99] transition-all"
              >
                Começar a Jogar!
              </button>

              <p className="text-center text-[9px] text-[#7d7b77]">
                Já possui conta?{' '}
                <Link
                  to="/login"
                  className="font-bold text-[#3b82f6] no-underline hover:underline"
                >
                  Faça login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Cadastro
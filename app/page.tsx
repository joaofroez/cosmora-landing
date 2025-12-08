import { Cpu, Rocket, ShieldCheck, BarChart3 } from "lucide-react"; // Instale: npm i lucide-react
import { SolutionCard } from "@/components/SolutionCardProps";
import { LeadForm } from "@/components/LeadForms";
import Image from "next/image";
// import { LeadForm } from "@/components/LeadForm"; // Dev B fará isso depois

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      {/* --- SEÇÃO HERO (Topo) --- */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Coluna da Esquerda: Texto e Logo */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          {/* Logo Improvisado (SVG ou Imagem viria aqui) */}
          {/* Logo Nova com Imagem */}
          <div className="flex items-center justify-center lg:justify-start mb-6">
           <Image 
              src="/img/Cosmora_logo.png" 
              alt="Logo Cosmora Tech"
              width={300} 
              height={60}
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            O Futuro dos Negócios Começa Agora: <br className="hidden lg:block" />
            <span className="text-brand-purple">Soluções de IA Sob Medida</span> para o Seu Crescimento.
          </h1>

          <p className="text-[#666666] text-lg max-w-xl mx-auto lg:mx-0">
            Desenvolvemos estratégias robustas com LLMs para otimizar vendas, 
            atendimento e gestão em empresas de todos os portes. 
            Garantindo sua vantagem competitiva.
          </p>
        </div>

        {/* Coluna da Direita: Espaço do Formulário */}
        <div className="flex-1 w-full max-w-md">
                <LeadForm></LeadForm>
        </div>
      </section>

      {/* --- SEÇÃO SOLUÇÕES (Baixo) --- */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">Nossas soluções</h2>
          <p className=" text-3xl font-bold mb-12 text-[#666666] font-medium">
            Estratégias Inteligentes para Escalar o Seu Negócio.
          </p>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, index) => (
              <SolutionCard 
                key={index}
                title={sol.title}
                description={sol.description}
                Icon={sol.icon}
              />
            ))}
          </div>
        </div>
      </section>
            {/* --- SEÇÃO CTA (Versão Dark Luxury) --- */}
      <section className="bg-[#4C4C4C] py-20 max-w"> 
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Título: Usando o Dourado da marca para destaque */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#EFEFEF] mb-6">
            Personalização Total para o Seu Negócio.
          </h2>

          {/* Texto: Branco levemente transparente para leitura confortável */}
          <div className="text-gray-300 text-lg md:text-xl font-light leading-relaxed space-y-6 mb-12">
            <p>
              Nossa solução começa mapeando a raiz do desafio de sua empresa.
            </p>
            <p>
              Desenvolvemos agentes e modelos treinados especificamente para o seu cenário,
              criando um ecossistema de tecnologia que se adapta a você, e não o contrário.
            </p>
          </div>

          {/* Botão: Dourado com texto preto (Alto Contraste) */}
          <button className="cursor-pointer bg-[#7B61FF] hover:bg-[#6243FF] text-[#1A1A1A] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg shadow-white-500/20 transform hover:-translate-y-1 transition-all duration-300">
            Fale com Nossa Equipe
          </button>
          
        </div>
      </section>
            {/* --- SEÇÃO: MOTIVOS (Versão Enxuta) --- */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Por que a Cosmora?
            </h2>
          </div>

          {/* Grid de 3 Pilares - Foco e Simplicidade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Pilar 1 */}
            <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">ROI em 90 Dias</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Retorno rápido sobre o investimento com automação de processos repetitivos.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Segurança Privada</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Seus dados nunca são compartilhados publicamente. LLMs isoladas e seguras.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Solução Sob Medida</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Modelos treinados especificamente no tom de voz e regras do seu negócio.
              </p>
            </div>

              {/* 4. Escalabilidade (Ícone: Gráfico de barras/Scaling) */}
            <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Escala Ilimitada</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Arquitetura robusta pronta para crescer de 100 a 1 milhão de requisições.
              </p>
            </div>

            {/* 5. Suporte Humano (Ícone: Usuários) */}
            <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Suporte Expert</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Time sênior de engenheiros de IA acompanhando sua jornada passo a passo.
              </p>
            </div>

            {/* 6. Inovação (Ícone: Raio/Zap) */}
            <div className="p-4 hover:bg-gray-50 rounded-2xl transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Sempre Atualizado</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Atualizações automáticas com os modelos mais recentes do mercado (GPT-4o, Claude 3.5).
              </p>
            </div>
          </div>

          {/* Botão de Ação - Estilo "Outline" para variar e não pesar */}
          <div className="mt-12 text-center">
            <button className="cursor-pointer border-2 border-[#7B61FF] text-[#7B61FF] hover:bg-[#7B61FF] hover:text-white font-bold py-3 px-10 rounded-full transition-all duration-300">
              Impulsionar meu negócio
            </button>
          </div>

        </div>
      </section>
      {/* --- FOOTER (Tarefa Extra do Dev A) --- */}
      <footer className="bg-brand-dark text-gray-300 py-8 text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Cosmora Tech. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}

// Dados fictícios para os cards (Baseados na imagem)
const solutions = [
  {
    title: "Automação de Vendas",
    description: "Desenvolvemos estratégias robustas com LLMs para otimizar vendas e conversão.",
    icon: Rocket,
  },
  {
    title: "Atendimento Inteligente",
    description: "Chatbots avançados que entendem contexto e resolvem problemas reais.",
    icon: ShieldCheck,
  },
  {
    title: "Gestão de Dados",
    description: "Organize e extraia insights valiosos dos seus dados empresariais.",
    icon: BarChart3,
  },
  {
    title: "Consultoria IA",
    description: "Análise completa para implementar inteligência artificial no seu negócio.",
    icon: Cpu,
  },
];
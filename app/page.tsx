import { Cpu, Rocket, ShieldCheck, BarChart3 } from "lucide-react"; // Instale: npm i lucide-react
import { SolutionCard } from "@/components/SolutionCardProps";
import { LeadForm } from "@/components/LeadForms";
// import { LeadForm } from "@/components/LeadForm"; // Dev B fará isso depois

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      {/* --- SEÇÃO HERO (Topo) --- */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Coluna da Esquerda: Texto e Logo */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          {/* Logo Improvisado (SVG ou Imagem viria aqui) */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-3xl font-bold text-brand-purple">
            <div className="relative w-10 h-10">
              <Cpu className="w-10 h-10 text-brand-gold" /> {/* Ícone simulando o logo */}
            </div>
            <span>Cosmora <span className="text-brand-gold">Tech</span></span>
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

      {/* --- FOOTER (Tarefa Extra do Dev A) --- */}
      <footer className="bg-brand-dark text-white py-8 text-center">
        <p className="text-sm opacity-70">
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
import MeuBotao from "@/components/MeuBotao";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Olá, Next.js!</h1>
      <p className="mt-4">Seu primeiro componente está funcionando.</p>
      
      <MeuBotao texto="Clique aqui" />
    </main>
  );
}

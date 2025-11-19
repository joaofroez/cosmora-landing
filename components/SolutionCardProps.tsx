// import { LucideIcon } from 'lucide-react'; //para ícones

interface SolutionCardProps {
  title: string;
  description: string;
}

export function SolutionCard({ title, description}: SolutionCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <div className="p-3 bg-purple-50 rounded-full mb-4">
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
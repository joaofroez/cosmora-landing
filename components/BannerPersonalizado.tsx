import React from 'react';

export function CustomizationBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 mb-20">
      {/* Container Cinza Arredondado */}
      <div className="bg-[#B0B0B0] rounded-[2rem] p-10 lg:p-16 text-center shadow-lg">
        
        {/* Título Amarelo */}
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-gold mb-6">
          Personalização Total para o Seu Negócio.
        </h2>

        {/* Textos Brancos */}
        <div className="space-y-4 max-w-3xl mx-auto mb-8">
          <p className="text-white text-lg lg:text-xl font-medium">
            Nossa solução começa mapeando a raiz do desafio de sua empresa.
          </p>
          <p className="text-white text-base lg:text-lg opacity-90 leading-relaxed">
            Desenvolvemos agentes e modelos treinados especificamente para o seu cenário,
            criando um ecossistema de tecnologia que se adapta a você, e não o contrário.
          </p>
        </div>

        {/* Botão Amarelo */}
        <button className="bg-brand-gold hover:bg-[#C9A830] text-brand-dark2 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md cursor-pointer">
          Fale com Nossa Equipe
        </button>
      </div>
    </section>
  );
}
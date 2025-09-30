import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Enfermeira Digital - Home';
    }, []);

    return (
        <main className="w-full flex-1 flex flex-col items-center justify-center">
            <section className="w-full flex items-center justify-center">
                <div className="block text-xl sm:text-2xl leading-relaxed">
                    {/* Introdução amigável */}
                    <div className="mb-8">
                        <h2 className="section-title block-title font-bold">
                            Bem-vindo(a) ao projeto Enfermeira Digital
                        </h2>
                        <p className="text-center max-w-2xl mx-auto mb-4">
                            <span className="font-bold">
                                Enfermeira Digital
                            </span> é uma assistente digital baseada em inteligência artificial, criada para facilitar o seu atendimento médico online.
                            <br /><br />
                            Nosso objetivo é tornar o processo de consulta virtual <span className="font-bold">mais simples, acessível e seguro</span> para todos,
                            oferecendo lembretes, suporte e recursos que ajudam desde o preparo até o momento da consulta.
                            <br /><br />
                            Seja você um paciente recorrente ou alguém que está começando a usar serviços digitais de saúde, aqui você encontra apoio para tirar dúvidas, se organizar e garantir que sua experiência seja tranquila.
                        </p>
                    </div>
                    <p className="text-center mb-8 font-bold text-[var(--titulo-destaque)]">
                        Uma solução inteligente para auxiliar seu atendimento virtual.
                    </p>
                </div>
            </section>
            {/* Linha azul separadora */}
            <div className="w-full h-2 bg-blue my-8" />
        </main>
    );
}
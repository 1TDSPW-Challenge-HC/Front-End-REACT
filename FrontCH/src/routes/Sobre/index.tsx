import { useEffect } from 'react';

interface FeatureProps {
    title: string;
    description: string;
}

function Feature({ title, description }: FeatureProps) {
    return (
        <div className="feature-card">
            <h3 className="list-subtitle block-title">{title}</h3>
            <p className="list-paragraph">{description}</p>
        </div>
    );
}

export default function Sobre() {
    useEffect(() => {
        document.title = 'Enfermeira Digital - Sobre';
    }, []);

    const features = [
        {
            title: "Lembretes",
            description: "Te avisaremos sempre que sua consulta estiver próxima, mostrando o horário e fazendo um teste rápido na sua câmera e microfone, te ajudando a já entrar na consulta preparado e em um ambiente propício"
        },
        {
            title: "Memória local",
            description: "Caso hajam dúvidas ou questões que gostaria de perguntar, nossa enfermeira pode armazenar esses dados localmente caso desejado, lembrando de comunicar seus problemas ao profissional pouco antes da consulta começar"
        },
        {
            title: "Acessibilidade",
            description: "Queremos que nossa solução possa ser utilizada por todos, portanto nosso projeto trabalha com ambos TTS e STT, facilitando a comunicação com a enfermeira e se adaptando a cada caso"
        },
        {
            title: "Guia",
            description: "Caso haja dificuldade, guiaremos você até a consulta, auxiliando e mostrando o que você deve fazer para entrar na sala, basta pedir!"
        }
    ];

    return (
        <main>
            <section className="bg-blue">
                <div className="block">
                    <div className="intro-section">
                        <h2 className="section-title block-title">O que é a enfermeira digital?</h2>
                        <div className="img-wrapper mb-8">
                            <img className="content-image" src="/assets/img/Placeholder2.png" alt="Placeholder2" />
                        </div>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            A enfermeira digital é uma inteligência artifical pronta para te auxiliar com 
                            <span className="text-[var(--texto-destaque)]"> qualquer dificuldade que venha a encontrar </span> 
                            relacionado ao seu atendimento virtual, visando substituir a necessidade de cuidadores 
                            para a entrada da consulta
                        </p>
                    </div>
                    
                    <div className="features-section mt-16">
                        <h2 className="block-title mb-8">Funcionalidades</h2>
                        <p className="text-center mb-12">
                            Nossa enfermeira está sendo projetada para te ajudar de diversas formas e conseguir 
                            dar assistência para o maior número de casos possíveis, dando grande prioridade para 
                            acessibilidade, tendo funções como:
                        </p>
                        
                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <Feature key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
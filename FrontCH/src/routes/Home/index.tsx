import { useEffect } from 'react';

interface FeatureProps {
    title: string;
    description: string;
}

function Feature({ title, description }: FeatureProps) {
    return (
        <>
            <h3 className="list-subtitle block-title">{title}</h3>
            <p className="list-paragraph">{description}</p>
        </>
    );
}

export default function Home() {
    useEffect(() => {
        document.title = 'Enfermeira Digital - Home';
    }, []);

    const features = [
        {
            title: "Lembretes",
            description: "Te avisaremos sempre que sua consulta estiver próxima, mostrando o horário e fazendo um teste rápido na sua câmera e microfone..."
        },
        {
            title: "Memória local",
            description: "Nossa enfermeira pode armazenar esses dados localmente caso desejado, lembrando de comunicar seus problemas ao profissional..."
        },
    ];

    return (
        <main>
            <section className="bg-blue">
                <div className="block" id="enfermeira-digital">
                    <h2 className="section-title block-title">O que é a enfermeira digital?</h2>
                    <div className="img-wrapper">
                        <img id="enfermeira-img" src="/assets/img/Placeholder2.png" alt="Placeholder2" />
                    </div>
                    <p>Nossa enfermeira digital é uma inteligência artifical...</p>
                    
                    <h2 className="block-title">Funcionalidades</h2>
                    {features.map((feature, index) => (
                        <Feature key={index} {...feature} />
                    ))}
                </div>
            </section>
        </main>
    );
}
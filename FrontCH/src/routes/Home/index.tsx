import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Enfermeira Digital - Home';
    }, []);

    return (
        <main>
            <section className="bg-blue">
                <div className="block" id="enfermeira-digital">
                    <h2 className="section-title block-title">Enfermeira Digital</h2>
                    <div className="img-wrapper">
                        <img id="enfermeira-img" src="/assets/img/Placeholder2.png" alt="Placeholder2" />
                    </div>
                    <p>Uma solução inteligente para auxiliar seu atendimento virtual.</p>
                </div>
            </section>
        </main>
    );
}
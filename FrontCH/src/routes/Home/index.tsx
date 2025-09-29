import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Enfermeira Digital - Home';
    }, []);

    return (
        <main>
            <section className="bg-blue">
                <div className="block">
                    <h2 className="section-title block-title">Enfermeira Digital</h2>
                    <div className="image-wrapper">
                        <img className="content-image" src="/assets/img/Placeholder2.png" alt="Placeholder2" />
                    </div>
                    <p>Uma solução inteligente para auxiliar seu atendimento virtual.</p>
                </div>
            </section>
        </main>
    );
}
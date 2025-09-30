import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Enfermeira Digital - Home';
    }, []);

    return (
        <main className="w-full flex-1 flex items-center justify-center">
            <section className="w-full flex items-center justify-center">
                <div className="block">
                    <h2 className="section-title block-title">Enfermeira Digital</h2>
                    <div className="image-wrapper flex justify-center w-full">
                        <img className="content-image" src="/assets/img/Placeholder2.png" alt="Placeholder2" />
                    </div>
                    <p className="text-center text-lg">
                        Uma solução inteligente para auxiliar seu atendimento virtual.
                    </p>
                </div>
            </section>
        </main>
    );
}
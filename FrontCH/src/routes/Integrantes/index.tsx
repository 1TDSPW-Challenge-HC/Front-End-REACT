export default function Integrantes() {
    const integrantes = [
        {
            nome: "Gabriel Fachin",
            turma: "1TDSPW",
            RM: 561551,
            foto: "/assets/img/foto-gabriel.jpeg"
        },
        {
            nome: "Iago Dias",
            turma: "1TDSPW",
            RM: 565708,
            foto: "/assets/img/foto-iago.jpeg"
        },
        {
            nome: "Fernando Charlles",
            turma: "1TDSPW",
            RM: 566482,
            foto: "/assets/img/foto-charlles.jpeg"
        }
    ];

    return (
        <main className="w-full flex-1 flex items-center justify-center">
            <section className="w-full flex items-center justify-center">
                <div className="block" id="integrantes">
                    <h2 className="section-title block-title">Integrantes</h2>
                    <div className="w-full flex flex-wrap justify-center gap-8 mt-8">
                        {integrantes.map((integrante, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-[var(--background-section)] rounded-lg p-6 shadow-lg max-w-sm border border-[var(--detalhe-complementar)]/20 hover:border-[var(--detalhe-complementar)]/40 transition-colors">
                                <img
                                    src={integrante.foto}
                                    alt={`Foto de ${integrante.nome}`}
                                    className="rounded-full w-40 h-40 object-cover mb-6 shadow-md border-2 border-[var(--detalhe-complementar)]"
                                />
                                <h4 className="text-xl font-bold mb-2 text-[var(--titulo-destaque)]">{integrante.nome}</h4>
                                <p className="text-base text-[var(--texto-destaque)] mb-1">{integrante.turma}</p>
                                <p className="text-base text-[var(--texto-destaque)]">RM: {integrante.RM}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
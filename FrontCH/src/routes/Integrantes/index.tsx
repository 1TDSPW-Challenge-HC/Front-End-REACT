export default function Integrantes() {
    const integrantes = [
        {
            nome: "Gabriel Fachin",
            turma: "1TDSPW",
            foto: "/assets/img/foto-gabriel.jpg"
        },
        {
            nome: "Iago Dias",
            turma: "1TDSPW",
            foto: "/assets/img/foto-levi.jpeg"
        },
        {
            nome: "Fernando Charlles",
            turma: "1TDSPW",
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
                            <div key={idx} className="flex flex-col items-center bg-white/10 rounded-lg p-4 shadow-md max-w-xs">
                                <img
                                    src={integrante.foto}
                                    alt={`Foto de ${integrante.nome}`}
                                    className="rounded-full w-32 h-32 object-cover mb-4 shadow"
                                />
                                <h4 className="text-lg font-bold mb-1">{integrante.nome}</h4>
                                <p className="text-sm text-gray-700">{integrante.turma}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
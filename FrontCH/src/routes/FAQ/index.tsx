import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface FAQItem {
    question: string;
    answer: string;
}

export default function Faq() {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const { id } = useParams();

    const faqItems: FAQItem[] = [
        {
            question: "Esse produto é gratuito?",
            answer: "Sim! nosso aplicativo é totalmente gratuito, o mesmo foi desenvolvido sem fins lucrativos"
        },
        {
            question: "Onde posso acessar?",
            answer: "O aplicativo ainda não está disponível para download, mas você poderá se registrar para o acesso adiantado em breve"
        },
        {
            question: "Quando vai ser lançado?",
            answer: "Ainda não existe uma data especificada para o lançamento desse aplicativo em qualquer loja virtual"
        },
        {
            question: "Como vou saber se estou apto para testar?",
            answer: "Quando o pré registro for liberado poderemos disponibilizar mais detalhes"
        }
    ];

    useEffect(() => {
        if (id) {
            const itemIndex = faqItems.findIndex(item => 
                item.question.toLowerCase().includes(id.toLowerCase())
            );
            if (itemIndex !== -1 && !openItems.includes(itemIndex)) {
                setOpenItems(prev => [...prev, itemIndex]);
            }
        }
    }, [id, faqItems, openItems]);

    function toggleItem(index: number) {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    }

    return (
        <main className="w-full flex-1 flex items-center justify-center">
            <section className="w-full flex items-center justify-center">
                <div className="block" id="FAQ">
                    <h2 className="section-title block-title">FAQ</h2>
                    <div className="w-full flex flex-col gap-4">
                        {faqItems.map((item, index) => (
                            <div key={index}>
                                <h3
                                    className="list-subtitle block-title faq-title cursor-pointer flex items-center"
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="toggle-icon mr-2">{openItems.includes(index) ? '-' : '+'}</span>
                                    {item.question}
                                </h3>
                                {openItems.includes(index) && (
                                    <p className="list-paragraph faq-answer">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface FAQItem {
    question: string;
    answer: string;
}

export default function Faq() {
    const [openItem, setOpenItem] = useState<number | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const itemIndex = faqItems.findIndex(item => 
                item.question.toLowerCase().includes(id.toLowerCase())
            );
            if (itemIndex !== -1) setOpenItem(itemIndex);
        }
    }, [id]);

    const faqItems: FAQItem[] = [
        {
            question: "Esse produto é gratuito?",
            answer: "Sim! nosso aplicativo é totalmente gratuito..."
        },
    ];

    return (
        <main>
            <div className="block" id="FAQ">
                <h2 className="section-title block-title">FAQ</h2>
                {faqItems.map((item, index) => (
                    <div key={index}>
                        <h3 className="list-subtitle block-title faq-title" onClick={() => setOpenItem(index === openItem ? null : index)}>
                            <span className="toggle-icon">{openItem === index ? '-' : '+'}</span>
                            {item.question}
                        </h3>
                        {openItem === index && (
                            <p className="list-paragraph faq-answer">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}
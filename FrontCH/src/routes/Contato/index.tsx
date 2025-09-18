import { useState } from 'react';

export default function Contato(){

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
});

const [submittedData, setSubmittedData] = useState<typeof formData[]>([]);

function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData(prevState => ({
        ...prevState,
        
        [name]: value

        
    }));
}


    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setSubmittedData(prevData => [...prevData,formData]);
        setFormData({ name: "", email: "", message: "" });

    }

                const isFormInvalid = formData.name.trim() === '' || 
                          formData.email.trim() === '' || 
                          formData.message.trim() === '';

   return (
        <main>
            <div>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" value={formData.name} onChange={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" value={formData.email} onChange={handleChange} name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" value={formData.message} onChange={handleChange} name="message" />
                    </div>
                        <button type="submit" disabled={isFormInvalid}>
                        SALVAR
                    </button>
                </form>

                <hr style={{ margin: '2rem 0' }} />

                <div>
                    <h2>Histórico de Envios:</h2>
                    {submittedData.length > 0 ? (
                        <ul>
                            {submittedData.map((data, index) => (
                                <li key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '1rem' }}>
                                    <p><strong>Nome:</strong> {data.name}</p>
                                    <p><strong>Email:</strong> {data.email}</p>
                                    <p><strong>Mensagem:</strong> {data.message}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum feedback enviado ainda.</p>
                    )}
                </div>
            </div>
        </main>
    );
}